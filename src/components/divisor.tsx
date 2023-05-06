interface Props {
  direction?: Direction;
  transparent?: boolean;
}

type Direction = "vertical" | "horizontal";

export function Divisor(p: Props) {
  const direction = p.direction || "vertical";
  const divisorClass = `${
    p.transparent ? "bg-black bg-opacity-10" : "bg-gray-100"
  }
  ${direction === "vertical" ? "h-full w-[1px]" : "mb-10 w-full h-[1px]"}`;
  return <div className={divisorClass} />;
}
