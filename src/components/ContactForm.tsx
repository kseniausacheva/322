import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const ContactForm = () => {
  const { t } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="p-8 md:p-12 rounded-[40px] bg-white/5 border border-white/10"
    >
      <h3 className="text-3xl font-display font-bold uppercase mb-12">{t.contactPage.formTitle}</h3>
      <form className="space-y-8">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-white/40 font-bold">{t.contactPage.labels.name}</label>
          <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-royal-pink outline-none transition-all" />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-white/40 font-bold">{t.contactPage.labels.emailAddr}</label>
          <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-royal-pink outline-none transition-all" />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-white/40 font-bold">{t.contactPage.labels.message}</label>
          <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-4 focus:border-royal-pink outline-none transition-all resize-none"></textarea>
        </div>
        <button className="w-full py-6 bg-royal-pink text-white font-bold uppercase tracking-widest rounded-2xl hover:bg-royal-pink/80 transition-all">
          {t.contactPage.labels.submit}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
