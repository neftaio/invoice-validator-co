import React from "react";

const InvoiceReader: React.FC = () => {
  const handleOnChange = () => {
    console.log("hellow");
  };
  return (
    <div className="text-center">
      <label
        htmlFor="invoicexml"
        className="text-xl text-greenr-1000 bg-blackr-1000 hover:bg-greenr-1000 hover:text-black focus:bg-greenr-1000 focus:text-black cursor-pointer border-greenr-1000 border-solid border py-1 px-8 rounded-lg font-semibold "
      >
        Add XML
      </label>
      <input
        className="w-0 h-0 opacity-0 overflow-hidden absolute"
        name="invoicexml"
        type="file"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default InvoiceReader;
