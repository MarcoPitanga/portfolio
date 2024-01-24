interface MenuItemProps {
  name: string;
}

export default function MenuItem({ name }: MenuItemProps) {
  const handleMenuItemClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      className="text-base mr-6 transition duration-300 ease-in-out hover:text-white text-[#bbbbbb] cursor-pointer uppercase"
      onClick={() => handleMenuItemClick(name)}
    >
      {name}
    </a>
  );
}
