import Image from "next/image";

interface Props {
  src: string
  alt?: string
  size?: Avatar.Size
}

export function Avatar({ src, alt, size }: Props) {
  return (
    <Image
      className="bg-gray-100 rounded-sm"
      src={src}
      alt={alt || ""}
      width={size || Avatar.Size.sm}
      height={size || Avatar.Size.sm}
    />
  );
}

export module Avatar {
  export const enum Size {
    xs = 22,
    sm = 40
  }
}