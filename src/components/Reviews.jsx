import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Review = [
    {
        img: './images/1.jpg',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains,',
        title:'Simab Dave - Web Designer',
    },
    {
        img: './images/2.jpg',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains,',
        title:'Johnthan Doe - UX Designer',
    },
]

export default function Reviews() {
return (
    <div className="bg-pink-900">
        <div className="text-center mx-auto">
            <h1 className="text-white text-4xl font-bold py-14">Testimonials</h1>
        </div>

            <Swiper className="mySwiper" spaceBetween={10} slidesPerView={1}>
                {Review.map((item,index)=>(
                    <SwiperSlide key={index}>
                        <div className="bg-white my-19 mx-6 md:w-[80%] md:mx-auto  text-center py-6  rounded-2xl">
                            <img className="w-18 mx-auto rounded-full" src={item.img} alt="" />
                            <p className="md:w-122 mx-auto text-gray-900 py-6">{item.desc}</p>
                            <h2 className="text-pink-900 font-medium">{item.title}</h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

    </div>
)
}
