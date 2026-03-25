import { CodeBlock } from "@component/CodeBlock";
import { Container } from "@component/Container";
import { CopyBox } from "@component/CopyBox";
import { BvIcon } from "bevi-icon";
import Link from "next/link";

export type IconErrorType = {
	type: "not-found" | "invalid-variant" | "fetch-failed" | "parse-failed";
	message: string;
	details?: string;
};

const Installation = () => {
	const _test = (error: IconErrorType) => {
		console.error(error);
	};

	return (
		<Container size="sm" className="py-6xl">
			<section>
				<h1>Installation</h1>
				<h2>Pré-requisitos</h2>
				<p>
					Antes de instalar o bevi-icon, certifique-se de que o seu projeto já
					possui as seguintes dependências configuradas:
				</p>
				<ul>
					<li>React</li>
					<li>Typescript</li>
				</ul>
			</section>
			<section>
				<h2>Instalação</h2>
				<p>Com o terminal aberto na raiz do seu projeto, execute:</p>

				<CopyBox label="React" value="npm install bevi-icon">
					<CodeBlock language="html">npm install bevi-icon</CodeBlock>
				</CopyBox>

				<p>
					Pronto. Nenhuma configuração adicional é necessária — a biblioteca já
					está pronta para uso após a instalação.
				</p>

				<p>
					Para mais detalhes sobre o pacote, acesse a{" "}
					<Link href="https://www.npmjs.com/package/bevi-icon">
						página do bevi-icon no NPM
					</Link>
					.
				</p>

				<BvIcon name="eco" title="Test" showErrorIcon />
			</section>
		</Container>
	);
};

export default Installation;
