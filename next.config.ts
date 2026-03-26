import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	output: "export",
	images: { unoptimized: true },
	// Opcional: Garante que o Turbopack não tente serializar plugins JS antigos
	experimental: {
		// Se estiver usando o compilador Rust, ele já entende tabelas por padrão
		mdxRs: true,
	},
};

// Não passe o remarkPlugins aqui, o mdxRs cuidará das tabelas
const withMDX = createMDX({});

export default withMDX(nextConfig);
