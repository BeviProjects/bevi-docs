import type { ReactNode } from "react";
import { ActionBar } from "@/components/ActionBar";

const BeviIconLayout = ({
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

export default BeviIconLayout;
