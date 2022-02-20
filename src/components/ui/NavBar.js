import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <nav className="flex flex-wrap shadow-inner overflow-hidden items-baseline gap-8 py-5 px-6 bg-neutral-100">
      <Link className="text-2xl font-bold text-neutral-500" to="/">
        Heroes
      </Link>

      <div className="flex flex-1 justify-between items-center">
        <div className="flex gap-8 text-neutral-400">
          <NavLink
            className={({ isActive }) =>
              (isActive && "text-neutral-400 font-bold") || ""
            }
            to="/marvel"
          >
            Marvel
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              (isActive && "text-neutral-400 font-bold") || ""
            }
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              (isActive && "text-neutral-400 font-bold") || ""
            }
            to="/search"
          >
            🔍
          </NavLink>
        </div>
        <button
          onClick={handleLogout}
          className="button border-red-600 text-red-600 active:bg-red-600 active:text-white"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
