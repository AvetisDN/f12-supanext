import React from "react";
import { RiHomeSmile2Fill } from "react-icons/ri";
import Switcher from "./buttons/switcher";
import Menu from "./menu";
const Header = ({ darkTheme, toggleTheme }) => {
  return (
    <header className="w-full bg-emerald-500 text-neutral-100 p-4 dark:bg-emerald-300 dark:text-neutral-900">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-black uppercase tracking-widest flex gap-1">
          <RiHomeSmile2Fill className="text-2xl translate-y-[1px]" />
          Activities
        </div>
        <div className="flex gap-6 items-center">
          <Menu />
          <Switcher value={darkTheme} toggler={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default Header;
