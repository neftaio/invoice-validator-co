import Description from "@components/Description";
import InvoiceContext from "@components/InvoiceContext";
import InvoiceReader from "@components/InvoiceReader";
import Message from "@components/Message/Message";
import ValidateXml from "@components/ValidateXml";
import React, { useState } from "react";

const InvoiceValidator: React.FC = () => {
  const [message, setMessage] = useState<Alert[] | null>([]);
  const [openMessage, setOpenMessage] = useState<boolean>(false);
  const [xmlBody, setXmlBody] = useState<string>("");
  const [validationDescription, setValidationDescription] = useState<string>(
    ""
  );

  const handleOpenMessage = (open: boolean) => {
    setOpenMessage(open);
  };

  const dispatchMessage = (msg: Alert[]) => {
    setMessage(msg);
    if (msg.length) {
      setOpenMessage(true);
    }
  };

  const dispatchXmlBody = (xml: string) => {
    setXmlBody(xml);
  };

  const dispatchValidationDescription = (description: string) => {
    setValidationDescription(description);
  };

  return (
    <InvoiceContext.Provider
      value={{
        message,
        openMessage,
        xmlBody,
        validationDescription,
        handleOpenMessage,
        dispatchMessage,
        dispatchXmlBody,
        dispatchValidationDescription,
      }}
    >
      <div className="">
        <Description />
        <InvoiceReader />
        <ValidateXml />
        <Message />
      </div>
    </InvoiceContext.Provider>
  );
};

export default InvoiceValidator;
