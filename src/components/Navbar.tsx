import { useState } from "react";
import MenuItem from "./MenuItem";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

interface NavbarProps {
  items: Array<string>;
}

export default function Navbar({ items }: NavbarProps) {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex flex-wrap mx-auto justify-between items-center text-5xl w-full p-5 bg-background3/80 border-b-2 border-background3">
      <h2 className="ml-3 text-4xl text-primary font-[Anurati]">MARCO</h2>
      <menu className="hidden md:flex flex-wrap items-center text-base justify-center">
        {items.map((item, index) => (
          <MenuItem key={index} name={item} />
        ))}
      </menu>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose color="#64ffda" size={30} />
        ) : (
          <AiOutlineMenu color="#64ffda" size={30} />
        )}
      </div>

      <ul
        className={
          nav
            ? "z-20 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-background2 bg-background3 ease-in-out duration-500"
            : "z-20 ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <h2 className="p-5 text-center text-4xl text-primary font-[Anurati]">MARCO</h2>

        {items.map((item, index) => (
          <MenuItem key={index} name={item} mobile={true} handleNav={handleNav} />
        ))}
      </ul>
    </nav>
  );
}
