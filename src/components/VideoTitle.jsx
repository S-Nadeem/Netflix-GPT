import React from "react";
import play from "../assests/play.png";
//import info from "../assests/info.png";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-full aspect-video absolute pt-[15%] px-12 text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-[45%] ">{overview}</p>
      <div>
        <button className=" bg-white  text-black rounded-lg mx-1 p-2 px-11  text-lg">
          <div className="flex">
            <img src={play} className="w-[20px] h-[20px] mt-[2px]" />
            <span className="inline-block ml-[5px]">Play</span>
          </div>
        </button>
        <button className="bg-gray-500 bg-opacity-50 text-white  rounded-lg mx-2  p-2 px-11  text-lg ">
          More Info
          {/* <div className="flex">
            <img src={info} className="w-[30px] h-[30px] " />
            <span className="inline-block ml-[5px]"> More Info</span>
          </div> */}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
