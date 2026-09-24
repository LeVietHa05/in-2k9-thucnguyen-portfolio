import Image from "next/image";
import { climateCrisis } from "../font";
import ImageCard from "../components/ImageCard";
import { JobButton } from "../components/job-button";
import DriveVideoCard from "../components/DriveVideoThumb";

export default function DesktopSix() {
  return (
    <main className="mx-auto min-h-svh w-full max-w-[1920px] bg-[var(--main6)] px-6 pt-16 sm:px-10 lg:px-16">
      <section id="one" className="flex">
        <div className="bg-white p-8 text-[var(--main2)] w-1/2 shadow-lg/50 rounded-xl">
          <div
            className={`${climateCrisis.className} text-[40px] leading-[50px]`}
          >
            <span className="text-[var(--main1)]">Ingredient 2: </span>
            <br />
            <span className="text-[var(--main4)]">
              The Centerpiece - Grill Pork Chop
            </span>
          </div>
          <div className="text-2xl">
            During the process of learning the recipe of who I am, I realized
            that every memorable dish needs a bold, high-energy core. For me,
            It’s SUON NUONG aka GRILL PORK CHOP. Just as a master chef marinates
            and sears a pork chop over open charcoal flames, my experience in
            Dance taught me how to turn pressure into art.
          </div>
          <div className="flex justify-around min-h-[220px] border-b-3 border-dashed">
            <div className="flex items-end">
              <Image
                src={"/desktop-6/1.png"}
                alt=""
                width={188}
                height={285}
                className=" "
              ></Image>
            </div>
            <div className="flex items-start">
              <Image
                src={"/desktop-6/2.png"}
                alt=""
                width={223}
                height={236}
              ></Image>{" "}
            </div>
          </div>
          <div className={`${climateCrisis.className} pt-6`}>
            Portoflio | Chef Vo Nguyen Thuc Nguyen
          </div>
        </div>
        <div className=" w-1/2 shrink-0 p-16 pl-32 flex items-center justify-center ">
          <div className="rounded-full aspect-square bg-[var(--main4)] p-[clamp(1rem,48px,4rem)] w-full shadow-lg/50 flex items-center justify-center">
            <Image
              src={"/food/suon-1.png"}
              alt=""
              width={479}
              height={380}
              className="w-full "
            ></Image>
          </div>
        </div>
      </section>

      <section id="two" className="my-16 lg:my-32">
        <div className="bg-[var(--main2)] text-[var(--main5)] text-center text-[clamp(1rem,25px,2rem)]   p-2 rounded-md">
          <div
            className={`text-[clamp(2rem,40px,3rem)] ${climateCrisis.className} leading-[55px]`}
          >
            Preparation: The Marinade
          </div>
          <div>Letting flavor soaked in deep</div>
        </div>

        <div className="flex justify-center gap-6 mt-15">
          <ImageCard
            imgs={["/desktop-6/3.png"]}
            textbgcolor="main5"
            textcolor="main1"
            title="10 Hours/Week practicing hardly in the dance studio"
          />
          <ImageCard
            imgs={["/desktop-6/4.png"]}
            textbgcolor="main5"
            textcolor="main1"
            title="Building discipline, muscle memory, and flexibility."
          />
        </div>
      </section>

      <section id="three" className="my-16 lg:my-32">
        <div className="bg-[var(--main2)] text-[var(--main5)] text-center text-[clamp(1rem,25px,2rem)]   p-2 rounded-md">
          <div
            className={`text-[clamp(2rem,40px,3rem)] ${climateCrisis.className} leading-[55px]`}
          >
            Execution: The Charcoal Fire
          </div>
        </div>
        <div className="my-8 max-w-5xl mx-auto">
          <DriveVideoCard fileId="1oVpMIq6x6cpAaBk51XS0vPMoPidDun_a" />
        </div>
        <div className="text-center text-[var(--main1)] bg-[var(--main5)] text-2xl p-6 max-w-2xl mx-auto rounded-lg shadow-lg/20">
          Performing under spotlights = Searing over high heat.
        </div>
      </section>

      <section
        id="four"
        className="w-screen relative left-1/2 -translate-x-1/2"
      >
        <div id="three-point-five" className="flex ">
          <Image
            src={"/desktop-6/6.png"}
            alt=""
            width={1920}
            height={1280}
            className="w-full h-auto"
          ></Image>
          <Image
            src={"/desktop-6/7.png"}
            alt=""
            width={1920}
            height={1280}
            className="w-full h-auto"
          ></Image>
        </div>
        <Image
          src={"/desktop-6/5.png"}
          alt=""
          width={1920}
          height={1280}
          className="w-full h-auto"
        ></Image>
        <div className="text-center text-[var(--main1)] bg-[var(--main5)] text-2xl p-6 max-w-2xl mx-auto rounded-lg shadow-lg/20 my-15">
          Learning how to stay calm under pressure and channel energy into
          sharp, expressive movement.
        </div>
      </section>

      <section
        className="relative bg-[var(--main1)] left-1/2 -translate-x-1/2 w-screen"
        id="five "
      >
        <div className="py-16 flex justify-center gap-6">
          <JobButton
            href="/desktop-4"
            color="var(--main2)"
            hoverColor="var(--main4)"
            textColor="var(--main5)"
            hoverTextColor="var(--main5)"
            className=" "
            isBack={true}
          >
            Back to ingredient
          </JobButton>
          <JobButton
            href="/desktop-7"
            color="var(--main2)"
            hoverColor="var(--main4)"
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
