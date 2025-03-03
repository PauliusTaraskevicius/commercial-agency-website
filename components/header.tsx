const Header = () => {
  return (
    <header className="fixed top-0 right-0 lg:left-0 transform lg:translate-x-1/6 flex justify-start py-1 px-2 bg-transparent">
      <div className="flex justify-between">
        <ul className="flex justify-end gap-14 md:justify-center items-center lg:gap-72 uppercase text-[10.5px] font-bold">
          <li>Work</li>
          <li>About</li>
          <li>Let&apos;s talk</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
