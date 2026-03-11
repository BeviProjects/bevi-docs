import { ReactNode } from "react";
import { Container } from "@component/Container";

type ActionBarProps = {
  children: ReactNode;
};

export const ActionBar = ({ children }: ActionBarProps) => {
  return (
    <div className="py-md flex flex-row items-center justify-start">
      <Container size="full">{children}</Container>
    </div>
  );
};
