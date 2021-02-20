import Description from "@components/Description";
import InvoiceReader from "@components/InvoiceReader";
import React from "react";

const InvoiceValidator = () => {
  return (
    <div className="container">
      <Description />
      <InvoiceReader />
    </div>
  );
};

export default InvoiceValidator;
