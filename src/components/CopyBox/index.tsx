"use client";
import { useEffect, useState, type ReactNode } from "react";
import { useClipboard } from "@/hooks/useClipboard";
import { Tooltip } from "@/components/Tooltip";

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
  size = 'text-2xl',
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
        <small className="text-sm text-gray-35 leading-none">{label}</small>
        <Tag className={`${size} font-bold leading-none`}>{children}</Tag>
      </button>
    </Tooltip>
  );
};
