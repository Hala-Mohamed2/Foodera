

export default function Form() {
return (
    <div className="py-13">
        <div className="md:w-122 mx-auto text-center px-2">
            <h1 className="text-pink-950 text-2xl md:text-4xl font-bold">Hurry up! Subscribe our newsletter and get 25% Off</h1>
            <p className="text-gray-700 py-6">Limited time offer for this month. No credit card required</p>
        </div>
        <form className="md:w-122 md:mx-auto text-center flex flex-col md:flex-row gap-4 pb-9 mx-9">
            <input type="text" placeholder="Email Address here" className=" border-3 border-gray-300 w-full p-2 focus:outline-none"/>
            <button className="py-2 px-9 cursor-pointer bg-pink-800 text-white font-bold hover:bg-transparent hover:border-3 border-pink-800 hover:text-pink-800">Subscribe</button>
        </form>
    </div>
)
}
