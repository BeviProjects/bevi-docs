import { Container } from "@component/Container";

type FooterProps = {
	total?: number;
};

export const Footer = ({ total }: FooterProps) => {
	return (
		<footer className="w-full py-lg bg-gray-95 border-t border-solid border-gray-85">
			<Container size="full">{total && `Total: ${total}`}</Container>
		</footer>
	);
};
