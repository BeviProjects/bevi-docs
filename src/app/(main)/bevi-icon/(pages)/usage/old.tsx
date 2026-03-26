import { CodeBlock } from "@component/CodeBlock";
import { Container } from "@component/Container";
import { CopyBox } from "@component/CopyBox";

const Usage = () => {
	return (
		<Container size="sm" className="py-6xl">
			<section>
				<h1>Importação</h1>

				<p>
					Após instalar a biblioteca, importe o componente <code>BvIcon</code>{" "}
					no arquivo onde deseja utilizá-lo:
				</p>

				<CopyBox label="Import" value="import {BvIcon} from 'bevi-icon'">
					<CodeBlock language="typescript">
						{`import { BvIcon } from 'bevi-icon'`}
					</CodeBlock>
				</CopyBox>
			</section>
			<section></section>
		</Container>
	);
};

export default Usage;
