import { ChangeEvent } from "react";
import { Icon } from "./icon";

interface Props {
    value: string;
    onChange: (valor: string) => void;
}


export function Search(p: Props) {

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        p.onChange(e.target.value);
    }

  return (
    <div className="relative">
      <input
      value={p.value}
      onChange={onChange}
        type="text"
        className="w-full pl-10 bg-gray-100 h-10 rounded-sm focus:outline-orange-400 outline-none outline-offset-0 text-gray-400"
      />
      <div className="absolute inset-y-0 flex items-center pl-3">
        <Icon name="fa-search" color={Icon.Color.gray} />
      </div>
    </div>
  );
}
