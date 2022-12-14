import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import UserMenu from "./userMenu";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
const Menu = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const { pathname } = useRouter();
  return (
    <div className="flex gap-4 items-center">
      <nav className="flex font-medium uppercase tracking-wide gap-2">
        <Link href={"/"}>
          <a className={`nav-link ${pathname === "/" ? "active" : ""}`}>
            Activities
          </a>
        </Link>
        <Link href={"/about"}>
          <a className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
            About
          </a>
        </Link>
        {!user && (
          <Link href={"/login"}>
            <a className={`nav-link ${pathname === "/login" ? "active" : ""}`}>
              Login
            </a>
          </Link>
        )}
      </nav>
      {user && <UserMenu user={user} auth={supabaseClient.auth} />}
    </div>
  );
};

export default Menu;
