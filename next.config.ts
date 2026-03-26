// next.config.ts
import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm"; // Importe o plugin

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: "export",
  images: { unoptimized: true },
};

const withMDX = createMDX({
  options: {
    // Adicione o plugin aqui para habilitar tabelas, tasklists, etc.
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
