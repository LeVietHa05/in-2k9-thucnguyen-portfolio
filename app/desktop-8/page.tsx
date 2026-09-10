import Image from "next/image";
import { climateCrisis, darumadropOne } from "../font";
import ImageCard from "../components/ImageCard";
import { JobButton } from "../components/job-button";
import DriveVideoCard from "../components/DriveVideoThumb";

export default function DesktopEight() {
  return (
    <main className="min-h-svh bg-[var(--main6)] px-6 pt-16 sm:px-0 max-w-7xl mx-auto ">
      <section id="one" className="flex">
        <div className="bg-white p-8 text-[var(--main2)] w-1/2 shadow-lg/50 rounded-xl">
          <div
            className={`${climateCrisis.className} text-[40px] leading-[50px]`}
          >
            <span className="text-[var(--main1)]">Ingredient 4: </span>
            <br />
            <span className="text-[var(--main4)]">
              The Creative Spark - Fried Egg{" "}
              <span className={`text-2xl ${darumadropOne.className}`}>
                {" "}
                (aka Trung Chien)
              </span>
            </span>
          </div>
          <div className="text-2xl">
            Besides my work in economics and sports, fashion is the golden yolk
            that brings color and identity to my plate. A passion since
            childhood, fashion is where my rawest creativity lives.
          </div>
          <div className="flex justify-around min-h-[220px] border-b-3 border-dashed">
            <div className="flex items-end">
              <Image
                src={"/desktop-8/1.svg"}
                alt=""
                width={734.580078125}
                height={428}
                className=" "
              ></Image>
            </div>
          </div>
          <div className={`${climateCrisis.className} pt-6`}>
            Portoflio | Chef Vo Nguyen Thuc Nguyen
          </div>
        </div>
        <div className=" w-1/2 shrink-0 p-16 pl-32 flex items-center justify-center ">
          <div className="rounded-full aspect-square bg-[var(--main4)] p-[clamp(1rem,48px,4rem)] w-full shadow-lg/50 flex items-center justify-center">
            <Image
              src={"/food/trung-1.png"}
              alt=""
              width={479}
              height={380}
              className="w-full "
            ></Image>
          </div>
        </div>
      </section>

      <section id="two" className="my-16 lg:my-32">
        <div className="bg-[var(--main2)] text-[var(--main5)] text-center text-[clamp(1rem,1.5vw,2rem)]   p-2 rounded-md">
          <div
            className={`text-[clamp(2rem,2.5vw,3rem)] ${climateCrisis.className} leading-[55px]`}
          >
            Preparation: Cracking the Shell
          </div>
          <div>
            From Childhood passion of a little girl’s dream to paper sketches
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-15">
          {[
            "/desktop-8/1.png",
            "/desktop-8/2.png",
            "/desktop-8/3.png",
            "/desktop-8/4.png",
          ].map((e, i) => (
            <div key={i}>
              <Image src={e} alt="" width={414} height={547}></Image>
            </div>
          ))}
        </div>
        <div className="text-center text-[var(--main5)] bg-[var(--main1)] text-2xl p-6 max-w-2xl mx-auto rounded-lg shadow-lg/20 my-15">
          Translating childhood passion into active creation, moving from
          passive inspiration straight to the drawing board.
        </div>
      </section>

      <section
        id="three"
        className="mt-16 lg:mt-32 relative w-screen left-1/2 -translate-x-1/2 bg-[var(--main5)]"
      >
        <div className="absolute top-0 left-1/2 -translate-1/2">
          <Image
            src={"/desktop-8/5.png"}
            alt=""
            width={573}
            height={573}
          ></Image>
        </div>
        <div className="max-w-7xl mx-auto py-32 pt-48">
          <div className="bg-[var(--main2)] text-[var(--main6)] text-center text-[clamp(1rem,25px,2rem)]   p-2 rounded-md">
            <div
              className={`text-[clamp(2rem,40px,3rem)] ${climateCrisis.className} leading-[55px]`}
            >
              Execution: High Heat & Craftmanship
            </div>
          </div>
          <div className="my-8 max-w-5xl mx-auto">
            <Image
              src={"/desktop-8/6.png"}
              alt=""
              width={1140}
              height={1066.55615234375}
            />
          </div>
          <div className="text-center text-[var(--main6)] bg-[var(--main1)] text-2xl p-6 max-w-2xl mx-auto rounded-lg shadow-lg/20">
            Performing under spotlights = Searing over high heat.
          </div>

          <div className="flex gap-6 py-16">
            {["/desktop-8/7.png", "/desktop-8/8.png", "/desktop-8/9.png"].map(
              (e, i) => {
                return (
                  <div key={i}>
                    <Image
                      className="h-full"
                      src={e}
                      alt=""
                      width={i != 1 ? 433 : 754.069091796875}
                      height={754}
                    ></Image>
                  </div>
                );
              },
            )}
          </div>
          <div className="text-center text-[var(--main6)] bg-[var(--main1)] text-2xl p-6 max-w-2xl mx-auto rounded-lg shadow-lg/20">
            Bringing concepts into real life when directing photoshoots from
            garment and makeup to final visual framing.
          </div>
        </div>
      </section>

      <section
        className="relative bg-[var(--main2)] left-1/2 -translate-x-1/2 w-screen"
        id="four"
      >
        <div className="absolute top-0 left-1/2 -translate-1/2">
          <Image
            src={"/desktop-8/10.png"}
            alt=""
            width={573}
            height={573}
            className="pointer-none"
          ></Image>
        </div>
        <div className="py-16 pt-48 flex justify-center gap-6">
          <JobButton
            href="/desktop-4"
            color="var(--main3)"
            hoverColor="var(--main4)"
            textColor="var(--main5)"
            hoverTextColor="var(--main5)"
            className=" "
            isBack={true}
          >
            Back to ingredient
          </JobButton>
          <JobButton
            href="/desktop-9"
            color="var(--main3)"
            hoverColor="var(--main1)"
            textColor="var(--main5)"
            hoverTextColor="var(--main5)"
            className=" "
          >
            Go to next step!
          </JobButton>
        </div>
      </section>
    </main>
  );
}
