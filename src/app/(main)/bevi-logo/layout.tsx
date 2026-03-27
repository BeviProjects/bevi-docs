import { Footer } from "@component/Footer";
import { LibSelectedProvider } from "@context/LibSelectedContext";
import { allBvLogos, type BvLogoRegistryType } from "bevi-logo";
import type { ReactNode } from "react";
import { Suspense } from "react";

const BeviLogoLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<Suspense>
			<LibSelectedProvider<BvLogoRegistryType> initialData={allBvLogos}>
				<div className="w-full">
					<main className="flex-bgs pb-5xl">{children}</main>
					<Footer>Test</Footer>
				</div>
			</LibSelectedProvider>
		</Suspense>
	);
};

export default BeviLogoLayout;
