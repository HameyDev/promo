export default function CategoriesWithForm() {
  return (
    <section className="bg-[#faf7ff] py-16">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-40 items-start justify-between">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-3xl font-bold text-[#2B0A88]">
            Explore Our Training Categories
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl">
            Pick from our 1-Month, 3-Month, and Extended Training Programs
            designed for real-world impact.
          </p>

          {/* Cards */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6  w-[600px]">
            {cards.map((item) => (
              <div
                key={item.id}
                className="bg-[linear-gradient(101.01deg,#FFD7FF_-0.03%,#F0EEFF_59.42%)] border border-purple-100 rounded-2xl p-3 hover:shadow-lg transition w-[260px]"
              >
                <div className="w-8 h-8 rounded-full bg-[#2B0A88] text-white flex items-center justify-center text-sm font-bold">
                  {item.id}
                </div>
                <h3 className="mt-2 font-semibold text-[#2B0A88]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="max-w-6xl bg-white mx-auto rounded-3xl shadow-xl p-8">
          <h3 className="text-xl font-bold text-center text-purple-800">
            Fill the Form and Our Team will <br /> Contact you Shortly
          </h3>

          <form className="mt-6 space-y-4">
            <Input label="Full Name*" placeholder="Your Full Name" />
            <Input label="Last Name*" placeholder="Your Last Name" />
            <Input label="Phone No*" placeholder="Your Phone" />
            <Input label="City*" placeholder="Your City" />

            <div className="grid grid-cols-2 gap-4">
              <Select label="Course Category*" />
              <Select label="Mode*" />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-purple-700 to-pink-600 text-white py-3 rounded-xl font-semibold hover:opacity-90"
            >
              Get Free Consultation
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

/* ------------------ helpers ------------------ */

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
      />
    </div>
  );
}

function Select({ label }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <select className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none">
        <option>Please Select</option>
      </select>
    </div>
  );
}

/* ------------------ data ------------------ */

const cards = [
  {
    id: 1,
    title: "3 Months Diploma Programs",
    desc: "Comprehensive, career-focused diplomas designed for long-term skill building and job readiness.",
  },
  {
    id: 2,
    title: "1 Month Short Courses",
    desc: "Fast-track courses for quick upskilling in high-demand digital areas.",
  },
  {
    id: 3,
    title: "Master-Classes & Workshops",
    desc: "Intensive sessions led by industry experts for practical exposure.",
  },
  {
    id: 4,
    title: "Pre-Recorded Sessions",
    desc: "Learn anytime, anywhere with professionally recorded courses.",
  },
];
