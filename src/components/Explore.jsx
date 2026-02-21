
const items = [
    {
        img:'./images/01.jpg',
        title:'Rainbow Vegetable Sandwich',
        desc:'Time: 15 - 20 Minutes | Serves: 1',
        price:'$10.50',
        priceold:'$11.70',
        buttn:'Order Now',
    },
    {
        img:'./images/02.jpg',
        title:'Vegetarian Burger',
        desc:'Time: 30 - 45 Minutes | Serves: 1',
        price:'$9.20',
        priceold:'$10.50',
        buttn:'Order Now',
    },
    {
        img:'./images/03.jpg',
        title:'Raspberry Stuffed French Toast',
        desc:'Time: 10 - 15 Minutes | Serves: 1',
        price:'$12.50',
        priceold:'$13.20',
        buttn:'Order Now',
    },
]


export default function Explore() {
return (
    <div className="container py-9">
        <div className="md:w-143 text-center mx-auto">
            <h1 className="text-pink-950 text-4xl font-bold">Explore Our Foods</h1>
            <p className="text-gray-700 py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
        </div>

        <div className="py-14 flex flex-col md:flex-row gap-8 ">
            {items.map((item,index) =>(
                <div className="bordr border-b border-gray-200 py-4 last:border-none md:border-none">
                    <img className="w-99 rounded-md" src={item.img} alt="" />
                    <h2 className="text-pink-950 font-bold pt-2 text-[18px]">{item.title}</h2>
                    <p className="text-gray-700">{item.desc}</p>
                    <h3 className="text-pink-800 text-2xl flex gap-2 font-bold">{item.price}<span className="text-gray-400 line-through">{item.priceold}</span></h3>
                    <button className="my-9 py-2 px-6 bg-pink-800 text-white font-bold hover:bg-transparent hover:border-3 border-pink-800 hover:text-pink-800">{item.buttn}</button>
                </div>
            ))}
        </div>
    </div>
)
}
