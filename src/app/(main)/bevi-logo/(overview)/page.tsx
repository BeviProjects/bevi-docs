"use client";
import { ButtonShow } from "@component/ButtonShow";
import { Container } from "@component/Container";
import { useLibSelectedContext } from "@context/LibSelectedContext";
import { BvLogo, type LogoRegistry, logos } from "bevi-logo";
import Link from "next/link";

const BeviLogo = () => {
	const { groupedData, sortedLetters } = useLibSelectedContext<LogoRegistry>();

	const handleClick = (selected: string) => {
		console.log(`Click: `, selected);
	};
	return (
		<>
			<section className="mb-2xl">
				<Container>
					<h1 className="text-2xl font-bold text-violet-20">
						Overview {logos.length}
					</h1>
					<div className="flex flex-row">
						{sortedLetters.map((letter) => (
							<Link key={letter} href={`#${letter}`}>
								{letter}
							</Link>
						))}
					</div>
				</Container>
			</section>
			<section>
				<Container size="full">
					<div className="space-y-md">
						{sortedLetters.map((letter) => (
							<div key={letter} id={letter}>
								<h2 className="text-xl font-semibold text-gray-65 mb-2xs pl-md">
									{letter}
								</h2>
								<div className="grid grid-cols-4 gap-md">
									{groupedData[letter].map((logo) => (
										<ButtonShow
											key={logo.id}
											onClick={() => handleClick(logo.displayName)}
										>
											<div className="px-2xl py-md">
												<BvLogo
													name={logo.displayName}
													height={92}
													className="w-full"
												/>
											</div>
										</ButtonShow>
									))}
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>
		</>
	);
};

export default BeviLogo;
