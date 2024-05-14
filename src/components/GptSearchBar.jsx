import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants.js";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const handleSearchBar = (e) => {
    e.preventDefault();
  };

  const language = lang[langKey] || lang.en;
  return (
    <div className="pt-[10%] flex justify-center items-center">
      <form className=" w-1/2 grid grid-cols-12 ">
        <input
          type="text"
          className=" rounded-lg col-span-9 p-4 m-4 "
          placeholder={language.gptSearchPlaceholder}
        />
        <button
          onClick={handleSearchBar}
          className="col-span-3 m-4 py-2 px-4 rounded-lg bg-red-500 text-white"
        >
          {language.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
