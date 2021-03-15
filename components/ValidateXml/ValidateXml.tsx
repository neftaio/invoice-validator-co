import InvoiceContext from "@components/InvoiceContext";
import React, { useContext, useEffect } from "react";
//import xsd from "libxmljs2-xsd";

const ValidateXml: React.FC = () => {
  const { xmlBody } = useContext(InvoiceContext);

  useEffect(() => {
    console.log("The new time, time");
    validateInvoice(xmlBody);
  }, [xmlBody]);

  const validateInvoice = async (xmlBody: string | ArrayBuffer) => {
    const res = await fetch("/api/validate", {
      method: "POST",
      body: JSON.stringify({ xmlBody }),
    });

    console.log(res);
  };

  return <></>;
};

export default ValidateXml;
