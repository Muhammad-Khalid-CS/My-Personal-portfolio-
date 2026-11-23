import { Linkedin, Facebook, MessageCircle, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-[#131313] border-t border-white/10 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Social Icons matching Usman's footer */}
        <div className="flex items-center justify-center gap-4 mb-7">
          <a
            href={PERSONAL_INFO.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-icon-usman"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={PERSONAL_INFO.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
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

        {/* Footer Navigation List matching Usman's site */}
        <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-base sm:text-lg font-medium text-white mb-10">
          <li>
            <a
              href="#services"
              className="text-white hover:text-[var(--main-color)] border-b-3 border-transparent hover:border-[var(--main-color)] pb-1 transition-all"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="text-white hover:text-[var(--main-color)] border-b-3 border-transparent hover:border-[var(--main-color)] pb-1 transition-all"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-[var(--main-color)] border-b-3 border-transparent hover:border-[var(--main-color)] pb-1 transition-all"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#reviews"
              className="text-white hover:text-[var(--main-color)] border-b-3 border-transparent hover:border-[var(--main-color)] pb-1 transition-all"
            >
              Reviews
            </a>
          </li>
        </ul>

        {/* Copyright matching Usman's format */}
        <p className="text-sm sm:text-base text-white font-light">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name} | All Rights Reserved
        </p>

      </div>
    </footer>
  );
}
