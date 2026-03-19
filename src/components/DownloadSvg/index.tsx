"use client";

import type { ReactNode, RefObject } from "react";

type DownloadSvgProps = {
	targetRef: RefObject<HTMLDivElement | null>;
	filename: string; // ← nome do arquivo, sem extensão
	className?: string;
	children: ReactNode;
};

export const DownloadSvg = ({
	children,
	className,
	targetRef,
	filename,
}: DownloadSvgProps) => {
	const handleDownload = () => {
		if (!targetRef.current) {
			console.warn("DownloadSvg: ref ainda não está disponível.");
			return;
		}

		const svgElement = targetRef.current.querySelector("svg");

		if (!svgElement) {
			console.warn("DownloadSvg: nenhum <svg> encontrado dentro da ref.");
			return;
		}

		// 1. Serializa o SVG para string
		const svgString = svgElement.outerHTML;

		// 2. Cria um arquivo em memória com o conteúdo do SVG
		const blob = new Blob([svgString], { type: "image/svg+xml" });

		// 3. Gera uma URL temporária apontando para esse arquivo
		const url = URL.createObjectURL(blob);

		// 4. Cria um <a> invisível, aponta para a URL e dispara o clique
		const link = document.createElement("a");
		link.href = url;
		link.download = `${filename}.svg`;
		link.click();

		// 5. Revoga a URL para liberar memória
		URL.revokeObjectURL(url);
	};

	return (
		<button type="button" onClick={handleDownload} className={className}>
			{children}
		</button>
	);
};
