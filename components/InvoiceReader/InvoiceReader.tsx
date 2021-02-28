import InvoiceContext from "@components/InvoiceContext";
import React, { useContext } from "react";

const InvoiceReader: React.FC = () => {
  const { dispatchXmlBody } = useContext(InvoiceContext);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = e.target.files;

    if (!file) return;

    const { name: fileName, size, type: fileType } = file;

    if (fileType !== "text/xml") {
    }

    console.log("hellow", file, fileName, size);
  };

  return (
    <div className="flex w-full items-center justify-center">
      <label className="flex flex-col items-center px-12 py-2 rounded-lg shadow-lg tracking-wide uppercase cursor-pointer text-greenr-1000 bg-blackr-1000 hover:bg-greenr-1000 hover:text-black focus:bg-greenr-1000 focus:text-black border-greenr-1000 border-solid border font-semibold">
        <span className="text-base leading-normal">Add XML</span>
        <input type="file" className="hidden" onChange={handleOnChange} />
      </label>
    </div>
  );
};

export default InvoiceReader;
