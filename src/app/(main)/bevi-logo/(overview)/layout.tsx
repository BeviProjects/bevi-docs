"use client";
import { AlphabeticLinks } from "@component/AlphabetLinks";
import { useLibSelectedContext } from "@context/LibSelectedContext";
import useElementSize from "@hook/useElementSize";
import type { LogoRegistryType } from "bevi-logo";
import type { ReactNode } from "react";
import { ActionBar } from "@/components/ActionBar";
import { SearchBar } from "@/components/SearchBar";

const BeviLogoLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	const { sortedLetters } = useLibSelectedContext<LogoRegistryType>();
	const [ref, { height }] = useElementSize<HTMLDivElement>();

	return (
		<>
			<ActionBar ref={ref}>
				<div className="flex flex-col gap-2xs">
					<div>
						<SearchBar />
					</div>
					<div>
						<AlphabeticLinks letters={sortedLetters} />
					</div>
				</div>
			</ActionBar>
			<div style={{ paddingTop: height }}>{children}</div>
		</>
	);
};

export default BeviLogoLayout;
