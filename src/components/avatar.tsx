import Image from "next/image";
export function Avatar() {
  const img = "https://cdn-icons-png.flaticon.com/512/4792/4792929.png";
  return (
    <Image
      className="bg-gray-100 rounded-sm"
      src={img}
      alt=""
      width={40}
      height={40}
    />
  );
}
