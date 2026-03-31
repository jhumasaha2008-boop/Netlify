"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  folderPath: string;
  frameCount: number;
}

export default function ProductScrollSequence({ folderPath, frameCount }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Load all images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Assume files are 0001.webp format
      const numStr = i.toString().padStart(4, "0");
      img.src = `${folderPath}/${numStr}.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
        }
      };
      img.onerror = () => {
        // Fallback or generic placeholder logic could go here if assets missing
      }
      loadedImages.push(img);
    }
  }, [folderPath, frameCount]);

  // Bind scroll to frames
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    if (images.length === 0) return;

    let animationFrameId: number;

    const render = () => {
      const idx = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(frameIndex.get()))
      );

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");

      if (canvas && ctx && images[idx]) {
        const img = images[idx];
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Center and cover drawing logic
        const scale = Math.max(
          canvas.width / img.width,
          canvas.height / img.height
        );
        const x = canvas.width / 2 - (img.width / 2) * scale;
        const y = canvas.height / 2 - (img.height / 2) * scale;

        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [images, frameIndex, frameCount]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="h-[400vh] relative w-full">
      <div className="sticky top-0 w-full h-screen overflow-hidden pointer-events-none z-0">
        <canvas 
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
        {/* Placeholder gradient when images are missing just to have something visual */}
        {images.length === 0 && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center opacity-50">
            <p className="text-slate-400 font-medium">Add {frameCount} .webp assets to {folderPath}</p>
          </div>
        )}
      </div>
    </div>
  );
}
