import { FiDownload } from "react-icons/fi";
import { CiCircleCheck } from "react-icons/ci";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-3 py-5">
          <div className="w-60 inline-flex items-center gap-2 bg-[#FFE6FF] shadow px-4 py-2 rounded-full text-sm mb-4">
            <span>✨ 4.9 (6k+ Reviews)</span> 
            <span className="font-semibold">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#DB4437]">o</span>
                <span className="text-[#F4B400]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#0F9D58]">l</span>
                <span className="text-[#DB4437]">e</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl  leading-loose text-gray-900">
            Start the New Year with <br />
            Digital Skills <br /> Now{" "}
            <span className="text-[#FF0EFD] font-bold">50% Off</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-lg">
            Learn in-demand skills with expert-led training designed to help you
            grow faster, smarter, and stronger in 2025.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-[#200273] to-[#842084] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 flex items-center gap-2">
              Download Catalogue
              <FiDownload size={20}/>
            </button>
            <button className="border-2 border-purple-600 text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition">
              Register Now
            </button>
          </div>

          <div className="mt-6 flex gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2"><CiCircleCheck size={20} className="text-black" /> Hardcopy Certificate Included</span>
            <span className="flex items-center gap-2"><CiCircleCheck size={20} className="text-black" /> Internship Opportunities</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <img
            src="/hero-phone.png"
            alt="Offer"
            className="w-[280px] sm:w-[360px] md:w-[460px] lg:w-[560px] lg: drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
