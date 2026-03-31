import { products } from "@/data/products";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550505096-74afcbddbc13?auto=format&fit=crop&q=80&w=2600')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
            Pure <span className="text-green-400">Coconut.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-200 mb-12 font-light leading-relaxed">
            Unprocessed, completely natural, and profoundly refreshing. The ultimate hydration experience starts here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/product/coconut"
              className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-green-400 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-2 group w-full sm:w-auto"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product List Overview */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-[#FAF9F6]">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Collection</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Crafted with care from premium coastal coconuts. Choose your perfect companion.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="group cursor-pointer">
              <div 
                className="rounded-[2.5rem] p-8 h-[400px] flex flex-col justify-end relative overflow-hidden transition-transform duration-500 hover:scale-[1.02] shadow-sm hover:shadow-2xl"
                style={{ background: product.gradient }}
              >
                <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold tracking-wide">
                  {product.price}
                </div>
                <div className="relative z-10 text-white">
                  <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                  <p className="font-medium opacity-90">{product.subName}</p>
                </div>
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-0"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-center text-slate-400 border-t border-slate-800">
        <p className="text-sm font-medium tracking-widest uppercase">© 2026 Coconut Premium. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
