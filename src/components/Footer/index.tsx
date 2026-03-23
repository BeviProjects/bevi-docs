import { Container } from "@component/Container";
import type { ReactNode } from "react";

type FooterProps = {
	children?: ReactNode;
};

export const Footer = ({ children }: FooterProps) => {
	return (
		<footer className="w-full bg-gray-95 border-t border-solid border-gray-85">
			<Container size="full">{children}</Container>
		</footer>
	);
};
