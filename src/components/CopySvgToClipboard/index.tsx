"use client";

import useClipboard from "@hook/useClipboard";
import type { ReactNode, RefObject } from "react";

type CopySvgToClipboardProps = {
	targetRef: RefObject<HTMLDivElement | null>;
	className?: string;
  children: ReactNode;
  color?: string;
};

export const CopySvgToClipboard = ({
	children,
	className,
  targetRef,
	color
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

		if (!color) {
      await copy(svgElement.outerHTML);
      return;
    }

		const svgClone = svgElement.cloneNode(true) as SVGElement;

    const colorableElements = svgClone.querySelectorAll<SVGElement>(
      "path, circle, rect, ellipse, line, polyline, polygon"
    );

    colorableElements.forEach((el) => {
      el.setAttribute("fill", `#${color}`);
    });

    await copy(svgClone.outerHTML);
	};

	return (
		<button type="button" onClick={handleCopy} className={className}>
			{children}
		</button>
	);
};
