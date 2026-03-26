"use client";

import type { ReactNode, RefObject } from "react";

type DownloadSvgProps = {
  targetRef: RefObject<HTMLDivElement | null>;
  filename: string;
  className?: string;
  children: ReactNode;
  color?: string;
};

export const DownloadSvg = ({
  children,
  className,
  targetRef,
  filename,
  color,
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

    const svgToSerialize = (() => {
      if (!color) return svgElement;

      const clone = svgElement.cloneNode(true) as SVGElement;

      clone
        .querySelectorAll<SVGElement>(
          "path, circle, rect, ellipse, line, polyline, polygon"
        )
        .forEach((el) => el.setAttribute("fill", `#${color}`));

      return clone;
    })();

    const blob = new Blob([svgToSerialize.outerHTML], {
      type: "image/svg+xml",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}.svg`;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button type="button" onClick={handleDownload} className={className}>
      {children}
    </button>
  );
};
