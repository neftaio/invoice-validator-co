import React from "react";

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className="h-12 border-t-2 border-greenr-1000 my-4 font-pressStart text-xxs sm:text-xs text-center">
      <div className="mt-2">
        <div>Desarrollado por: Neftaio neftaiof@gmail.com</div>
        <div>Creado, marzo 2021</div>
        <div>Copyright &copy; {year}</div>
      </div>
    </footer>
  );
};

export default Footer;
