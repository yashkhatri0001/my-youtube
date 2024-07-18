import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import Avatar from "react-avatar";

function Navbar() {
  return (
    <div className="flex justify-between fixed top-0 w-[100%] py-2 px-6 bg-white mb-2">
      <div className="flex items-center space-x-4">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src="images/logo.jpeg " className="w-28 cursor-pointer"></img>
      </div>

      <div className="flex w-[35%] items-center">
        <div className="w-[100%] px-3 py-2 border rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className=" outline-none"
          ></input>
        </div>
        <button className="px-4 py-2 border rounded-r-full bg-gray-200">
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration:200 "
        />
      </div>
      <div className="flex space-x-5 items-center">
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <Avatar src="images/mypic.jpg" size="40" round={true} />
      </div>
    </div>
  );
}

export default Navbar;
