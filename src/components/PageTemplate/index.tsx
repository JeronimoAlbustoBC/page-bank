import { PropsWithChildren } from "react";
import { Navbar } from "../Molecules/Navbar";
import { Footer } from "../Molecules/Footer";

interface Props {}

export const PageTemplate: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
