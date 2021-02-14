import React from "react";

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className="h-12 border-t-2 border-greenr-1000 my-4 font-pressStart text-xs">
      <div className="mt-2">
        <div>Desarrollado por: Neftaio neftaiof@gmail.com</div>
        <div>Copyright &copy; {year}</div>
      </div>
    </footer>
  );
};

export default Footer;
