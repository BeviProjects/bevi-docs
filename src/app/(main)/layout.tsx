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
			<main className="flex-bgs pb-5xl">{children}</main>
		</div>
	);
};

export default MainLayout;
