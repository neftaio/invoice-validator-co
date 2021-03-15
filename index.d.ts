type LayoutProps = {
  children?: React.ReactNode;
};

type Alert = {
  text: string;
  alerttype: AlertType;
};

type InvoiceData = {
  message: Alert[];
  openMessage: boolean;
  xmlBody: string | ArrayBuffer;
  validationDescription: string;
  handleOpenMessage: (open: boolean) => void;
  dispatchMessage: (msg: Alert[]) => void;
  dispatchXmlBody: (xml: string | ArrayBuffer) => void;
  dispatchValidationDescription: (description: string) => void;
};

type SchemaFiles = {
  name: string;
  path: string;
};

type SchemaValidated = {
  name: string;
  path: string;
  validated: Alert[];
};
