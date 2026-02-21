
const itemss = [
    {
        title:'Is Foodera Bread really baked fresh each day?',
        desc:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.',
    },
    {
        title:'Do you bake breads containing animal fats or products?',
        desc:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language',
    },
    {
        title:'Can I order your products online?',
        desc:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.',
    },
    {
        title:'When are you opening a shop near me?',
        desc:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.',
    },
]

export default function Faq() {
return (
    <div>
        <div className="text-center mx-auto py-18">
            <h1 className="text-pink-950 text-3xl font-bold">Frequently Asked Questions</h1>
        </div>

        <div className="container grid grid-cols-1  md:grid-cols-2 gap-6 pb-16">
            {itemss.map((item,index)=>(
                <div key={index}>
                    <h1 className="text-pink-950 text-[16px] md:text-[19px] font-medium flex items-center gap-2"><span className="text-pink-400 text-[27px]">~</span>{item.title}</h1>
                    <p className="text-gray-600 ">{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
)
}
