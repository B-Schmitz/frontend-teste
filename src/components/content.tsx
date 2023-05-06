import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Content({ children }: Props) {
  return (
    <div className="flex container mx-auto max-w-screen-md px-6">
      {children}
    </div>
  );
}
