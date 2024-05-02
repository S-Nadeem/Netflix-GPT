import React from "react";
import { Logo_url } from "../utils/Links";

const Header = () => {
  return (
    <div className="absolute px-10 py-2 z-10 ">
      <img src={Logo_url} className="w-48" alt="Logo_url" />
    </div>
  );
};

export default Header;
