import Image from "next/image";
import { climateCrisis } from "../font";
import ImageCard from "../components/ImageCard";
import { JobButton } from "../components/job-button";

const results = [
  {
    imgs: ["/desktop-5/re-1.png", "/desktop-5/re-2.png"],
    title:
      "Negotiated sponsorship with TOTO Corporation Vietnam to secure project funding.",
    textcolor: "main5",
    textbgcolor: "main1",
  },
  {
    imgs: ["/desktop-5/re-3.png", "/desktop-5/re-4.png", "/desktop-5/re-5.png"],
    title: "Partnered with media outlets to broadcast project outcomes.",
    textcolor: "main5",
    textbgcolor: "main2",
  },
  {
    imgs: ["/desktop-5/re-6.png", "/desktop-5/re-7.png", "/desktop-5/re-8.png"],
    title:
      "Led nationwide seasonal campaigns, planting 120+ trees annually across multiple forest sites.",
    textcolor: "main5",
    textbgcolor: "main1",
  },
  {
    imgs: ["/desktop-5/re-9.png"],
    title:
      "Actively seeking more high-level economic research and competitions.",
    textcolor: "main5",
    textbgcolor: "main2",
  },
];

export default function DesktopFive() {
  return (
    <main className="min-h-svh bg-[var(--main6)] px-6 py-16 sm:px-0 max-w-7xl mx-auto ">
      <section id="one" className="flex">
        <div className="bg-white p-8 text-[var(--main2)] w-1/2 shadow-lg/50 rounded-xl">
          <div
            className={`${climateCrisis.className} text-[50px] leading-[55px]`}
          >
            <span className="text-[var(--main1)]">Ingredient 1: </span>
            <br />
            <span className="">
              The base - <br /> Broken Rice
            </span>
          </div>
          <div className="text-[25px]">
            Just as Com Tam was born from broken rice, my approach to Economics
            centers on maximizing value from scattered pieces.
          </div>
          <div className="flex min-h-[320px] border-b-3 border-dashed">
            <div className="flex items-end">
              <Image
                src={"/desktop-5/1.png"}
                alt=""
                width={188}
                height={285}
                className=" "
              ></Image>
            </div>
            <div className="flex items-start">
              <Image
                src={"/desktop-5/2.png"}
                alt=""
                width={223}
                height={236}
              ></Image>{" "}
            </div>
            <div className="flex items-end">
              <Image
                src={"/desktop-5/3.png"}
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
          <div className="rounded-full aspect-square bg-[var(--main2)] p-[clamp(1rem,48px,4rem)] w-full shadow-lg/50 flex items-center justify-center">
            <Image
              src={"/food/com-1.png"}
              alt=""
              width={479}
              height={380}
              className="w-full "
            ></Image>
          </div>
        </div>
      </section>

      <section id="two" className="my-16 lg:my-32">
        <div className="bg-[var(--main5)] text-[var(--main1)] text-center text-[clamp(1rem,25px,2rem)] leading-[25px] p-2 rounded-md">
          <div
            className={`text-[clamp(2rem,40px,3rem)] ${climateCrisis.className} leading-[55px]`}
          >
            Preparation: The Harvest
          </div>
          <div>
            Broken rice grains begin as fractured, overlooked pieces, but rich
            in raw potential.
          </div>
        </div>
        <div className="flex justify-end relative max-w-6xl">
          <div className="bg-[#4A6A3F] text-[var(--main5)] rounded-xl h-fit max-w-lg px-8 py-6 text-[25px] leading-[28px] absolute top-20 left-20 shadow-lg/40">
            <p className="mb-4">
              Starting as a high school student in Vietnam, taking on the
              initial role of Head of Media for a student-led environmental
              initiative.
            </p>
            <p>Willing to learn and build value from humble beginnings.</p>
          </div>
          <div>
            <Image
              src={"/desktop-5/4.png"}
              alt=""
              width={638}
              height={769}
            ></Image>
          </div>
        </div>
      </section>

      <section id="three">
        <div className="bg-[var(--main5)] text-[var(--main1)] text-center text-[clamp(1rem,25px,2rem)] leading-[25px] p-2 rounded-md">
          <div
            className={`text-[clamp(2rem,40px,3rem)] ${climateCrisis.className} leading-[55px]`}
          >
            Execution: The Steady Steam
          </div>
        </div>

        <div className="relative mx-auto mt-8  min-h-[1400px] w-full  px-4 py-8 sm:px-8 lg:px-0">
          <Image
            src="/desktop-5/road.svg"
            alt=""
            width={926}
            height={1062}
            priority
            className="pointer-events-none z-0 w-70/100   left-1/2 -translate-x-1/2 absolute top-2/10"
          />

          <div className="text-[40px] z-2 absolute top-0/10 left-0 max-w-xl">
            A three-year journey during which I took on various roles within an
            organization…
          </div>

          <div className="absolute right-[6%] top-0 w-[42%]">
            <Image
              src="/desktop-5/gr-1.png"
              alt="Head of Media"
              width={703}
              height={646}
              className="h-auto w-full object-contain"
            />
            <div className="absolute bottom-0 left-[-12%] rounded-lg bg-[var(--main1)] px-5 py-3 text-center text-[clamp(1.1rem,3vw,2.5rem)] leading-[0.95] text-[var(--main5)] shadow-lg sm:px-8 sm:py-4">
              <span className={climateCrisis.className}>Head of Media</span>
            </div>
          </div>

          <div className="absolute left-0 top-4/10 w-[30%]">
            <Image
              src="/desktop-5/gr-2-1.png"
              alt=""
              width={513}
              height={647}
              className="absolute -left-20/100 -bottom-10/100 z-10 h-full w-full object-contain"
            />
            <Image
              src="/desktop-5/gr-2-2.png"
              alt="Secretary"
              width={517}
              height={518}
              className="relative z-1 h-auto w-full object-contain"
            />
            <div className="absolute bottom-0 left-0 z-20 rounded-lg bg-[var(--main1)] px-6 py-3 text-center text-[clamp(1.1rem,3.5vw,2.5rem)] leading-none text-[var(--main5)] shadow-lg sm:px-8">
              <span className={climateCrisis.className}>Secretary</span>
            </div>
          </div>

          <div className="absolute -bottom-0/100 right-[1%] w-[45%]">
            <Image
              src="/desktop-5/gr-3-1.png"
              alt=""
              width={600}
              height={600}
              className="absolute inset-0 z-10 h-full w-full object-contain"
            />
            <Image
              src="/desktop-5/gr-3-2.png"
              alt="Vice President"
              width={600}
              height={600}
              className="relative z-1 h-auto w-full object-contain"
            />
            <div className="absolute left-  top-[35%] z-20 rounded-lg bg-[var(--main1)] px-5 py-3 text-center text-[clamp(1rem,3.5vw,2.4rem)] leading-none text-[var(--main5)] shadow-lg sm:px-8">
              <span className={climateCrisis.className}>
                Vice <br />
                President
              </span>
            </div>

            <div className="absolute text-[var(--main1)] text-2xl text-center max-w-md bg-[var(--main5)] py-4 px-2 rounded-lg shadow-lg/20 bottom-0 z-11 right-0">
              Handled legal permissions and logistics for the event.
            </div>
          </div>
        </div>
      </section>

      <section
        id="four"
        className="mt-16 lg:mt-32 py-16 pb-32 relative w-screen -translate-x-1/2 left-1/2 bg-[var(--main4)]"
      >
        <div className="max-w-7xl mx-auto bg-[var(--main5)] text-[var(--main1)] text-center text-[clamp(1rem,25px,2rem)] leading-[25px] p-2 rounded-md mb-12">
          <div
            className={`text-[clamp(2rem,40px,3rem)] ${climateCrisis.className} leading-[55px]`}
          >
            Results
          </div>
        </div>

        <div className="grid grid-cols-2 mx-auto max-w-6xl gap-6">
          {results.map((each, i) => {
            return (
              <ImageCard
                key={i}
                imgs={each.imgs}
                textbgcolor={each.textbgcolor}
                title={each.title}
                textcolor={each.textcolor}
              />
            );
          })}
        </div>
        <div className="mx-auto max-w-5xl flex justify-end">
          <JobButton
            href="https://drive.google.com/file/d/1BVTN674bJiBBavc0hkx0pmOUEJimIgoT/view?usp=sharing"
            color="var(--main1)"
            hoverColor="var(--main2)"
            className=" "
          >
            View my research
          </JobButton>
        </div>
      </section>

      <section className="relative" id="six">
        <Image
          src={"/food/dia-com-1.png"}
          alt=""
          width={433}
          height={297}
          className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
        ></Image>
        <div className="pt-48 flex justify-center gap-6">
          <JobButton
            href="/desktop-4"
            color="var(--main2)"
            hoverColor="var(--main1)"
            className=" "
            isBack={true}
          >
            Back to ingredient
          </JobButton>
          <JobButton
            href="/desktop-6"
            color="var(--main2)"
            hoverColor="var(--main1)"
            className=" "
          >
            Go to next step!
          </JobButton>
        </div>
      </section>
    </main>
  );
}
