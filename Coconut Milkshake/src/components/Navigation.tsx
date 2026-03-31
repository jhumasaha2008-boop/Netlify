"use client";

import Link from "next/link";
import { ShoppingBag, Menu, Droplets } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Droplets className="w-6 h-6 text-green-600 group-hover:text-green-500 transition-colors" />
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Coco<span className="font-light">nut.</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link href="/product/coconut" className="hover:text-green-600 transition-colors">Tender</Link>
          <Link href="/product/coconut-cream" className="hover:text-green-600 transition-colors">Cream</Link>
          <Link href="/product/coconut-coffee" className="hover:text-green-600 transition-colors">Coffee</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <ShoppingBag className="w-5 h-5 text-slate-800" />
          </button>
          <button className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors">
            <Menu className="w-5 h-5 text-slate-800" />
          </button>
        </div>
      </div>
    </nav>
  );
}
