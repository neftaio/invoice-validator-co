import React from "react";

const Header: React.FC = () => {
  return (
    <header className="text-greenr-1000 text-center font-pressStart py-4 border-b-2 border-greenr-1000 mb-2 sm:mb-8">
      <h1 className="lg:text-5xl md:text-3xl leading-7 pb-1 md:leading-normal lg:leading-normal">
        Validador Factura Electronica{" "}
        <span className="text-yellowr-1000">C</span>
        <span className="text-bluer-1000 px-1">O</span>
        <span className="text-redr-1000">L</span>
      </h1>
    </header>
  );
};

export default Header;
