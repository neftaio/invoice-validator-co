import React from "react";

const Description: React.FC = () => {
  return (
    <div className="px-1 sm:px-4 md:px-8">
      <h2 className="font-pressStart text-greenr text-xs sm:text-sm md:text-base">
        Descripcion
      </h2>
      <p className="font-quickSand text-gray-50 font-semibold tracking-wider pl-1 mb-4 md:mb-8 text-justify text-xs sm:text-base">
        Mediante esta aplicacion podra verificar la valides del formato de
        factura electronica proporcionado por el Anexo Tecnico de Factura
        Electronica de Venta - Version 1.7-2020 mediante la resolucion No 000042
        del 05 de Mayo de 2020 expedido por la Direccion de Impuestos y Aduanas
        Nacionales.
      </p>

      <h2 className="font-pressStart text-greenr text-xs sm:text-sm md:text-base">
        Uso
      </h2>
      <p className="font-quickSand text-gray-50 font-semibold tracking-wider pl-1 mb-4 md:mb-8 text-justify text-xs sm:text-base">
        Para su uso ingrese el archivo .xml dentro del campo indicado y de click
        a validarm.
      </p>
    </div>
  );
};

export default Description;
