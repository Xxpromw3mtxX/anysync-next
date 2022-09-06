import Link from "next/link";

const NavItem = ({ href, path, target, children, ...props }) => {
  const active = href === path;

  return (
    <Link href={href}>
      <a
        className={`transition duration-300 ease-in-out rounded-md p-2 hover:underline underline-offset-2 ${
          active ? "bg-[#1d75b7] text-[#faefe1]" : ""
        }`}
      >
        {children}
      </a>
    </Link>
  );
};

const NavBar = ({ path }) => {
  return (
    <div className="top-0 h-16 sticky flex flex-row items-center justify-between px-10 bg-[#f0b2bc]/80 backdrop-blur-sm drop-shadow-md z-50">
      <Link href="/">
        <a className="font-bold tracking-tight text-3xl drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-[#faefe1]">
          AnySync
        </a>
      </Link>

      <div className="flex flex-row gap-x-5">
        <NavItem href="/" path={path}>
          Home
        </NavItem>

        <NavItem href="/anime" path={path}>
          Anime
        </NavItem>

        <NavItem href="/about" path={path}>
          About
        </NavItem>
      </div>
    </div>
  );
};

export default NavBar;
