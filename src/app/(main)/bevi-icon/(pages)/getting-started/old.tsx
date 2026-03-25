import { Container } from "@component/Container";
import { BvIcon } from "bevi-icon";
import Link from "next/link";

const GettingStarted = () => {
	return (
		<Container size="sm" className="py-6xl">
			<section>
				<h1>Getting Started</h1>
				<p>
					O <b>bevi-icon</b> é a biblioteca de ícones oficial para projetos do
					universo <Link href="https://www.bevioficial.com.br">Bevi</Link>.
					Desenvolvida para padronizar e simplificar o uso da iconografia da
					marca, ela pode ser utilizada tanto em produtos internos quanto em
					aplicações externas da empresa.
				</p>
				<p>
					A biblioteca é construída para <b>React</b> com suporte nativo a{" "}
					<b>TypeScript</b>, garantindo tipagem segura e uma experiência de
					desenvolvimento mais confiável.
				</p>
			</section>
			<section>
				<h2>Quando usar</h2>
				<p>
					O bevi-icon deve ser utilizado em qualquer projeto React que faça
					parte do ecossistema Bevi e precise exibir ícones com identidade
					visual da marca. Se o seu projeto usa React e precisa de ícones da
					Bevi, essa é a forma correta e recomendada de fazê-lo.
				</p>
			</section>
			<section>
				<h2>Variants (Variantes)</h2>
				<p>
					Os ícones estão disponíveis em <b>4 variantes</b>, cada uma pensada
					para um contexto visual diferente. Escolher a variante adequada é
					essencial para manter a consistência e a clareza da interface.
				</p>

				<div className="flex-start flex-col gap-2xl">
					<div className="flex-center flex-row gap-2xl p-md rounded-2xl inset-ring-1 inset-ring-gray-75">
						<div className="flex-center p-md rounded-md inset-ring-1 inset-ring-gray-90 bg-white">
							<BvIcon name="eco" className="size-9xl text-violet-20" />
						</div>

						<div className="flex-bgs">
							<h3>Solid</h3>

							<p>
								Ícone em cor única e totalmente personalizável. É a variante
								mais versátil — funciona bem em textos, botões e qualquer
								situação onde o ícone precisa se adaptar à cor do contexto.
							</p>

							<ul className="flex flex-col gap-4xs mb-2xs text-violet-20">
								<li className="li-check">
									<BvIcon name="checkCircle" width={16} />
									Cor personalizável
								</li>
								<li className="li-check">
									<BvIcon name="checkCircle" width={16} />
									Ideal para tamanhos pequenos
								</li>
								<li className="li-check">
									<BvIcon name="checkCircle" width={16} />
									Ideal para uso junto ao texto
								</li>
							</ul>
						</div>
					</div>

					<div className="flex-center flex-row gap-2xl p-md rounded-2xl inset-ring-1 inset-ring-gray-75">
						<div className="flex-center p-md rounded-md inset-ring-1 inset-ring-gray-90 bg-white">
							<BvIcon name="eco" variant="duo" className="size-9xl" />
						</div>

						<div className="flex-bgs">
							<h3>Duo</h3>

							<p>
								Ícone em dois tons, variando entre as cores primária e
								secundária da Bevi com diferentes níveis de opacidade. Por
								respeitar a identidade visual da marca,{" "}
								<b>não permite alteração de cor</b>.
							</p>

							<ul className="flex flex-col gap-4xs mb-2xs text-violet-20">
								<li className="li-check">
									<BvIcon name="checkCircle" width={16} />
									Ideal para tamanhos grandes
								</li>
								<li className="li-check">
									<BvIcon name="checkCircle" width={16} />
									Ideal para cards, banners e ilustrações de apoio
								</li>
								<li className="li-check">
									<BvIcon name="cancel" width={16} />
									Cor não personalizável
								</li>
							</ul>
						</div>
					</div>

					<div className="flex-center flex-row gap-2xl p-md rounded-2xl inset-ring-1 inset-ring-gray-75">
						<div className="flex-center p-md rounded-md inset-ring-1 inset-ring-gray-90 bg-white">
							<BvIcon
								name="eco"
								variant="dark"
								className="size-9xl text-violet-20"
							/>
						</div>

						<div className="flex-bgs">
							<h3>Dark</h3>

							<p>
								Ícone escuro com opacidade variável quando necessário.
								Totalmente personalizável em cor e pensado para ser usado sobre{" "}
								<b>fundos claros</b>.
							</p>

							<ul className="flex flex-col gap-4xs mb-2xs text-violet-20">
								<li className="li-check">
									<BvIcon name="checkCircle" width={16} />
									Cor personalizável
								</li>
								<li className="li-check">
									<BvIcon name="checkCircle" width={16} />
									Ideal para fundos claros
								</li>
								<li className="li-check">
									<BvIcon name="checkCircle" width={16} />
									Funciona bem em tamanhos pequenos e grandes
								</li>
							</ul>
						</div>
					</div>

					<div className="flex-center flex-row gap-2xl p-md rounded-2xl inset-ring-1 inset-ring-gray-75">
						<div className="flex-center p-md rounded-md inset-ring-1 inset-ring-gray-90 bg-white">
							<BvIcon
								name="eco"
								variant="light"
								className="size-9xl text-ciano-50"
							/>
						</div>

						<div className="flex-bgs">
							<h3>Light</h3>

							<p>
								Ícone claro com opacidade variável quando necessário. Totalmente
								personalizável em cor e pensado para ser usado sobre{" "}
								<b>fundos escuros</b>.
							</p>

							<ul className="flex flex-col gap-4xs mb-2xs text-violet-20">
								<li className="li-check">
									<BvIcon name="checkCircle" width={16} />
									Cor personalizável
								</li>
								<li className="li-check">
									<BvIcon name="checkCircle" width={16} />
									Ideal para fundos escuros
								</li>
								<li className="li-check">
									<BvIcon name="checkCircle" width={16} />
									Funciona bem em tamanhos pequenos e grandes
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section>
				<h2>Weight (pesos)</h2>
				<p>
					Alguns ícones suportam variação de <b>peso</b>, permitindo ajustar a
					espessura do traço de acordo com o contexto visual.
				</p>

				<div className="flex flex-row gap-2xl">
					<div className="flex-bgs flex-center flex-col p-md rounded-2xl inset-ring-1 inset-ring-gray-75">
						<div className="w-full flex-center p-md rounded-md inset-ring-1 inset-ring-gray-90 bg-white">
							<BvIcon
								name="arrowNorthEast"
								weight={400}
								className="size-9xl text-violet-20"
							/>
						</div>

						<div className="flex-bgs px-md">
							<h3>Regular (400)</h3>
							<p>
								Traço mais fino. Indicado para interfaces que priorizam leveza e
								sutileza visual.
							</p>
						</div>
					</div>

					<div className="flex-bgs flex-center flex-col p-md rounded-2xl inset-ring-1 inset-ring-gray-75">
						<div className="w-full flex-center p-md rounded-md inset-ring-1 inset-ring-gray-90 bg-white">
							<BvIcon
								name="arrowNorthEast"
								weight={600}
								className="size-9xl text-violet-20"
							/>
						</div>

						<div className="flex-bgs px-md">
							<h3>Bold (600)</h3>
							<p>
								Traço mais espesso. Recomendado quando o ícone precisa de mais
								destaque ou será exibido em tamanhos maiores.
							</p>
						</div>
					</div>
				</div>
			</section>
		</Container>
	);
};

export default GettingStarted;
