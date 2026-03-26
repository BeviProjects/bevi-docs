"use client";

import useClipboard from "@hook/useClipboard";
import type { ReactNode, RefObject } from "react";

type CopySvgToClipboardProps = {
	targetRef: RefObject<HTMLDivElement | null>;
	className?: string;
	children: ReactNode;
};

export const CopySvgToClipboard = ({
	children,
	className,
	targetRef,
}: CopySvgToClipboardProps) => {
	const { copy } = useClipboard();

	const handleCopy = async () => {
		if (!targetRef.current) {
			console.warn("CopySvgButton: ref ainda não está disponível.");
			return;
		}

		const svgElement = targetRef.current.querySelector("svg");

		if (!svgElement) {
			console.warn("CopySvgButton: nenhum <svg> encontrado dentro da ref.");
			return;
		}

		await copy(svgElement.outerHTML);
	};

	return (
		<button type="button" onClick={handleCopy} className={className}>
			{children}
		</button>
	);
};
