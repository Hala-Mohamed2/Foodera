
const items = [
    {
        number:'1287+',
        tit:'Savings',
    },
    {
        number:'5786',
        tit:'Photos',
    },
    {
        number:'1440+',
        tit:'Rockets',
    },
    {
        number:'7110+',
        tit:'Globes',
    },
]

export default function Nums() {
return (
    <div className="bg-pink-800 flex gap-6 md:gap-0 flex-col md:flex-row items-center justify-around py-11">
        {items.map((item,index)=>(
            <div key={index} className="text-center ">
                <h2 className="text-white text-4xl font-bold">{item.number}</h2>
                <span className="text-white uppercase text-[12px] font-bold tracking-[3px]">{item.tit}</span>
            </div>
        ))}
    </div>
)
}
