import type { ReactNode } from "react";
import { ActionBar } from "@/components/ActionBar";

const BeviLogoLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <>
      <ActionBar />
      {children}
    </>
  );
};

export default BeviLogoLayout;
