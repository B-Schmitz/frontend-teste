import Link from "next/link";
import { Icon } from "./icon";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="h-20 flex items-center w-full gap-4">
      <Logo />
      <div className="hidden sm:flex flex-col">
        <h5>The Ux Library</h5>
        <small className="text-gray-400">
          Community curated design content & discussion
        </small>
      </div>
      <div className="flex gap-4 ">
        <Link className="text-xs " href={"#"}>
          <Icon name="fa-brands fa-facebook" color={Icon.Color.black} />{" "}
          Facebook
        </Link>
        <Link className="text-xs " href={"#"}>
          <Icon name="fa-brands fa-twitter" color={Icon.Color.black} /> Twitter
        </Link>
        <div className="flex flex-col">
          <div className="flex gap-4">
            <Link className="text-xs text-orange-400 " href={"#"}>
              About
            </Link>
            <Link className="text-xs text-orange-400 " href={"#"}>
              Contact
            </Link>
            <Link className="text-xs text-orange-400 " href={"#"}>
              Sign in
            </Link>
          </div>
          <small className="text-gray-400">&copy; 2014 - The UX Library</small>
        </div>
      </div>
    </footer>
  );
}
