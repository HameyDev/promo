import { cards } from "../data/CategoryCards"
import  Input  from "../utils/Input";
import Select  from "../utils/Select";

export default function CategoriesWithForm({ formRef }) {
  return (
    <section ref={formRef} className="bg-[#faf7ff] py-16">

      <div className="max-w-6xl mx-auto px-4 grid gap-12 lg:grid-cols-2 lg:gap-40">

        <div className="order-1 lg:order-2 bg-white rounded-3xl shadow-xl p-8">

          <h3 className="text-xl font-bold text-center text-[#2B0A88]">
            Fill the Form and Our Team will <br /> Contact you Shortly
          </h3>

          <form className="mt-6 space-y-4">
            <Input label="Full Name*" placeholder="Your Full Name" />
            <Input label="Last Name*" placeholder="Your Last Name" />
            <Input label="Phone No*" placeholder="Your Phone" />
            <Input label="City*" placeholder="Your City" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select label="Course Category*" />
              <Select label="Mode*" />
            </div>

            <button type="submit" className="w-full mt-4 bg-gradient-to-r from-[#2B0A88] to-[#8A2D83] text-white py-3 rounded-xl font-semibold hover:opacity-90">
              Get Free Consultation
            </button>
          </form>

        </div>

        <div className="order-2 lg:order-1">

          <h2 className="text-2xl sm:text-3xl font-bold text-[#2B0A88] text-center lg:text-left">
            Explore Our Training Categories
          </h2>

          <p className="mt-3 text-gray-600 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            Pick from our 1-Month, 3-Month, and Extended Training Programs
            designed for real-world impact.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 w-full max-w-[600px] mx-auto lg:mx-0">
            {cards.map((item) => (
              <div
                key={item.id}
                className="bg-[linear-gradient(101.01deg,#FFD7FF_-0.03%,#F0EEFF_59.42%)] border border-purple-100 rounded-2xl p-4 hover:shadow-lg transition"
              >
                <div className="w-8 h-8 rounded-full bg-[#2B0A88] text-white flex items-center justify-center text-sm font-bold">
                  {item.id}
                </div>

                <h3 className="mt-2 font-semibold text-[#2B0A88]">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
