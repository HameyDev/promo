import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { CiCircleCheck } from "react-icons/ci";
import CatalogForm from "./CatalogForm";

export default function Hero({ onRegisterClick }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative flex justify-center order-1 md:order-2">
            <img
              src="/hero-phone.png"
              alt="Offer"
              className="w-[260px] sm:w-[320px] md:w-[420px] lg:w-[560px] drop-shadow-2xl"
            />
          </div>

          <div className="flex flex-col gap-3 py-5 order-2 md:order-1">
            <div className="w-fit inline-flex items-center gap-2 bg-[#FFE6FF] shadow px-4 py-2 rounded-full text-sm mb-4 mx-auto md:mx-0">
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

            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-snug text-gray-900 text-center md:text-left">
              Start the New Year with <br />
              Digital Skills <br />
              Now <span className="text-[#FF0EFD] font-bold">50% Off</span>
            </h1>

            <p className="mt-4 text-gray-600 max-w-lg text-center md:text-left mx-auto md:mx-0">
              Learn in-demand skills with expert-led training designed to help
              you grow faster, smarter, and stronger in 2025.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-[#200273] to-[#842084] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 flex items-center gap-2"
              >
                Download Catalogue
                <FiDownload size={20} />
              </button>

              <button
                onClick={onRegisterClick}
                className="border-2 border-purple-600 text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition"
              >
                Register Now
              </button>
            </div>

            <div
              className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-gray-600
                          justify-center md:justify-start"
            >
              <span className="flex items-center gap-2">
                <CiCircleCheck size={20} className="text-black" />
                Hardcopy Certificate Included
              </span>
              <span className="flex items-center gap-2">
                <CiCircleCheck size={20} className="text-black" />
                Internship Opportunities
              </span>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>

          {/* Form */}
          <div className="relative z-10 w-full max-w-md">
            <CatalogForm closeModal={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}
