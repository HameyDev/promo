import { useState } from "react";
import { FaStar, FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft, } from "react-icons/fa";
import { reviews } from "../data/Reviews";

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const cardsVisible = window.innerWidth < 1024 ? 1 : 3; // 1 card on mobile, 3 on desktop
  const maxIndex = reviews.length - cardsVisible; // last start index

  const totalSteps = reviews.length - 2;
  const progressPercent = ((startIndex + 1) / (reviews.length - cardsVisible + 1)) * 100;


  const CARD_WIDTH = 270;

  

  const next = () => {
    if (startIndex < maxIndex) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <section className=" py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <p className="text-sm tracking-widest text-[#2B0A88] font-semibold">
            WHAT OUR
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B0A88]">
            STUDENTS SAY
          </h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Real experiences from students who upgraded their skills and careers
            with us.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-4 gap-8 items-start overflow-hidden">
          <div className="w-70 h-70 bg-[radial-gradient(90%_120%_at_20%_0%,#F7EDFF_0%,#FFFFFF_55%,#FFFFFF_100%)] text-black rounded-3xl px-8 flex flex-col justify-between">
            <div>
              <span className="text-8xl text-pink-500 opacity-30">“</span>
              <h3 className="mt-2 text-3xl font-bold">
                Success Stories from Our Learners
              </h3>
            </div>

            <div className="mt-3 flex items-center gap-4">
              <button
                onClick={prev}
                className="w-10 h-10 border border-white rounded-full flex items-center justify-center"
              >
                <FaRegArrowAltCircleLeft size={20} />
              </button>

              <div className="relative w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-pink-500 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <button
                onClick={next}
                className="w-10 h-10 border border-white rounded-full flex items-center justify-center"
              >
                <FaRegArrowAltCircleRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative col-span-3 overflow-hidden p-2">
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${startIndex * (CARD_WIDTH + 32)}px)`,
              }}
            >
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg p-6 relative min-w-[280px]"
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {r.text}
                  </p>

                  <div className="flex gap-1 mt-4 text-pink-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t pt-4">
                    <img
                      src={r.img}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-purple-800">{r.name}</p>
                      <p className="text-xs text-gray-500">
                        {r.course} • {r.city}
                      </p>
                    </div>
                  </div>

                  <div className="absolute -bottom-3 left-10 w-6 h-6 bg-white rotate-45"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



