import { AlertType } from "enums";
import type { NextApiRequest, NextApiResponse } from "next";

const xsd = require("libxmljs2-xsd");

const parser = require("fast-xml-parser");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);

    const xmlBody = body.xmlBody;

    if (xmlBody) {
      console.log("get data sucess");
      const validation = Validate(xmlBody);

      console.log(typeof validation);

      res.status(200).json({ validation });
    }
  } else {
    res.status(404).json({ error: "-- Method not accepted --" });
  }
};

const ListOfValidatedSchemas = (
  schemasValidated: SchemaValidated[]
): string[] => {
  const list = schemasValidated.reduce(
    (acc: string[], elment: SchemaValidated) => {
      if (
        elment.validated.length &&
        elment.validated[elment.validated.length - 1].alerttype ===
          AlertType.SUCCESS
      ) {
        acc.push(elment.name);
      }
      return acc;
    },
    []
  );

  return list;
};

const FormatMultileSchemaResults = (
  schemasValidated: SchemaValidated[]
): Alert[] => {
  return schemasValidated.reduce((acc, schema) => {
    acc.push({
      text: `Tipo evaluado: ${schema.name}`,
      alerttype: AlertType.SUCCESS,
    });
    acc = acc.concat(schema.validated);
    acc.push({
      text: "=====================================================",
      alerttype: AlertType.SUCCESS,
    });
    return acc;
  }, []);
};

const FilterByValidSchemas = (
  schemasValidated: SchemaValidated[],
  listValidSchemas: string[]
): SchemaValidated[] => {
  let resultAlerts = [];

  for (var i = 0, len = listValidSchemas.length; i < len; i++) {
    let specificAlerts = schemasValidated.filter(
      (schema) => schema.name === listValidSchemas[i]
    );

    if (specificAlerts.length) {
      resultAlerts = resultAlerts.concat(specificAlerts);
    }
  }

  return resultAlerts;
};

const InnerBodyFromAttachedDocumnet = (xmlBody: string): string => {
  try {
    const options = {
      cdataTagName: "__cdata",
      ignoreNameSpace: true,
    };

    const jsonObj = parser.parse(xmlBody, options, true);

    return jsonObj.AttachedDocument.Attachment.ExternalReference.Description
      .__cdata;
  } catch (e) {
    return "";
  }
};

const Validate = (xmlBody: string) => {
  const schemaFiles: SchemaFiles[] = [
    {
      name: "INVOICE",
      path: "./xsd/maindoc/UBL-Invoice-2.1.xsd",
    },
    {
      name: "ATTACHED_DOCUMENT",
      path: "./xsd/maindoc/UBL-AttachedDocument-2.1.xsd",
    },
    {
      name: "CREDIT_NOTE",
      path: "./xsd/maindoc/UBL-CreditNote-2.1.xsd",
    },
    {
      name: "DEBIT_NOTE",
      path: "./xsd/maindoc/UBL-DebitNote-2.1.xsd",
    },
  ];

  const schemaValidated = schemaFiles.map((schema) => {
    return {
      ...schema,
      validated: validateWithSchema(schema.path, xmlBody),
    };
  });

  const validSchemas: string[] = ListOfValidatedSchemas(schemaValidated);

  if (validSchemas.length && !validSchemas.includes("ATTACHED_DOCUMENT")) {
    return FormatMultileSchemaResults(
      FilterByValidSchemas(schemaValidated, validSchemas)
    );
  }

  if (validSchemas.includes("ATTACHED_DOCUMENT")) {
    let validatedSchemasFormated = FormatMultileSchemaResults(
      FilterByValidSchemas(schemaValidated, validSchemas)
    );

    // Recursive validation of inner content in AttachedDocument.
    const hasSpecialCharacters = validatedSchemasFormated.filter(
      (validation) =>
        validation.text === "Contiene caracteres especiales como: &"
    );

    if (hasSpecialCharacters.length) {
      return validatedSchemasFormated.concat(
        Validate(InnerBodyFromAttachedDocumnet(htmlspecialchars(xmlBody)))
      );
    }

    return validatedSchemasFormated.concat(
      Validate(InnerBodyFromAttachedDocumnet(xmlBody))
    );
  }

  return FormatMultileSchemaResults(schemaValidated);
};

const htmlspecialchars = (str: string) => {
  return str.replace(/&/g, "&amp;");
};

const validateWithSchema = (schemaPath: string, xmlBody: string) => {
  const schema = xsd.parseFile(schemaPath);

  let result: Alert[] = [];

  try {
    let validation = schema.validate(xmlBody);

    if (validation === null) {
      result.push({
        text: "El archivo es valido.",
        alerttype: AlertType.SUCCESS,
      });
    } else {
      for (var i = 0, len = validation.length; i < len; i++) {
        result.push({
          text: `LINEA: ${validation[i].line}. COLUMNA: ${validation[i].column}. DESCRIPCION: ${validation[i].message}`,
          alerttype: AlertType.ERROR,
        });
      }
    }
  } catch (error) {
    if (error.message.includes("EntityRef: expecting ';'")) {
      result.push({
        text: "Contiene caracteres especiales como: &",
        alerttype: AlertType.WARNING,
      });

      try {
        let validation = schema.validate(htmlspecialchars(xmlBody));

        if (validation === null) {
          result.push({
            text: "El archivo es valido.",
            alerttype: AlertType.SUCCESS,
          });
        } else {
          for (var i = 0, len = validation.length; i < len; i++) {
            result.push({ text: "Error", alerttype: AlertType.ERROR });
          }
        }
      } catch (err) {}
    } else {
      result.push({
        text: "Error al intentar validar la factura",
        alerttype: AlertType.ERROR,
      });
    }
  }

  return result;
};
