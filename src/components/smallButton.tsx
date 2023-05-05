import { Button } from "./button";

interface Props {
  onClick?: () => void;
  icon: string;
}

export function SmallButton(p: Props) {
  return (
    <Button className={"fa shrink-0 w-10 h-10 border rounded-sm  " + p.icon}>
      {" "}
    </Button>
  );
}
