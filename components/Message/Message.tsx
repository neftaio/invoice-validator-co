import InvoiceContext from "@components/InvoiceContext";
import React, { useContext } from "react";

const Message: React.FC = () => {
  const { openMessage, message } = useContext(InvoiceContext);

  return (
    <>
      {openMessage ? (
        <div className="border border-solid text-yellowr-1000">{message}</div>
      ) : null}
    </>
  );
};

export default Message;
