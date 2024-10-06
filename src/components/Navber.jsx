import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 h-[99px] relative z-[50]"> {/* Navbar ke z-[50] dilam */}
      <div className="container h-full mx-auto flex justify-around items-center "> 
        <div className="text-black text-2xl font-bold">Your Logo</div>
        <ul className="hidden md:flex space-x-6 text-black h-full">
          <li className="h-full flex items-center justify-between gap-1 cursor-pointer"><p>Work</p></li>
          <li className=" h-full flex items-center justify-between gap-1 cursor-pointer group">
            <p>Solutions</p>
            <IoIosArrowDown className="group-hover:rotate-180 duration-300" />
            {/* Dropdown ke z-[40] diya navbar er niche ashbe */}
            <div className="z-[40] absolute invisible opacity-0 top-full left-0 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:h-[60vh] transition-all duration-500 bg-blue-200 w-full h-[20vh]"></div>
          </li>
          <li className="h-full flex items-center justify-between gap-1 cursor-pointer group">
            <p>About</p>
            <IoIosArrowDown className="group-hover:rotate-180 duration-300" />
            <div className="z-[40] absolute invisible opacity-0 top-full left-0 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:h-[60vh] transition-all duration-500 bg-red-200 w-full h-[20vh]"></div>
          </li>
          <li className="h-full flex items-center justify-between gap-1 cursor-pointer group">
            <p>Resources</p>
            <IoIosArrowDown className="group-hover:rotate-180 duration-300" />
            <div className="z-[40] absolute invisible opacity-0 top-full left-0 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:h-[60vh] transition-all duration-500 bg-green-200 w-full h-[20vh]"></div>
          </li>
          <li className="h-full flex items-center justify-between gap-1 cursor-pointer"><p>Careers</p></li>
        </ul>
        <div className="text-white md:hidden">Menu</div>
        <button className="bg-white border-2 border-black text-black p-2 rounded-full">Contact us</button>
      </div>
    </nav>
  );
};

export default Navbar;
