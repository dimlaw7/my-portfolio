import LetsTalkBtn from "./utils/LetsTalkBtn";
import { navLinks } from "@/constants";

const Header = () => {
  return (
    <header className="mx-[-1rem] h-fit">
      <div className="header__container p-4">
        <div className="header__wrap flex grow items-center justify-between">
          <div className="header__logo flex h-16 w-32 items-center">
            <img src="LO-Lawal.png" alt="Logo" />
          </div>
          <nav className="header__nav hidden w-7/12 items-center justify-between lg:flex">
            {navLinks.map((item, index) => (
              <a
                className={
                  "navlink relative cursor-pointer text-sm uppercase transition-all " +
                  (item.name == "Home"
                    ? "text-slate-200 after:absolute after:bottom-[-10px] after:left-0 after:w-full after:border-b after:border-[#9BCF53]"
                    : "after:absolute after:bottom-[-10px] after:left-0 after:w-0 after:border-b after:border-[#9BCF53] after:transition-all hover:after:w-full")
                }
                key={index}
              >
                {item.name}
              </a>
            ))}
            <LetsTalkBtn width="w-32" fontSize="text-sm" />
          </nav>
          <button className="lg:hidden">
            <div className="hamburger">
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
