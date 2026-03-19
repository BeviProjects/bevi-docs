"use client";
import { Header } from "@component/Header";
import { DrawerContext } from "@context/DrawerContext";
import type { ReactNode } from "react";

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
