import type { ReactNode } from "react";

type TooltipProps = {
	children: ReactNode;
	label?: string;
};

export const Tooltip = ({ children, label = "Label" }: TooltipProps) => {
	return (
		<div className="tooltip relative group">
			<aside
				className={`
          w-fit absolute left-1/2 top-0
          transform -translate-x-1/2 group-hover:-translate-y-md
          flex-center py-6xs px-4xs
          opacity-0 group-hover:opacity-100
          transition-all duration-initial ease-in
          rounded-5xs bg-white`}
			>
				<span className="text-xs break-keep whitespace-pre text-gray-35">
					{label}
				</span>
			</aside>
			{children}
		</div>
	);
};
