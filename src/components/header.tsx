import {
  Avatar,
  Button,
  Divisor,
  IconButton,
  SmallButton,
  Logo,
  Search,
} from "@/components";

export function Header() {
  return (
    <header className="flex w-full gap-4 h-20 items-center">
      <div className="flex gap-4 sm:gap-32 justify-between">
        <div className="flex gap-4">
          <Logo />
          <Divisor />
          <SmallButton icon="fa-bars" />
          <Search />
        </div>
        <div className="flex gap-4">
          <IconButton icon="fa-plus" bg={Button.BgColor.orange}>
            Add Post
          </IconButton>
          <div className="shrink-0 flex px-2 relative">
            <div className="w-4 h-4 bg-orange-400 rounded-sm text-white text-sm text-center absolute top-3 left-0">
              5
            </div>
            <Avatar />
          </div>
        </div>
      </div>
    </header>
  );
}