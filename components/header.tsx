import { Timer } from "./timer";

const Header = () => {
  return (
    <header className="bg-amber-200  fixed top-0 left-0 w-full py-1 px-2">
      <div className="flex justify-between">
        <ul className="flex justify-end gap-14 md:justify-center items-center md:gap-72">
          <li>Work</li>
          <li>About</li>
          <li>Let&apos;s talk</li>
        </ul>
        <div>
          <Timer />
        </div>
      </div>
    </header>
  );
};

export default Header;
