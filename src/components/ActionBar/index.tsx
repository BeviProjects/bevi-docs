import { Container } from "@component/Container";
import useScroll from "@hook/useScroll";
import { forwardRef, type ReactNode } from "react";

type ActionBarProps = {
	children: ReactNode;
};

export const ActionBar = forwardRef<HTMLDivElement, ActionBarProps>(
	({ children }, ref) => {
		const scrollY = useScroll();
		return (
			<div
				ref={ref}
				className={`fixed z-8 w-[calc(100%-256px)] top-0 left-10xl bg-gray-95 ${scrollY > 0 ? "border-b border-gray-85" : ""}`}
			>
				<div className="py-md">
					<Container size="full">{children}</Container>
				</div>
			</div>
		);
	},
);
