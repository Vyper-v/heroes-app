import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="container">
      <h1>Login Screen</h1>
      <button
        onClick={handleLogin}
        className="button border-emerald-300 text-emerald-300 active:bg-emerald-300 active:text-white"
      >
        Log in
      </button>
    </div>
  );
};
