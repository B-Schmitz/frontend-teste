import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className: string;
  onClick?: () => void;
}

export function Button(p: Props) {
  return <button className={p.className}>{p.children}</button>;
}

export module Button {
  export const enum BgColor {
    white = "bg-white hover:bg-gray-100 text-black",
    gray = "bg-gray-400 hover:bg-gray-500",
    orange = "bg-orange-400 hover:bg-orange-500 text-white",
  }
}
