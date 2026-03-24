import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft, Share2, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SEO from '../components/SEO';

const BlogPage = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const blogData = t.blogPage;

  // Single Article View
  if (id) {
    const article = blogData.articles.find((a: any) => a.id === id);

    if (!article) {
      return (
        <div className="pt-32 pb-20 text-center">
          <SEO title="Article not found | Royal Event Group" />
          <h1 className="text-4xl font-display font-bold text-white mb-8">Article not found</h1>
          <Link to="/blog" className="text-royal-pink hover:underline">Back to Blog</Link>
        </div>
      );
    }

    return (
      <div className="pt-32 pb-20 bg-royal-black min-h-screen">
        <SEO title={`${article.title} | Royal Event Group`} description={article.excerpt} />
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-royal-pink transition-colors mb-12 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{blogData.backToBlog}</span>
            </Link>

            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-transparent to-transparent" />
            </div>

            <div className="flex flex-wrap items-center gap-6 mb-8 text-white/40">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-royal-pink" />
                <span className="text-[10px] font-bold uppercase tracking-widest">{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={14} className="text-royal-pink" />
                <span className="text-[10px] font-bold uppercase tracking-widest">{article.category}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-10 leading-tight">
              {article.title}
            </h1>

            <div className="prose prose-invert prose-pink max-w-none">
              <p className="text-xl text-white/80 leading-relaxed mb-8 font-light italic border-l-2 border-royal-pink pl-6">
                {article.excerpt}
              </p>
              <div className="text-lg text-white/60 leading-relaxed space-y-6">
                {article.content.split('\n').map((paragraph: string, idx: number) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
              <button className="flex items-center gap-2 text-white/60 hover:text-royal-pink transition-colors group">
                <Share2 size={18} />
                <span className="text-[10px] font-bold uppercase tracking-widest">{blogData.share}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Blog List View
  return (
    <div className="pt-32 pb-20 bg-royal-black min-h-screen">
      <SEO title={`${blogData.title} | Royal Event Group`} description={blogData.subtitle} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-royal-pink text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">
              {blogData.title}
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              {blogData.subtitle}
            </h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.articles.map((article: any, index: number) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${article.id}`} className="block">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-royal-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-royal-pink text-white text-[8px] font-bold uppercase tracking-widest rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-white/40">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} />
                    <span className="text-[9px] font-bold uppercase tracking-widest">{article.date}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-royal-pink transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="inline-flex items-center gap-2 text-royal-pink text-[10px] font-bold uppercase tracking-widest group/btn">
                  {blogData.readMore}
                  <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
