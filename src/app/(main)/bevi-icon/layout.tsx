"use client";
import { IconGlobalVariant } from "@bevi-icon/contexts/IconGlobalVariantContext";
import { Footer } from "@component/Footer";
import { LibSelectedProvider } from "@context/LibSelectedContext";
import { allBvIcons, type BvIconRegistry } from "bevi-icon";
import type { ReactNode } from "react";
import { Suspense } from "react";

const BeviIconLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<Suspense>
			<LibSelectedProvider<BvIconRegistry> initialData={allBvIcons}>
				<IconGlobalVariant.Provider
					initialData={{ variant: "duo", weight: 400 }}
				>
					<div className="w-full bg-gray-95">
						<main className="min-h-screen flex-bgs pb-5xl">{children}</main>
						<Footer>
							<p>Total: {allBvIcons.length}</p>
						</Footer>
					</div>
				</IconGlobalVariant.Provider>
			</LibSelectedProvider>
		</Suspense>
	);
};

export default BeviIconLayout;
