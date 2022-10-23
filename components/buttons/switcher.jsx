import React from "react";

const Switcher = ({ value, toggler }) => {
  return (
    <button
      className=" w-11 h-7 rounded-full bg-neutral-100 dark:bg-neutral-800 p-[2px] border-none outline-none flex"
      onClick={toggler}
    >
      <span className=" w-6 h-6 rounded-full bg-emerald-600 dark:bg-emerald-200 transition-transform dark:translate-x-4"></span>
    </button>
  );
};

export default Switcher;
