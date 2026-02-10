import type { ReactNode } from "react";

type ButtonShowProps = {
	children: ReactNode;
	onClick: () => void;
};

export const ButtonShow = ({ children, onClick }: ButtonShowProps) => {
	return (
		<button
			onClick={onClick}
			type="button"
			className="w-full cursor-pointer rounded-md inset-ring-2 hover:inset-ring-4 inset-ring-gray-90 hover:inset-ring-gray-75 bg-white"
		>
			{children}
		</button>
	);
};
