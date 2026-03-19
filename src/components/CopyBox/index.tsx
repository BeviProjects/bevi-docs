"use client";
import { useEffect, useState, type ReactNode } from "react";
import { useClipboard } from "@hook/useClipboard";
import { Tooltip } from "@component/Tooltip";
import { LabelContent } from "@component/LabelContent";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type CopyBoxProps = {
  as?: HeadingTag;
  children: ReactNode;
  label: string;
  size?: string;
  value: string;
};

export const CopyBox = ({
  as: Tag = "h2",
  children,
  label,
  size = "text-2xl",
  value,
}: CopyBoxProps) => {
  const { copy, isCopied, status } = useClipboard();
  const [tooltipMessage, setTooltipMessage] = useState<string>(
    `copiar ${value}`,
  );

  useEffect(() => {
    if (isCopied) {
      setTooltipMessage(` ${value} copiado`);
      setTimeout(() => setTooltipMessage(`copiar ${value}`), 3000);
    }
  }, [isCopied]);

  return (
    <Tooltip label={tooltipMessage}>
      <button
        type="button"
        className="relative flex-start flex-col gap-4xs p-2xs rounded-xs cursor-pointer inset-ring-1 inset-ring-transparent hover:inset-ring-gray-85"
        onClick={() => copy(value)}
      >
        <LabelContent label={label}>{children}</LabelContent>
      </button>
    </Tooltip>
  );
};
