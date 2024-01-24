interface MenuItemProps {
  name: string;
  mobile?: boolean;
  handleNav?: () => void;
}

export default function MenuItem({ name, mobile = false, handleNav = () => {} }: MenuItemProps) {
  const handleMenuItemClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const mobileClick = () => {
    handleNav();
    handleMenuItemClick(name);
  };

  if (mobile) {
    return (
      <li
        className="text-lg p-4 border-t hover:bg-primary duration-300 uppercase hover:text-black cursor-pointer border-gray-600"
        onClick={mobileClick}
      >
        {name}
      </li>
    );
  } else {
    return (
      <a
        className="text-base mr-6 transition duration-300 ease-in-out hover:text-white text-[#bbbbbb] cursor-pointer uppercase"
        onClick={() => handleMenuItemClick(name)}
      >
        {name}
      </a>
    );
  }
}
