import { Button } from "./button";
import { Divisor } from "./divisor";
import { Icon } from "./icon";

interface Props {
  children: string;
  icon: string;
  onClick?: () => void;
  bg: Button.BgColor;
}

export function IconButton(p: Props) {
  return (
    <>
      <Button className={`h-10 rounded-sm  ${p.bg || Button.BgColor.orange}`}>
        <div className="pl-4 flex h-10 items-center gap-2">
          <div className="flex h-10  items-center gap-3">
            <Icon name={p.icon} />
            <Divisor transparent />
          </div>
          <div className="hidden md:flex pr-4 whitespace-nowrap">
            {p.children}
          </div>
        </div>
      </Button>
    </>
  );
}
