import { TIMELINE } from '../data/portfolioData';

export function EducationTimeline() {
  return (
    <section id="education" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#131313]">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading matching Usman's site */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-center text-white mb-20 tracking-tight">
          Education
        </h2>

        {/* Timeline Items Container */}
        <div className="timeline-items max-w-4xl mx-auto">
          {TIMELINE.map((item, index) => {
            const isOdd = index % 2 === 0; // 0, 2 -> left on desktop; 1, 3 -> right
            return (
              <div
                key={index}
                className={`timeline-item relative mb-12 last:mb-0 w-full pl-10 md:pl-0 ${
                  isOdd
                    ? 'md:pr-[calc(50%+30px)] md:text-right'
                    : 'md:pl-[calc(50%+30px)] md:text-left'
                }`}
              >
                {/* Glowing Dot */}
                <div className="timeline-dot-usman" />

                {/* Timeline Date */}
                <div className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                  {item.year}
                </div>

                {/* Timeline Content Card matching Usman's .timeline-content */}
                <div className="p-7 sm:p-10 rounded-[3rem] bg-[#080808] border-3 border-[var(--main-color)] shadow-[0_0_12px_var(--main-color)] hover:shadow-[0_0_30px_var(--main-color)] hover:scale-[1.04] transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-base text-white/90 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
