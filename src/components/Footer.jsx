import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { TbWorld } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



export default function Footer() {
return (
    <div className="bg-pink-900 py-17 gap-8 flex justify-center items-center flex-col ">
        <div className="text-white flex gap-6 font-medium">
            <a href="">Register</a>
            <a href="">Forum</a>
            <a href="">Affiliate</a>
            <a href="">FAQ</a>
        </div>
        <div className="flex gap-6 text-white">
            <FaFacebookF size={22}/>
            <FaTwitter size={22}/>
            <TfiYoutube size={22}/>
            <TbWorld size={22}/>
            <FaLinkedinIn size={22}/>
            <FaInstagram size={22}/>
        </div>
        <div>
            <p className="text-white text-[12px] px-2 md:px-0 ">© 2021. Foodera. All rights reserved Made by <strong>Hala Mohammed</strong></p>
        </div>
    </div>
)
}
