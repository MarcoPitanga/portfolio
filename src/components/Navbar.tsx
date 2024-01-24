import MenuItem from "./MenuItem";

interface NavbarProps {
  items: Array<string>;
}

export default function Navbar({ items }: NavbarProps) {
  return (
    <header className="fixed z-10 flex justify-around items-center text-5xl w-full h-20 px-8 bg-background3/80 border-b-2 border-background3 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <h2 className="ml-3 text-4xl text-primary font-[Anurati]">MARCO</h2>
        <menu className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {items.map((item, index) => (
            <MenuItem key={index} name={item} />
          ))}
        </menu>
      </div>
    </header>
  );
}
