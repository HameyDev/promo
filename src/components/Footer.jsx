export default function Footer({ onRegisterClick }) {
  return (
    <section className="bg-[linear-gradient(90deg,#1B0A6B_0%,#8A2D83_100%)] text-white py-10">
      
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4 items-center text-center">

        <p className="text-sm tracking-wide opacity-80 order-1">
          Empowering skills. Building careers.
        </p>

        <h3 className="text-xl md:text-3xl font-bold order-2">
          Get a Free Consultation
        </h3>

        <p className="text-sm md:text-base opacity-90 order-3">
          Upskill yourself in 2026 with Flat 50% OFF on All Courses.
        </p>

        <div className="mt-4 order-4">
          <button onClick={onRegisterClick} className="border border-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-purple-800 transition md:order-5">
            Register Now
          </button>
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-widest order-5 md:order-3">
          NS TRAINING
        </h1>

      </div>
    </section>
  );
}
