export default function PartnerBanner() {
    return (
        <section className="bg-white py-6 border-b">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-6">

                
                <div className="flex items-center gap-10">
                    <span className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">
                        O
                    </span>
                    <p className="font-semibold text-[#200273]">
                        Collaborating with Pakistani <br className="hidden sm:block" />
                        Academia Since 2020
                    </p>
                </div>

                
                <div className="overflow-hidden w-[700px] logo-slider">
                    <div className="flex items-center gap-6 animate-slide whitespace-nowrap">

                        
                        <img src="/logo1.svg" className="h-14 inline-block" />
                        <img src="/logo2.svg" className="h-14 inline-block" />
                        <img src="/logo3.svg" className="h-14 inline-block" />
                        <img src="/logo4.svg" className="h-14 inline-block" />
                        <img src="/logo5.svg" className="h-14 inline-block" />

                        
                        <img src="/logo1.svg" className="h-14 inline-block" />
                        <img src="/logo2.svg" className="h-14 inline-block" />
                        <img src="/logo3.svg" className="h-14 inline-block" />
                        <img src="/logo4.svg" className="h-14 inline-block" />
                        <img src="/logo5.svg" className="h-14 inline-block" />

                    </div>
                </div>


            </div>
        </section>
    );
}
