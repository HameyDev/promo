export default function PartnerBanner() {
  return (
    <section className="bg-white py-6 border-b">
      
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        
        <div className="flex items-center gap-4 md:gap-10 justify-center md:justify-start text-center md:text-left">

          <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">
            O
          </span>

          <p className="font-semibold text-[#200273] leading-snug">
            Collaborating with Pakistani
            <br className="hidden sm:block" />
            Academia Since 2020
          </p>

        </div>

        
        <div className="overflow-hidden w-full md:w-[700px] logo-slider">

          <div className="flex items-center gap-6 animate-slide whitespace-nowrap">
            
            <img src="/logo1.svg" className="h-10 sm:h-12 md:h-14 inline-block" />
            <img src="/logo2.svg" className="h-10 sm:h-12 md:h-14 inline-block" />
            <img src="/logo3.svg" className="h-10 sm:h-12 md:h-14 inline-block" />
            <img src="/logo4.svg" className="h-10 sm:h-12 md:h-14 inline-block" />
            <img src="/logo5.svg" className="h-10 sm:h-12 md:h-14 inline-block" />

            
            <img src="/logo1.svg" className="h-10 sm:h-12 md:h-14 inline-block" />
            <img src="/logo2.svg" className="h-10 sm:h-12 md:h-14 inline-block" />
            <img src="/logo3.svg" className="h-10 sm:h-12 md:h-14 inline-block" />
            <img src="/logo4.svg" className="h-10 sm:h-12 md:h-14 inline-block" />
            <img src="/logo5.svg" className="h-10 sm:h-12 md:h-14 inline-block" />

          </div>

        </div>

      </div>
      
    </section>
  );
}
