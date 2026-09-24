import Image from "next/image";
import Link from "next/link";
import { climateCrisis } from "../font";

const ingredients = [
  {
    number: "01.",
    name: "Broken Rice",
    image: "/food/com-1.png",
    background: "bg-[var(--main2)]",
    color: "text-[var(--main2)]",
    href: "/desktop-5",
  },
  {
    number: "02.",
    name: "Grilled Pork Chop",
    image: "/food/suon-1.png",
    background: "bg-[var(--main4)]",
    color: "text-[var(--main4)]",
    href: "/desktop-6",
  },
  {
    number: "03.",
    name: "Pork Pie",
    image: "/food/cha-1.png",
    background: "bg-[var(--main2)]",
    color: "text-[var(--main2)]",
    href: "/desktop-7",
  },
  {
    number: "04.",
    name: "Fried Egg",
    image: "/food/trung-1.png",
    background: "bg-[var(--main4)]",
    color: "text-[var(--main4)]",
    href: "/desktop-8",
  },
];

export default function DesktopFour() {
  return (
    <main className="min-h-svh bg-[var(--main6)] px-6 py-16 sm:px-10 lg:px-16 lg:py-36 flex items-center justify-center">
      <section className="mx-auto grid w-full max-w-[1728px] grid-cols-2 gap-x-8 gap-y-16 sm:gap-x-12 lg:grid-cols-4 lg:gap-x-16 2xl:gap-x-20">
        {ingredients.map((ingredient) => (
          <Link
            key={ingredient.number}
            href={ingredient.href}
            className={`group flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-2 focus-visible:-translate-y-2 focus-visible:outline-none`}
          >
            <span
              className={`${climateCrisis.className} mb-5 text-[clamp(2rem,4vw,2.45rem)] leading-none ${ingredient.color}`}
            >
              {ingredient.number}
            </span>
            <div
              className={`relative grid aspect-square w-full max-w-[340px] place-items-center overflow-hidden rounded-full ${ingredient.background} transition-shadow duration-200 group-hover:shadow-[0_10px_0_rgba(35,69,27,0.12)] group-focus-visible:shadow-[0_10px_0_rgba(35,69,27,0.12)]`}
            >
              <Image
                src={ingredient.image}
                alt={ingredient.name}
                width={240}
                height={240}
                className="relative z-10 h-[90%] w-[90%] object-contain transition-transform duration-200 group-hover:scale-105 group-focus-visible:scale-105"
              />
            </div>
            <h2
              className={`${climateCrisis.className} mt-7 max-w-[250px] text-[clamp(1.75rem,3.2vw,2.25rem)] leading-[0.86] ${ingredient.color}`}
            >
              {ingredient.name}
            </h2>
          </Link>
        ))}
      </section>
    </main>
  );
}
