import { highlight } from "sugar-high";

interface CodeBlockProps {
	children: string;
	language?: string;
}

export const CodeBlock = ({
	children,
	language = "typescript",
}: CodeBlockProps) => {
	const highlightedCode = highlight(children);

	return (
		<pre data-language={language} className="py-3xs px-2xs rounded-2xs inset-ring-1 inset-ring-gray-15 bg-gray-25">
			<code dangerouslySetInnerHTML={{ __html: highlightedCode }} className="text-violet-80" />
		</pre>
	);
};
