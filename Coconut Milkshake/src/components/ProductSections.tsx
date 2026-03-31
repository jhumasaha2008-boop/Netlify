"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { ShieldCheck, Droplet, ArrowRight, Zap, RefreshCw } from "lucide-react";

export default function ProductSections({ product }: { product: Product }) {
  // Common motion variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative z-10 w-full">
      {/* Spacer to allow scrollytelling background to be visible before content */}
      <div className="h-[250vh]"></div>

      <div className="bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-2xl rounded-t-[3rem] p-8 md:p-24 relative overflow-hidden">
        {/* Subtle decorative gradient orb */}
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-20 pointer-events-none"
          style={{ background: product.themeColor }}
        />

        {/* --- Product Stats & Features --- */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 justify-between items-start md:items-center mb-32 relative z-10"
        >
          <div className="flex-1">
            <span className="text-sm font-semibold tracking-widest uppercase mb-2 block" style={{ color: product.themeColor }}>
              {product.features[0]}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              {product.section2.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              {product.section2.subtitle}
            </p>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-3 gap-6">
            {product.stats.map((stat, i) => (
              <div key={i} className="p-6 bg-slate-50/80 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-bold text-slate-800 mb-1">{stat.val}</span>
                <span className="text-sm text-slate-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* --- Details Section --- */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-6xl mx-auto mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div className="order-2 md:order-1 relative h-96 w-full rounded-3xl overflow-hidden bg-slate-100 group">
            {/* The actual image would be here. Placeholder fallback applied. */}
            <div className="absolute inset-0 bg-gradient-to-tr" style={{ background: product.gradient }} />
            <div className="absolute inset-0 flex items-center justify-center p-12 text-white font-bold text-2xl opacity-80 z-10 text-center mix-blend-overlay">
              {product.detailsSection.imageAlt}
            </div>
            <div className="absolute inset-0 bg-black/10 transition-opacity opacity-0 group-hover:opacity-100 z-20" />
            <div className="absolute bottom-6 right-6 p-4 bg-white/20 backdrop-blur-md rounded-xl z-30">
              <Droplet className="text-white w-6 h-6" />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">{product.detailsSection.title}</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              {product.detailsSection.description}
            </p>
            <ul className="mt-8 space-y-4">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* --- Freshness & Process --- */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center mb-32"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-slate-50 mb-6">
            <RefreshCw className="w-8 h-8 text-slate-700" />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-6">{product.freshnessSection.title}</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            {product.freshnessSection.description}
          </p>
        </motion.section>

        {/* --- Buy Now CTA Section --- */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-6xl mx-auto rounded-[3rem] p-12 md:p-16 text-white text-center shadow-lg relative overflow-hidden"
          style={{ background: product.gradient }}
        >
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-5xl font-extrabold mb-4">Experience the purity.</h2>
            <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl font-light">
              Elevate your daily hydration with the unmatched taste of {product.name}.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <div className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-2xl">
                <span className="block text-sm uppercase tracking-wider font-semibold opacity-80 mb-1">Price</span>
                <span className="text-4xl font-bold">{product.buyNowSection.price}</span>
                <span className="block text-sm opacity-80 mt-1">{product.buyNowSection.unit}</span>
              </div>
              
              <button className="bg-white text-slate-900 px-10 py-6 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-3 group">
                Add to Cart
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-sm font-medium opacity-80">
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" /> Delivered chilled within 24 hours
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Full refund guarantee
              </span>
            </div>
          </div>
        </motion.section>
        
      </div>
    </div>
  );
}
