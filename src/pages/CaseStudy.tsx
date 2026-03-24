import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { ArrowLeft, Users, Calendar, MapPin, Play, Image as ImageIcon } from 'lucide-react';
import SEO from '../components/SEO';

import ContactForm from '../components/ContactForm';

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const caseItem = t.cases.items.find((item: any) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!caseItem) {
      navigate('/portfolio');
    }
  }, [caseItem, navigate]);

  if (!caseItem) return null;

  return (
    <div className="min-h-screen bg-royal-black text-white pt-32 pb-20">
      <SEO title={`${caseItem.client} | Royal Event Group`} description={caseItem.desc} />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-royal-pink font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all">
            <ArrowLeft className="w-4 h-4" /> {t.nav.portfolio}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-royal-pink font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
              Case Study
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none mb-8 break-words">
              {caseItem.client}
            </h1>
            <div className="flex flex-wrap gap-8 mb-12">
              <div className="flex items-center gap-3 text-white/60">
                <Users className="w-5 h-5 text-royal-pink" />
                <span className="text-sm font-bold uppercase tracking-widest">{caseItem.people}</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Calendar className="w-5 h-5 text-royal-pink" />
                <span className="text-sm font-bold uppercase tracking-widest">7 Days</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-royal-pink" />
                <span className="text-sm font-bold uppercase tracking-widest">Egypt</span>
              </div>
            </div>
            <p className="text-2xl text-white/50 font-light leading-relaxed">
              {caseItem.fullDesc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] rounded-[60px] overflow-hidden border border-white/10"
          >
            <img 
              src={caseItem.image} 
              alt={caseItem.client} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Gallery Section */}
        {caseItem.gallery && caseItem.gallery.length > 0 && (
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <ImageIcon className="w-6 h-6 text-royal-pink" />
              <h2 className="text-3xl font-display font-black uppercase tracking-tighter">Photo Gallery</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseItem.gallery.map((img: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square rounded-3xl overflow-hidden border border-white/10 group"
                >
                  <img 
                    src={img} 
                    alt={`Gallery ${i}`} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Video Section */}
        {caseItem.videos && caseItem.videos.length > 0 && (
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <Play className="w-6 h-6 text-royal-pink" />
              <h2 className="text-3xl font-display font-black uppercase tracking-tighter">
                {language === 'ru' ? 'Видеоотчет' : 'Video Highlights'}
              </h2>
            </div>
            
            {/* Horizontal Videos Grid */}
            {caseItem.videos.some((v: any) => v.type === 'horizontal') && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {caseItem.videos.filter((v: any) => v.type === 'horizontal').map((video: any, i: number) => (
                  <motion.div
                    key={`h-${i}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative aspect-video rounded-[40px] md:rounded-[60px] overflow-hidden border border-white/10 group"
                  >
                    <video
                      src={video.url}
                      poster={video.poster}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                      controls
                      preload="metadata"
                    />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Vertical Videos Carousel */}
            {caseItem.videos.some((v: any) => v.type === 'vertical') && (
              <div className="relative">
                <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
                  {caseItem.videos.filter((v: any) => v.type === 'vertical').map((video: any, i: number) => (
                    <motion.div
                      key={`v-${i}`}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative flex-none w-[280px] md:w-[320px] aspect-[9/16] rounded-[40px] overflow-hidden border border-white/10 group snap-center"
                    >
                      <video
                        src={video.url}
                        poster={video.poster}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                        controls
                        preload="metadata"
                      />
                    </motion.div>
                  ))}
                </div>
                {/* Scroll Indicator for Desktop */}
                <div className="hidden md:flex justify-center gap-2 mt-4">
                  <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-royal-pink"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {!caseItem.videos && (
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <Play className="w-6 h-6 text-royal-pink" />
              <h2 className="text-3xl font-display font-black uppercase tracking-tighter">Video Highlights</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[60px] overflow-hidden border border-white/10 group cursor-pointer"
            >
              <img 
                src={`https://picsum.photos/seed/video-${id}/1920/1080`} 
                alt="Video Preview" 
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-royal-black/40 group-hover:bg-royal-black/20 transition-colors">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-royal-pink group-hover:text-royal-black transition-all">
                  <Play className="w-10 h-10 fill-current" />
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* Contact Form Section */}
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-black uppercase tracking-tighter mb-4">
              {language === 'ru' ? 'Хотите такой же проект?' : 'Want a similar project?'}
            </h2>
            <p className="text-white/40 uppercase tracking-widest text-sm font-bold">
              {language === 'ru' ? 'Оставьте заявку, и мы свяжемся с вами' : 'Submit an application, and we will contact you'}
            </p>
          </div>
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default CaseStudy;
