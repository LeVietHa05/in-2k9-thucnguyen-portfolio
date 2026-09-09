"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { climateCrisis } from "../font";

type ImageCardProps = {
  title: string;
  textcolor: string;
  textbgcolor: string;
  imgs: string[];
};

export default function ImageCard({
  title,
  textcolor,
  textbgcolor,
  imgs,
}: ImageCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (imgs.length < 2) return;

    const interval = window.setInterval(() => {
      setCurrentImage((imageIndex) => (imageIndex + 1) % imgs.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [imgs.length]);

  if (imgs.length === 0) return null;

  return (
    <article
      className={`w-full max-w-[570px] rounded-xl   p-1  sm:p-0`}
    >
      <div className="relative aspect-[1.42] overflow-hidden rounded-lg">
        {imgs.map((src, index) => (
          <Image
            key={`${src}-${index}`}
            src={src}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 570px"
            className={`object-cover transition-opacity duration-500 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div
        className={`rounded-lg mt-6 mb-8 px-8 py-5 text-center text-[clamp(1rem,2vw,1.5rem)] leading-tight shadow-md bg-[var(--${textbgcolor})]`}
      >
        <span className={`text-[var(--${textcolor})]`}>{title}</span>
      </div>
    </article>
  );
}
