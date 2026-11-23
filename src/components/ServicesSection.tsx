import { SERVICES } from '../data/portfolioData';

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 sm:px-12 lg:px-20 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-center text-white mb-20 tracking-tight">
          Services
        </h2>

        {/* Services Container matching Usman's .services-container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-8 rounded-[3rem] bg-[var(--main-color)] text-black border-5 border-transparent hover:bg-white hover:text-black hover:border-[var(--main-color)] hover:scale-[1.03] transition-all duration-400 cursor-pointer shadow-lg flex flex-col justify-between"
            >
              <div className="flex flex-col text-left">
                <h4 className="text-2xl font-black mb-3 leading-snug">
                  {srv.title}
                </h4>
                <p className="text-base font-semibold leading-relaxed">
                  {srv.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
