import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppContext from "../context/AppContext";
import Footer from "./footer";
import Header from "./header";
import { useRouter } from "next/router";

const variants = {
  in: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  out: {
    opacity: 0,
    x: 80,
    transition: {
      duration: 0.5,
    },
  },
  initial: {
    opacity: 0,
    x: -80,
    transition: {
      duration: 0.5,
    },
  },
};

const Layout = ({ children }) => {
  const { darkMode, setDarkMode } = useContext(AppContext);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const { asPath } = useRouter();
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="w-full min-h-screen bg-neutral-300 dark:bg-neutral-900 dark:text-neutral-200 flex flex-col gap-4 items-center">
        <Header {...{ darkMode, toggleTheme }} />
        <div className=" flex-grow w-full px-4 flex">
          <AnimatePresence initial={false} exitBeforeEnter>
            <motion.div
              className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-md shadow-lg w-full max-w-7xl mx-auto"
              variants={variants}
              initial="initial"
              animate="in"
              exit="out"
              key={asPath}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
