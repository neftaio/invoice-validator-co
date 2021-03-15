import InvoiceContext from "@components/InvoiceContext";
import React, { useContext, useEffect } from "react";

const ValidateXml: React.FC = () => {
  const { xmlBody, dispatchMessage, handleOpenMessage } = useContext(
    InvoiceContext
  );

  useEffect(() => {
    validateInvoice(xmlBody);
  }, [xmlBody]);

  const validateInvoice = async (xmlBody: string | ArrayBuffer) => {
    if (xmlBody) {
      const res = await fetch("/api/validate", {
        method: "POST",
        body: JSON.stringify({ xmlBody }),
      });

      const validate = await res.json();

      dispatchMessage(validate.validation);

      handleOpenMessage(true);
    }
  };

  return <></>;
};

export default ValidateXml;
