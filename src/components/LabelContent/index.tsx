import type { ReactNode } from "react";

type LabelContentProps = {
  children: ReactNode;
  label: string;
};

export const LabelContent = ({ children, label }: LabelContentProps) => {
  return (
    <div className="flex-start flex-col gap-4xs">
      <small className="text-sm text-gray-35 leading-none">{label}</small>
      {children}
    </div>
  );
};
