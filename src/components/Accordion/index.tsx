import type { ReactNode } from "react";
import "./styles.scss";

type ItemProps = {
  children: ReactNode;
  title: string;
};

export const Accordion = ({ children, title }: ItemProps) => {
  return (
    <details className="w-full overflow-hidden p-4xs rounded-2xs inset-ring-1 inset-ring-gray-85">
      <summary className="p-2xs text-md font-semibold text-gray-35 cursor-pointer">{title}</summary>
      <div className="content">{children}</div>
    </details>
  );
};
