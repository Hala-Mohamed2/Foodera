

export default function About() {
return (
    <div className="container flex flex-col text-center md:text-start md:flex-row justify-between gap-6 py-19">
        <div>
            <img className="md:w-233 w-99 " src="./images/1.png" alt="" />
        </div>
        <div className="pt-14 md:w-143">
            <h2 className="text-pink-900 text-4xl font-bold">We pride ourselves on making real food from the best ingredients.</h2>
            <p className="text-gray-600 font-medium py-6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            <button className="py-2 px-6 cursor-pointer bg-pink-800 text-white font-bold hover:bg-transparent hover:border-3 border-pink-800 hover:text-pink-800">Learn More</button>
        </div>
    </div>
)
}
