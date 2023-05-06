import { Icon } from "./icon";

export function Loading() {
  return (
    <div className="w-full text-center py-10">
      <Icon name="fa-spinner fa-spin fa-2xl" color={Icon.Color.gray} />
    </div>
  );
}
