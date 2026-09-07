import Image from "next/image";

type OrbitFood = {
  id: string;
  src: string;
  alt: string;
  angle: number;
  size: string;
};

const orbitFoods: OrbitFood[] = [
  {
    id: "suon",
    src: "/food/suon-1.png",
    alt: "Sườn nướng",
    angle: 0,
    size: "w-36",
  },
  {
    id: "rau-cu",
    src: "/food/rau-cu-1.png",
    alt: "Đồ chua",
    angle: 45,
    size: "w-32",
  },
  {
    id: "duachuot",
    src: "/food/duachuot-2.png",
    alt: "Dưa leo",
    angle: 90,
    size: "w-32",
  },
  {
    id: "com",
    src: "/food/com-1.png",
    alt: "Cơm tấm",
    angle: 135,
    size: "w-32",
  },
  {
    id: "trung",
    src: "/food/trung-1.png",
    alt: "Trứng ốp la",
    angle: 180,
    size: "w-36",
  },
  {
    id: "cha",
    src: "/food/cha-1.png",
    alt: "Chả trứng",
    angle: 225,
    size: "w-32",
  },
  {
    id: "nuocmam",
    src: "/food/nuocmam-1.png",
    alt: "Nước mắm",
    angle: 270,
    size: "w-36",
  },
  {
    id: "carot",
    src: "/food/carot-1.png",
    alt: "Cà rốt",
    angle: 315,
    size: "w-32",
  },
];

export default function FoodOrbit() {
  return (
    <div className="relative h-[580px] w-[680px] max-w-[94vw] md:h-[620px] md:w-[720px]">
      <div className="absolute inset-0 animate-[orbit_24s_linear_infinite]">
        {orbitFoods.map((food) => (
          <div
            key={food.id}
            className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `  rotate(${food.angle}deg) translateY(-300px) rotate(-${food.angle}deg)`,
            }}
          >
            <div className="animate-[orbit-counter_24s_linear_infinite]">
              <div
                className={`relative flex aspect-square items-center justify-center rounded-full ${food.size} ${
                  food.angle % 90 === 0 ? "bg-[var(--main4)]" : "bg-[var(--main2)]"
                }`}
              >
                <Image
                  src={food.src}
                  alt={food.alt}
                  width={180}
                  height={180}
                  className={`h-[82%] w-[82%] object-contain rotate(${food.angle}deg)`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Image
        src="/food/dia-2.png"
        alt="Đĩa cơm tấm trống"
        width={380}
        height={287}
        priority
        className="absolute left-1/2 top-1/2 z-10 w-[58%] -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </div>
  );
}
