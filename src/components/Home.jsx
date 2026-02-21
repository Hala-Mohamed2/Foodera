import { GiMeal } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Home() {
return (
    <div className="container pt-27 flex flex-col-reverse md:flex-row gap-4 md:gap-0 text-center md:text-start items-center justify-between">
        <div className="w-88">
            <h1 className="text-pink-950 text-4xl font-bold">Good food choices are good investments.</h1>
            <p className="text-gray-600 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
            <div className="flex gap-2">
                <button className="flex items-center gap-2 py-2 px-6 bg-pink-800 text-white font-bold hover:bg-transparent hover:border-3 border-pink-800 hover:text-pink-800">Order Now <GiMeal /></button>
                <button className="flex items-center gap-2 py-2 px-6 font-bold shadow-2xl shadow-gray-400 hover:border-3 border-pink-800 hover:text-pink-80">Learn More <MdKeyboardArrowRight /></button>
            </div>
        </div>
        <div>
            <img className="w-133" src="./images/download (2).jpg" alt="" />
        </div>
    </div>
)
}
