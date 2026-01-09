export default function Footer({ onRegisterClick }) {
  return (
    <section className=" bg-[linear-gradient(90deg,#1B0A6B_0%,#8A2D83_100%)] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <p className="text-sm tracking-wide opacity-80">
          Empowering skills. Building careers.
        </p>

        <h3 className="mt-2 text-xl md:text-3xl font-bold">
          Get a Free Consultation
        </h3>

        <p className="mt-2 text-sm md:text-base opacity-90">
          Upskill yourself in 2026 with Flat 50% OFF on All Courses.
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-widest">
          NS TRAINING
        </h1>

        <div className="mt-6">
          <button onClick={onRegisterClick} className="border border-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-purple-800 transition">
            Register Now
          </button>
        </div>

      </div>
    </section>
  );
}
