"use client";
import { Header } from "@component/Header";
import type { ReactNode } from "react";
import { DrawerContext } from "@context/DrawerContext";

const MainLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="min-h-screen flex flex-row" data-vaul-drawer-wrapper="">
      <DrawerContext.Provider>
        <Header />
        {children}
      </DrawerContext.Provider>
    </div>
  );
};

export default MainLayout;
