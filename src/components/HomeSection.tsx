import { useState, useEffect } from 'react';
import { Linkedin, Facebook, MessageCircle, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function HomeSection() {
  const titles = PERSONAL_INFO.titles;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, titles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 pt-28 pb-16 bg-[#080808]"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-20">
        
        {/* Left Side: Text content matching Usman's structure */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Hi, It's <span className="glow-span">{PERSONAL_INFO.firstName}</span>
          </h1>

          {/* Typewriter Animation */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mt-3 mb-4 flex items-center justify-center lg:justify-start min-h-[44px]">
            <span>I'm a&nbsp;</span>
            <span className="text-[var(--main-color)] font-bold">
              {currentText}
            </span>
            <span className="inline-block w-1 h-6 sm:h-8 bg-[var(--main-color)] ml-1 animate-pulse" />
          </h3>

          {/* Exact bio requested by user */}
          <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl font-normal mb-6">
            {PERSONAL_INFO.homeBio}
          </p>

          {/* Circular Social Icons matching Usman's site */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="social-icon-usman"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="social-icon-usman"
              title="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-icon-usman"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.social.email}
              aria-label="Email"
              className="social-icon-usman"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Button Group: Hire & Contact matching Usman's site */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="btn-usman"
            >
              Hire
            </a>

            <a
              href="#contact"
              className="btn-usman-outline"
            >
              Contact
            </a>
          </div>

        </div>

        {/* Right Side: Circular Glowing Profile Picture */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-60 sm:w-72 md:w-80 lg:w-[32vw] lg:max-w-[420px] aspect-square rounded-full flex items-center justify-center">
            
            <div className="relative w-full h-full rounded-full overflow-hidden home-img-glow border-3 border-[var(--main-color)] bg-[#131313]">
              <img
                src={PERSONAL_INFO.avatarPath}
                alt="Muhammad Khalid"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
