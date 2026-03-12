import { Header } from "@component/Header";
import type { ReactNode } from "react";

const MainLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="min-h-screen flex flex-row">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
