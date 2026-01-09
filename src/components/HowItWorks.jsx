import { steps } from "../data/Steps";

export default function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-[#2B0A88]">
          How it Works
        </h2>

        <p className="mt-2 text-gray-600">
          Your Learning Journey in 4 Simple Steps
        </p>
        
        <div className="mt-16 grid md:grid-cols-4 gap-10 relative">

          {steps.map((step) => (
            <div key={step.id} className="text-center">
              
              <div className="hidden md:block absolute top-5 left-0 right-0 h-[2px] border-t border-dashed border-[#2B0A88]"></div>

              <div className="relative z-10 w-10 h-10 mx-auto rounded-full bg-[#2B0A88] text-white flex items-center justify-center font-bold">
                {step.id}
              </div>

              <h3 className="mt-4 font-semibold text-[#2B0A88]">
                {step.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 max-w-xs mx-auto">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}


