import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import ProductScrollSequence from "@/components/ProductScrollSequence";
import ProductSections from "@/components/ProductSections";

// Ensure static generation for Netlify / Static Exports
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navigation />
      
      {/* Intro hero fixed behind the canvas */}
      <div className="fixed inset-0 flex items-center justify-center p-6 text-center pointer-events-none z-0">
        <div className="max-w-3xl translate-y-[-10vh]">
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-4 tracking-tight" style={{ color: product.themeColor }}>
            {product.section1.title}
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-slate-500 drop-shadow-sm">
            {product.section1.subtitle}
          </p>
        </div>
      </div>

      <div className="relative z-10">
        {/* Frame count assumed 60. Must match the assets provided later */}
        <ProductScrollSequence folderPath={product.folderPath} frameCount={60} />
      </div>

      <ProductSections product={product} />
    </main>
  );
}
