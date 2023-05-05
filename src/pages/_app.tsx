import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/pt-br";
import { ContextSearch } from "@/context/search";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

dayjs.locale("pt-br");
dayjs.extend(relativeTime);
dayjs.extend(utc);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className + " flex flex-col h-screen overflow-hidden"}>
      <ContextSearch>
        <Component {...pageProps} />
      </ContextSearch>
    </div>
  );
}
