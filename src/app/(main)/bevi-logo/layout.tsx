import { LibSelectedProvider } from "@context/LibSelectedContext";
import { type LogoRegistry, logos } from "bevi-logo";
import type { ReactNode } from "react";

const BeviLogoLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<LibSelectedProvider<LogoRegistry> initialData={logos}>
			{children}
		</LibSelectedProvider>
	);
};

export default BeviLogoLayout;
