interface Props {
  name: string;
  onClick?: () => void;
  color?: Icon.Color;
}

export function Icon(p: Props) {
  const iconClass = `fa ${p.name} ${p.color || Icon.Color.white}`;
  return <i className={iconClass} />;
}

export module Icon {
  export const enum Color {
    white = "text-white",
    gray = "text-gray-400",
    black = "text-black",
    orange = "text-orange-400",
  }
}
