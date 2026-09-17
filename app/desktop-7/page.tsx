import Image from "next/image";
import { climateCrisis } from "../font";
import ImageCard from "../components/ImageCard";
import { JobButton } from "../components/job-button";
import DriveVideoCard from "../components/DriveVideoThumb";
import Link from "next/link";

export default function DesktopSeven() {
  return (
    <main className="min-h-svh bg-[var(--main6)] px-6 pt-16 sm:px-0 max-w-7xl mx-auto ">
      <section id="one" className="flex">
        <div className="bg-white p-8 text-[var(--main2)] w-1/2 shadow-lg/50 rounded-xl">
          <div
            className={`${climateCrisis.className} text-[40px] leading-[50px]`}
          >
            <span className="text-[var(--main1)]">Ingredient 3: </span>
            <br />
            <span className="text-[var(--main2)]">
              The Voice & Herritage - Pork Pie
            </span>
          </div>
          <div className="text-2xl">
            Every plate of masterpiece cuisine needs a spark of substance and
            heritage, in which my writing portfolio is my pork pie. This brings
            structure to my raw stories, turning forgotten histories into
            powerful narratives.
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
          <div className="rounded-full aspect-square bg-[var(--main2)] p-[clamp(1rem,48px,4rem)] w-full shadow-lg/50 flex items-center justify-center">
            <Image
              src={"/food/cha-1.png"}
              alt=""
              width={479}
              height={380}
              className="w-full "
            ></Image>
          </div>
        </div>
      </section>

      <section id="two" className="my-16 lg:my-32">
        <div className="bg-[var(--main5)] text-[var(--main1)] text-center text-[clamp(1rem,25px,2rem)]   p-2 rounded-md">
          <div
            className={`text-[clamp(2rem,40px,3rem)] ${climateCrisis.className} leading-[55px]`}
          >
            Preparation: The Essential Blend
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 mt-15">
          <div className="my-8 max-w-5xl mx-auto">
            <Image
              src={"/desktop-7/1.png"}
              alt=""
              width={560}
              height={560}
              className="aspect-square"
            ></Image>
          </div>
          <ContentBox
            text="Unveiling Hidden Narratives by gathering overlooked histories and
            stories about women"
            textcolor="main5"
            bgcolor="main2"
          />
          <div className=" max-w-5xl w-full mx-auto">
            <Image
              src={"/desktop-7/2.png"}
              alt=""
              width={1148.21728515625}
              height={643.65966796875}
              className="w-full"
            ></Image>
          </div>
          <div className=" max-w-5xl w-full mx-auto">
            <Image
              src={"/desktop-7/3.png"}
              alt=""
              width={1148.21728515625}
              height={643.65966796875}
              className="w-full"
            ></Image>
          </div>
          <div className=" max-w-5xl w-full mx-auto">
            <Image
              src={"/desktop-7/4.png"}
              alt=""
              width={1148.21728515625}
              height={643.65966796875}
              className="w-full"
            ></Image>
          </div>
          <ContentBox
            text="Conducting deep research to build comprehensive writing portfolios on remarkable, overlooked women across history"
            textcolor="main5"
            bgcolor="main2"
          />
        </div>
      </section>

      <section
        id="three"
        className="mt-16 lg:mt-32 relative bg-[var(--main2)] text-[var(--main5)] left-1/2 -translate-x-1/2 w-screen"
      >
        <div className="  text-[var(--main5)] text-center text-[clamp(1rem,25px,2rem)]  py-12  p-2 rounded-md">
          <div
            className={`text-[clamp(2rem,40px,3rem)] ${climateCrisis.className} leading-[55px]`}
          >
            Execution: Pressing and Structuring
          </div>
          <div>
            Translating previously conducted research into academic essays.
          </div>
        </div>

        <div className="grid grid-cols-3 justify-center items-center gap-4 max-w-7xl mx-auto pb-48">
          <Essaycard
            width={462.2939147949219}
            height={635.857421875}
            imglink="/desktop-7/5.png"
            text="Female villains beyond the scope of social stereotypes about women"
            textbgcolor="main1"
            textcolor="main5"
            link="https://docs.google.com/document/d/1rJqj5hXcduhMEESnBFArtnzob603jdPM/edit?usp=sharing&ouid=115558093867059200064&rtpof=true&sd=true"
          />
          <Essaycard
            width={462.2939147949219}
            height={635.857421875}
            imglink="/desktop-7/6.png"
            text="Eleanor’s Final Escape: Reality, Belonging, and Hill House"
            textbgcolor="main5"
            textcolor="main1"
            link="https://docs.google.com/document/d/1rJqj5hXcduhMEESnBFArtnzob603jdPM/edit?usp=sharing&ouid=115558093867059200064&rtpof=true&sd=true"
          />
          <Essaycard
            width={462.2939147949219}
            height={635.857421875}
            imglink="/desktop-7/7.png"
            text="Wings behind those windows: Esperanza’s journey to womanhood."
            textbgcolor="main1"
            textcolor="main5"
            link="https://docs.google.com/document/d/1OghoH7z-MZJieN4U0axKRcJ16OcITegV/edit?usp=sharing&ouid=115558093867059200064&rtpof=true&sd=true"
          />
        </div>
      </section>

      <section
        className="relative bg-[var(--main6)] left-1/2 -translate-x-1/2 w-screen"
        id="five "
      >
        <Image
          src={"/food/dia-com-1.png"}
          alt=""
          width={433}
          height={297}
          className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
        ></Image>
        <div className="pt-48">
          <div className="bg-[var(--main5)] text-[var(--main1)] text-center text-[clamp(1rem,25px,2rem)]   p-2 rounded-md max-w-7xl mx-auto">
            <div
              className={`text-[clamp(2rem,40px,3rem)] ${climateCrisis.className} leading-[55px]`}
            >
              The Final Flavor: Heritage & Substance
            </div>
          </div>

          <div className="text-[var(--main1)] mx-auto max-w-5xl text-2xl py-8">
            Giving the empowering voice to &quot;Unveiled Herstory,&quot; where
            I was the founder
            <br /><br />
            Just as pork pie adds density and rich tradition to the plate, this
            podcast elevates women&apos;s perspectives, ensuring unseen
            contributions are given a permanent, powerful voice.
          </div>
        </div>
        <div className="pt-16 flex justify-center gap-6">
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
            href="/desktop-8"
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

const ContentBox = ({
  text,
  textcolor,
  bgcolor,
}: {
  text: string;
  textcolor: string;
  bgcolor: string;
}) => {
  return (
    <div
      style={{
        color: `var(--${textcolor})`,
        backgroundColor: `var(--${bgcolor})`,
      }}
      className="text-center text-2xl p-6 max-w-2xl mx-auto rounded-lg shadow-lg/20 my-15"
    >
      {text}
    </div>
  );
};

const Essaycard = ({
  imglink,
  width,
  height,
  text,
  link,
  textcolor,
  textbgcolor,
}: {
  imglink: string;
  width: number;
  height: number;
  text: string;
  link: string;
  textcolor: string;
  textbgcolor: string;
}) => {
  return (
    <div className="text-center *:my-2">
      <Image
        className="rounded-lg w-full"
        src={imglink}
        alt=""
        width={width}
        height={height}
      ></Image>
      <div className="text-2xl text-[var(--main5)]" style={{}}>
        {text}
      </div>
      <Link
        href={link}
        className="text-xl p-4 rounded-lg inline-block transition-all duration-300 hover:scale-110 hover:shadow-lg/50"
        style={{
          color: `var(--${textcolor})`,
          backgroundColor: `var(--${textbgcolor})`,
        }}
      >
        View Essay
      </Link>
    </div>
  );
};
