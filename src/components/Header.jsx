import { FaWhatsapp, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { FiFacebook,FiLinkedin, FiYoutube, FiInstagram } from "react-icons/fi";


export default function Header() {
    return (
        <div className="w-full">
            <div className="bg-gradient-to-r from-[#200273] via-purple-900 to-[#842084] text-white text-sm py-1">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-[#200273]" style={{ stroke: "white", strokeWidth: 50 }} /> Office # 413–414, Al Hafeez Business Center, Gulberg III, Lahore.
                        </span>
                        <hr className="h-4 w-[1px] bg-white bg-opacity-40" />
                        <span className="flex items-center gap-2">
                            <FaWhatsapp className="text-green-500 text-lg gap-1" />
                            <div className="cursor-pointer flex items-center gap-1 group">
                                <p className="text-md underline underline-offset-4 decoration-white/30 group-hover:decoration-white transition-all duration-300">
                                    +92 333 0477 394
                                </p>
                                <FaArrowUp className="rotate-45 text-green-600 group-hover:ml-1 transition-all duration-300" />
                            </div>
                        </span>
                    </div>

                    <div className="flex items-center gap-5">
                        <FiYoutube className="cursor-pointer" size={20}  />
                        <FiFacebook className="cursor-pointer" size={20} />
                        <FiLinkedin className="cursor-pointer" size={20} />
                        <FiInstagram className="cursor-pointer" size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
}
