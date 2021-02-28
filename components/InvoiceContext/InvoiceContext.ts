import React from "react";

const handleOpenMessage = () => {};

const dispatchMessage = () => {};

const dispatchXmlBody = () => {};

const dispatchValidationDescription = () => {};

const invoiceData: InvoiceData = {
  message: "",
  openMessage: false,
  xmlBody: "",
  validationDescription: "",
  handleOpenMessage,
  dispatchMessage,
  dispatchXmlBody,
  dispatchValidationDescription,
};

const InvoiceContext = React.createContext(invoiceData);

export default InvoiceContext;
