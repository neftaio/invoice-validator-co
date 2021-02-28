type LayoutProps = {
  children?: React.ReactNode;
};

type InvoiceData = {
  message?: string;
  openMessage: boolean;
  xmlBody: string;
  validationDescription: string;
  handleOpenMessage: (open: boolean) => void;
  dispatchMessage: (msg: string) => void;
  dispatchXmlBody: (xml: string) => void;
  dispatchValidationDescription: (description: string) => void;
};
