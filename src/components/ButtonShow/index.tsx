import type { ReactNode } from "react";

type ButtonShowProps = {
	children: ReactNode;
	onClick?: () => void;
	className?: string;
};

export const ButtonShow = ({
	children,
	onClick,
	className,
}: ButtonShowProps) => {
	return (
		<button
			onClick={onClick}
			type="button"
			className={`relative w-full flex-center px-2xl py-md cursor-pointer rounded-md inset-ring-2 hover:inset-ring-4 inset-ring-gray-90 hover:inset-ring-gray-75 bg-white ${className}`}
		>
			{children}
		</button>
	);
};
