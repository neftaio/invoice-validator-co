import React from "react";

const Description: React.FC = () => {
  return (
    <div>
      <h2>Descripcion</h2>
      <p>
        Mediante esta aplicacion podra verificar la valides del formato de
        factura electronica proporcionado por el Anexo Tecnico de Factura
        Electronica de Venta - Version 1.7-2020 mediante la resolucion No 000042
        del 05 de Mayo de 2020 expedido por la Direccion de Impuestos y Aduanas
        Nacionales.
      </p>

      <h2>Uso</h2>
      <p>
        Para su uso ingrese el archivo .xml dentro del campo indicado y de click
        a validar.
      </p>
    </div>
  );
};

export default Description;
