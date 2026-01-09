import { FaWhatsapp, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { FiFacebook, FiLinkedin, FiYoutube, FiInstagram } from "react-icons/fi";

export default function Header() {
  return (
    <div className="w-full">

      <div className="bg-gradient-to-r from-[#200273] via-purple-900 to-[#842084] text-white text-sm">

        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            
            <span className="flex items-start gap-2 text-center md:text-left">
              <FaMapMarkerAlt className="text-[#200273] mt-1" />
              <span>
                Office # 413–414, Al Hafeez Business Center, Gulberg III,
                Lahore.
              </span>
            </span>

            
            <hr className="hidden md:block h-4 w-[1px] bg-white bg-opacity-40" />

            
            <span className="flex items-center justify-center md:justify-start gap-2">
              <FaWhatsapp className="text-green-500 text-lg" />

              <div className="cursor-pointer flex items-center gap-1 group">
                <p className="underline underline-offset-4 decoration-white/30 group-hover:decoration-white transition-all duration-300">
                  +92 333 0477 394
                </p>
                <FaArrowUp className="rotate-45 text-green-600 group-hover:ml-1 transition-all duration-300" />
              </div>
            </span>

          </div>

          <div className="flex justify-center md:justify-end items-center gap-5">
            
            <FiYoutube className="cursor-pointer hover:scale-110 transition" size={20} />
            <FiFacebook className="cursor-pointer hover:scale-110 transition" size={20} />
            <FiLinkedin className="cursor-pointer hover:scale-110 transition" size={20} />
            <FiInstagram className="cursor-pointer hover:scale-110 transition" size={20} />

          </div>

        </div>

      </div>
      
    </div>
  );
}
