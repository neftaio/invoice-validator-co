import InvoiceContext from "@components/InvoiceContext";
import { AlertType } from "enums";
import React, { useContext } from "react";

const Message: React.FC = () => {
  const { openMessage, message } = useContext(InvoiceContext);

  return (
    <>
      {openMessage ? (
        <div className="border-2 border-solid border-greenr-1000 mt-4 px-4 py-4 rounded-lg bg-black">
          {message.map((msg, index) => (
            <div
              key={index}
              className={
                msg.alerttype === AlertType.ERROR
                  ? "text-redr-1000"
                  : msg.alerttype === AlertType.WARNING
                  ? "text-yellowr-1000"
                  : "text-greenr-1000"
              }
            >
              <div className="text-sm font-bold">
                {msg.alerttype === AlertType.ERROR ? (
                  <span>&times;</span>
                ) : msg.alerttype === AlertType.WARNING ? (
                  <span>&asymp;</span>
                ) : (
                  <span>&radic;</span>
                )}
                {" . . . . "}
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Message;
