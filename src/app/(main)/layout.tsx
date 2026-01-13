import type { ReactNode } from "react";
import { Header } from "@component/Header";

const MainLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="min-h-screen flex flex-row">
      <Header />
      <main className="flex-bgs">{children}</main>
    </div>
  );
};

export default MainLayout;
