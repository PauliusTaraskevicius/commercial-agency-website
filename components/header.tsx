import Link from "next/link";
import { Timer } from "./timer";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-1 px-2 z-[2]">
      <div className="grid grid-cols-12 gap-x-1 md:gap-x-2">
        <div className="col-span-4 md:col-span-2 pt-1" />
        <div className="md:col-span-2 col-span-3">
          <Link
            href="/work"
            className="hover:text-muted-foreground whitespace-nowrap uppercase tracking-[0.02em]  font-bold transition"
          >
            Work
          </Link>
        </div>
        <div className="md:col-span-2 col-span-3">
          <Link
            href="/about"
            className="hover:text-muted-foreground whitespace-nowrap uppercase tracking-[0.02em] font-bold transition"
          >
            About
          </Link>
        </div>
        <div className="md:col-span-2 max-md:col-span-2 max-md:flex max-md:justify-end">
          <Link
            href="/lets-talk"
            className="hover:text-muted-foreground whitespace-nowrap uppercase tracking-[0.02em] font-bold transition"
          >
            Let&apos;s talk
          </Link>
        </div>
        <div className="text-right max-md:hidden md:col-span-2 md:col-start-11">
          <span className="w-[45px] inline-block text-left whitespace-nowrap">
            <Timer />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
