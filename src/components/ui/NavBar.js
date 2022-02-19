import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <nav className="flex flex-wrap shadow-inner overflow-hidden items-center gap-8 p-2 bg-neutral-100">
      <Link className="text-2xl font-bold text-indigo-500" to="/">
        Asociaciones
      </Link>

      <div className="flex flex-1 justify-between">
        <div className="flex gap-4 text-neutral-400">
          <NavLink
            className={({ isActive }) =>
              (isActive && "text-indigo-400 font-bold") || ""
            }
            to="/marvel"
          >
            Marvel
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              (isActive && "text-indigo-400 font-bold") || ""
            }
            to="/dc"
          >
            DC
          </NavLink>
        </div>
        <button onClick={handleLogout} className="text-red-600">
          Logout
        </button>
      </div>
    </nav>
  );
};
