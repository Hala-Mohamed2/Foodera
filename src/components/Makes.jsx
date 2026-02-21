import { FaCheck } from "react-icons/fa";


export default function Makes() {
return (
    <div className="container flex flex-col justify-between md:flex-row py-12">

        <div className="md:w-99">
            <h2 className="text-pink-900 text-3xl  font-medium">We make everything by hand with the best possible ingredients.</h2>
            <p className="text-gray-600 py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains,
            far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div>
                <span className="flex items-center gap-3 text-gray-600 pt-2"><FaCheck className="text-pink-900"/> Etiam sed dolor ac diam volutpat.</span>
                <span className="flex items-center gap-3 text-gray-600 pt-2"><FaCheck className="text-pink-900"/> Erat volutpat aliquet imperdiet.</span>
                <span className="flex items-center gap-3 text-gray-600 pt-2"><FaCheck className="text-pink-900"/> purus a odio finibus bibendum.</span>
            </div>
            <button className=" mt-9 py-2 px-6 cursor-pointer bg-pink-800 text-white font-bold hover:bg-transparent hover:border-3 border-pink-800 hover:text-pink-800">Learn More</button>
        </div>

        <div>
            <img className="md:w-143" src="./images/2.png" alt="" />
        </div>

    </div>
)
}
