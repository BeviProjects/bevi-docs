"use client";
import useClipboard from "@hook/useClipboard";
import { BvIcon } from "bevi-icon";
import { useState } from "react";
import { highlight } from "sugar-high";

export type CodeBlockProps = {
	children: string;
  language?: string;
  className?: string
};

export const CodeBlock = ({
	children,
  language = "typescript",
	className
}: CodeBlockProps) => {
	const highlightedCode = highlight(children);
	const [copied, setCopied] = useState(false);
	const { copy } = useClipboard();

	const clickToCopy = () => {
		setCopied(true);
		copy(children);
		setTimeout(() => {
			setCopied(false);
		}, 4000);
	};

	return (
		<pre
			data-language={language}
			className={`
        relative group w-full
        py-3xs pl-2xs pr-3xl mb-md
        rounded-2xs bg-gray-25
        whitespace-pre-wrap break-all
        inset-ring-1 inset-ring-gray-10
        ${className}
      `}
		>
			<code
				dangerouslySetInnerHTML={{ __html: highlightedCode }}
				className="w-full text-violet-80"
			/>

			<button
				type="button"
				className={`
            absolute top-5xs right-5xs
            p-2xs
            cursor-pointer
            rounded-3xs bg-gray-35
            inset-ring-1 inset-ring-gray-45
            opacity-0
            group-hover:opacity-100
          `}
				onClick={clickToCopy}
			>
				<BvIcon
					name={copied ? "checkCircle" : "fileCopy"}
					width={16}
					className="text-gray-90"
					title={copied ? "Copied!" : "Copy"}
				/>
			</button>
		</pre>
	);
};
