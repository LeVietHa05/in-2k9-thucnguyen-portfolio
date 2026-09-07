"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { darumadropOne } from "../font"; 

type FoodItem = {
  id: string;
  name: string;
  src: string;
  alt: string;
  position: {
    top: number;
    left: number;
    width: number;
    height: number;
    zIndex: number;
  };
  tooltipPosition: "top" | "right" | "bottom" | "left";
};

// Adjust these values manually after checking the exported PNG composition.
const foodItems: FoodItem[] = [
  {
    id: "suon",
    name: "Grilled Pork Chop",
    src: "/food/suon-1.png",
    alt: "Miếng sườn nướng",
    position: { top: 155, left: 45, width: 435, height: 349, zIndex: 5 },
    tooltipPosition: "left",
  },
  {
    id: "trung",
    name: "Fried Egg",
    src: "/food/trung-1.png",
    alt: "Trứng ốp la",
    position: { top: 280, left: 260, width: 351, height: 228, zIndex: 3 },
    tooltipPosition: "bottom",
  },
  {
    id: "cha",
    name: "Pork Pie",
    src: "/food/cha-1.png",
    alt: "Miếng chả trứng",
    position: { top: 85, left: 15, width: 238, height: 223, zIndex: 4 },
    tooltipPosition: "top",
  },
  {
    id: "com",
    name: "Broken Rice",
    src: "/food/com-1.png",
    alt: "Cơm tấm",
    position: { top: 60, left: 190, width: 344, height: 264, zIndex: 3 },
    tooltipPosition: "top",
  },
  {
    id: "duachuot",
    name: "Sdie dishes",
    src: "/food/duachuot-1.png",
    alt: "Dưa leo",
    position: { top: 10, left: 265, width: 389, height: 251, zIndex: 2 },
    tooltipPosition: "top",
  },
  {
    id: "rau-cu",
    name: "",
    src: "/food/rau-cu-1.png",
    alt: "Rau củ đồ chua",
    position: { top: 180, left: 365, width: 307, height: 175, zIndex: 3 },
    tooltipPosition: "left",
  },
  {
    id: "nuocmam",
    name: "Fish sauce",
    src: "/food/nuocmam-1.png",
    alt: "Chén nước mắm",
    position: { top: 280, left: 510, width: 390, height: 270, zIndex: 6 },
    tooltipPosition: "bottom",
  },
];

const plateImage = "/food/dia-1.png";
const alphaThreshold = 12;

export default function FoodPlateInteractive() {
  const [hoveredItem, setHoveredItem] = useState<FoodItem | null>(null);
  const imageCache = useRef(new Map<string, HTMLImageElement>());
  const canvasCache = useRef(new Map<string, HTMLCanvasElement>());

  useEffect(() => {
    foodItems.forEach((item) => {
      const image = new window.Image();
      image.onload = () => imageCache.current.set(item.src, image);
      image.src = item.src;
    });
  }, []);

  const isVisiblePixel = (
    x: number,
    y: number,
    item: FoodItem,
  ) => {
    const image = imageCache.current.get(item.src);
    if (!image) return false;
    console.log(1);
    let canvas = canvasCache.current.get(item.src);
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext("2d", { willReadFrequently: true });
      if (!context) return false;
      context.drawImage(image, 0, 0);
      canvasCache.current.set(item.src, canvas);
    }

    const imageX = Math.floor((x / item.position.width) * image.naturalWidth);
    const imageY = Math.floor((y / item.position.height) * image.naturalHeight);

    if (
      imageX < 0 ||
      imageY < 0 ||
      imageX >= image.naturalWidth ||
      imageY >= image.naturalHeight
    ) {
      return false;
    }

    const context = canvas.getContext("2d", { willReadFrequently: true });
    const alpha = context?.getImageData(imageX, imageY, 1, 1).data[3] ?? 0;
    return alpha > alphaThreshold;
  };

  const handlePlateMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const scaleX = 680 / bounds.width;
    const scaleY = 560 / bounds.height;
    const plateX = (event.clientX - bounds.left) * scaleX;
    const plateY = (event.clientY - bounds.top) * scaleY;

    const hovered = foodItems
      .filter((item) => {
        const { top, left, width, height } = item.position;
        return (
          plateX >= left &&
          plateX <= left + width &&
          plateY >= top &&
          plateY <= top + height
        );
      })
      .filter((item) =>
        isVisiblePixel(
          plateX - item.position.left,
          plateY - item.position.top,
          item,
        ),
      )
      .sort((a, b) => b.position.zIndex - a.position.zIndex)[0];

    setHoveredItem(hovered ?? null);
  };

  return (
    <div
      className="relative isolate h-[560px] w-[680px] max-w-[92vw] origin-top-left scale-[min(1,92vw/680px)] md:scale-100"
      onMouseMove={handlePlateMouseMove}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <Image
        src={plateImage}
        alt="Đĩa cơm tấm"
        fill
        priority
        sizes="(max-width: 768px) 90vw, 52vw"
        className=" absolute inset-0 object-contain "
      />
      <div className=" absolute inset-0">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className=" absolute"
            style={{
              top: item.position.top,
              left: item.position.left,
              width: item.position.width,
              height: item.position.height,
              zIndex: item.position.zIndex,
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 40vw, 24vw"
              className={` cursor-pointer object-contain transition-all duration-200 ease-out ${
                hoveredItem?.id === item.id
                  ? "scale-105 drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                  : ""
              }`}
            />
            <span
              className={`${darumadropOne.className} absolute z-20 whitespace-nowrap rounded-full bg-[var(--main5)] px-3 py-2 text-[35px] font-extrabold text-[var(--main1)] opacity-0 transition duration-150 ease-out ${
                hoveredItem?.id === item.id ? "opacity-100" : ""
              } ${
                item.tooltipPosition === "top"
                  ? "bottom-full left-1/2 mb-3 -translate-x-1/2"
                  : item.tooltipPosition === "right"
                    ? "left-full top-1/2 ml-3 -translate-y-1/2"
                    : item.tooltipPosition === "bottom"
                      ? "left-1/2 top-full mt-3 -translate-x-1/2"
                      : "right-full top-1/2 mr-3 -translate-y-1/2"
              }`}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
