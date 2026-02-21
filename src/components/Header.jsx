import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";

export default function Header() {

    const [show , setShow] = useState(false);


return (
    <div className=" fixed w-full top-0 left-0 right-0 bg-white  shadow-2xl shadow-gray-100 py-4">
        <div className="container flex items-center justify-between">
            <div className="flex items-center justify-between">
                <img className="w-22 md:w-33" src="./images/logo.png" alt="" />
                <BiMenuAltLeft className="flex md:hidden cursor-pointer" size={22} onClick={()=> setShow(!show)}/>
            </div>
            <div className=" items-center gap-6 hidden md:flex">
                <a className="text-pink-800 font-medium" href="">Home</a>
                <a className="text-pink-800 font-medium" href="">About Us</a>
                <a className="text-pink-800 font-medium" href="">Explore Foods</a>
                <a className="text-pink-800 font-medium" href="">Reviews</a>
                <a className="text-pink-800 font-medium" href="">FAQ</a>
                <button className="bg-pink-800 text-white py-2 px-6 cursor-pointer hover:bg-transparent font-bold hover:border-3 border-pink-800 hover:text-pink-800">01034889554</button>
            </div>
        </div>
        {show&& (
            <div className="bg-gray-950 text-pink-800 flex flex-col gap-4 font-bold p-4 md:hidden">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Explore Foods</a>
                <a href="">Reviews</a>
                <a href="">FAQ</a>
            </div>
        )}
    </div>
)
}
