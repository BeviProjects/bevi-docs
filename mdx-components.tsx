import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Container } from "@component/Container";
import { CodeBlock, type CodeBlockProps } from "@/components/CodeBlock";
import type { MDXComponents } from "mdx/types";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type AnchorProps = ComponentPropsWithoutRef<"a">;


export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    wrapper: ({ children }: { children: ReactNode }) => (
      <Container size="sm" className="py-6xl">
        {children}
      </Container>
    ),
    h1: (props: HeadingProps) => (
      <h1 className="text-3xl mt-2xl mb-2xs" {...props} />
    ),
    h2: (props: HeadingProps) => (
      <h2 className="text-2xl mt-2xl mb-2xs" {...props} />
    ),
    h3: (props: HeadingProps) => (
      <h3 className="text-xl mt-2xl mb-2xs" {...props} />
    ),
    h4: (props: HeadingProps) => (
      <h4 className="text-lg mt-2xl mb-2xs" {...props} />
    ),
    h5: (props: HeadingProps) => (
      <h4 className="text-md mt-2xl mb-2xs" {...props} />
    ),
    h6: (props: HeadingProps) => (
      <h4 className="text-sm mt-2xl mb-2xs" {...props} />
    ),
    p: (props: ComponentPropsWithoutRef<"p">) => (
      <p className="text-md mb-md mt-4xs" {...props} />
    ),
    ol: (props: ListProps) => <ol className="mb-md" {...props} />,
    ul: (props: ListProps) => <ul className="mb-md" {...props} />,
    li: (props: ComponentPropsWithoutRef<"li">) => <li className="mb-4xs" {...props} />,
    em: (props: ComponentPropsWithoutRef<"em">) => <em {...props} />,
    strong: (props: ComponentPropsWithoutRef<"strong">) => <strong {...props} />,
    a: ({ href, children, ...props }: AnchorProps) => {
      const className = "underline text-blue-45 hover:text-blue-80 font-semibold";
      if (href?.startsWith("/")) {
        return (
          <a href={href} className={className} {...props}>
            {children}
          </a>
        );
      }
      if (href?.startsWith("#")) {
        return (
          <a href={href} className={className} {...props}>
            {children}
          </a>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          {...props}
        >
          {children}
        </a>
      );
    },
    code: (props: ComponentPropsWithoutRef<"code">) => (
      <code
        className="px-5xs font-mono text-violet-80 rounded-4xs bg-gray-25"
        {...props}
      />
    ),
    pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => {
      // Extrai as props do <code> filho para pegar a linguagem
      const codeProps = (children as React.ReactElement)?.props as CodeBlockProps;

      return (
        <CodeBlock language={codeProps?.language}>
          {codeProps?.children}
        </CodeBlock>
      );
    },
    table: (props: ComponentPropsWithoutRef<"table">) => (
      <table className="mb-md border-collapse border border-gray-85" {...props} />
    ),
    thead: (props: ComponentPropsWithoutRef<"thead">) => <thead {...props} />,
    tbody: (props: ComponentPropsWithoutRef<"tbody">) => <tbody {...props} />,
    tfoot: (props: ComponentPropsWithoutRef<"tfoot">) => <tfoot {...props} />,
    tr: (props: ComponentPropsWithoutRef<"tr">) => <tr {...props} />,
    th: (props: ComponentPropsWithoutRef<"th">) => (
      <th className="px-2xs py-4xs border border-gray-85 bg-gray-90" {...props} />
    ),
    td: (props: ComponentPropsWithoutRef<"td">) => (
      <td className="px-2xs py-4xs border border-gray-85" {...props} />
    ),
    blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote className="py-3xs px-2xs rounded-2xs bg-gray-90" {...props} />
    ),
    hr: (props: ComponentPropsWithoutRef<"hr">) => (
      <hr className="border-none h-px mt-lg mb-2xl bg-gray-85" {...props} />
    ),
  }
}
