import InvoiceContext from "@components/InvoiceContext";
import { AlertType } from "enums";
import React, { useContext, useRef, useState } from "react";

const InvoiceReader: React.FC = () => {
  const [validated, setValidated] = useState<number>(1);

  const [fileName, setFileName] = useState<string>("");

  const {
    dispatchXmlBody,
    dispatchMessage,
    handleOpenMessage,
    message,
  } = useContext(InvoiceContext);

  const fileRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    fileRef.current.value = null;

    handleOpenMessage(false);

    dispatchXmlBody("");

    setFileName("");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleOpenMessage(false);

    dispatchMessage([]);

    setFileName("");

    const [file] = e.target.files;

    if (!file) {
      handleOpenMessage(false);

      dispatchXmlBody("");

      setFileName("");

      return;
    }

    const { name, size, type: fileType } = file;

    setFileName(name);

    if (fileType !== "text/xml") {
      setValidated(0);

      dispatchMessage([
        {
          text: "El archivo no es reconocido como un XML",
          alerttype: AlertType.ERROR,
        },
      ]);

      handleOpenMessage(true);
    }

    if (size < 1000) {
      setValidated(0);

      let sizeMB = size / 1000;

      message.push({
        text: `El archivo pesa: ${sizeMB}, solo se admiten arcihvos de menos de 1MB`,
        alerttype: AlertType.ERROR,
      });

      dispatchMessage(message);
    }

    if (validated) {
      readFile(file);
    }
  };

  const readFile = (file: File) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      dispatchXmlBody(e.target.result);
    };

    reader.readAsText(file);
  };

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <label className="flex flex-col items-center px-12 py-2 rounded-lg shadow-lg tracking-wide uppercase cursor-pointer text-greenr-1000 bg-blackr-1000 hover:bg-greenr-1000 hover:text-black focus:bg-greenr-1000 focus:text-black border-greenr-1000 border-solid border font-semibold">
          <span className="text-base leading-normal">Add XML</span>
          <input
            type="file"
            className="hidden"
            onChange={handleOnChange}
            accept=".xml"
            ref={fileRef}
          />
        </label>
      </div>
      <div className="text-center mt-2">{fileName}</div>
      <div className="flex justify-end">
        <button
          className="border border-solid font-semibold text-redr-1000 border-redr-1000 rounded-md shadow-lg px-2 cursor-pointer text-sm hover:bg-redr-1000 hover:text-black focus:bg-redr-1000 focus:text-black"
          onClick={reset}
        >
          Limpiar
        </button>
      </div>
    </>
  );
};

export default InvoiceReader;
