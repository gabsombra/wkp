import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="workplace" className="w-[180px]" />

      <ul className="list-none sm:flex hidden justify-end items-center m-5 p-2 rounded-full border border-dimWhite">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-5 ml-5
              ${active === nav.title ? "text-[#AA7FFF]" : "text-dimWhite"}
              transition-all duration-300`}
            onClick={() => setActive(nav.title)}
          >
            <a 
              href={`#${nav.id}`}
              className={`hover:bg-white/10 hover:text-[#AA7FFF] hover:border-transparent rounded-full p-2`}

            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black/90 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-[8px] sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[35px]
                  ${active === nav.title ? "text-white" : "text-dimWhite"}
                  border border-dimWhite transition-all duration-300
                  ${navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a 
                  href={`#${nav.id}`}
                  className={`hover:text-white hover:bg-[#AA7FFF] hover:border-transparent rounded-full p-2`}
                  style={{ marginBottom: "2px", marginTop: "2px" }}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
