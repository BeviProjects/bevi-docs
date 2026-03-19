"use client";
import { LabelContent } from "@component/LabelContent";
import { Tooltip } from "@component/Tooltip";
import { useClipboard } from "@hook/useClipboard";
import { type ReactNode, useEffect, useState } from "react";

type CopyBoxProps = {
	children: ReactNode;
	label: string;
	value: string;
};

export const CopyBox = ({ children, label, value }: CopyBoxProps) => {
	const { copy, isCopied } = useClipboard();
	const [tooltipMessage, setTooltipMessage] = useState<string>(
		`copiar ${value}`,
	);

	useEffect(() => {
		if (isCopied) {
			setTooltipMessage(` ${value} copiado`);
			setTimeout(() => setTooltipMessage(`copiar ${value}`), 3000);
		}
	}, [isCopied, value]);

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
