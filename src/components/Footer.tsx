import React from 'react';
import { Instagram, Facebook, Linkedin, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/royalevent', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/royalevent', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com/company/royalevent', label: 'LinkedIn' },
    { icon: Send, href: 'https://t.me/royalevent', label: 'Telegram' },
    { icon: MessageCircle, href: 'https://max.social/royalevent', label: 'Max' },
  ];

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-royal-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/" className="group">
            <img src="/logo.png" alt="ROYAL EVENT" className="h-24 w-auto group-hover:opacity-80 transition-opacity" />
          </Link>
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
            {t.footer.rights}
          </p>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-royal-pink hover:text-royal-pink transition-all group"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-2">
          <p className="text-white/40 text-[10px] uppercase tracking-widest leading-relaxed">
            {t.footer.legal.ip}<br />
            {t.footer.legal.inn}<br />
            {t.footer.legal.ogrnip}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#" className="text-white/40 text-[10px] uppercase tracking-widest hover:text-royal-pink transition-colors">
            {t.footer.legal.privacy}
          </a>
          <a href="#" className="text-white/40 text-[10px] uppercase tracking-widest hover:text-royal-pink transition-colors">
            {t.footer.legal.offer}
          </a>
        </div>
        <div>
          <p className="text-white/20 text-[10px] leading-relaxed italic">
            {t.footer.legal.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
