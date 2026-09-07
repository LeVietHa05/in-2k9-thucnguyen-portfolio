import FoodPlateInteractive from "./components/FoodPlateInteractive";
import { JobButton } from "./components/job-button";
import { climateCrisis } from "./font";

export default function Home() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-[var(--main6)]">
      <div className="absolute right-[12%] top-[10%] z-0 h-[27rem] w-[23rem] rotate-[22deg] rounded-[45%_55%_50%_50%] bg-[var(--main4)] opacity-95 max-md:right-[-10%] max-md:top-[39%] max-md:h-[15rem] max-md:w-[19rem]" />
      <div className="absolute bottom-[-28%] right-[-7%] z-0 h-[32rem] w-[52rem] -rotate-[9deg] rounded-[45%_55%_50%_50%] bg-[var(--main5)]" />
      <section className="relative z-[1] mx-auto grid min-h-svh max-w-[1440px] grid-cols-[minmax(320px,0.82fr)_minmax(420px,1.18fr)] items-center gap-[clamp(2rem,5vw,6rem)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(2.5rem,7vw,6rem)] max-md:grid-cols-1 max-md:gap-4 max-md:pt-12">
        <div className="max-w-[480px] max-md:max-w-[580px]">
          <div className={`${climateCrisis.className} capitalize`}>
            <p className="m-0 text-[clamp(2.5rem,50px,4.4rem)]   leading-[0.88]   capitalize text-[var(--main1)] ">
              com Tam
            </p>
            <h1 className="m-0 text-[clamp(3.1rem,50px,6.4rem)]   leading-[0.88]  capitalize text-[var(--main4)]">
              A Resourceful
              <br />
              Necessity
            </h1>
          </div>
          <div className="my-[1.7rem] grid max-w-[560px] gap-4 text-[clamp(0.85rem,25px,1.05rem)] font-bold leading-[1.24]">
            <p>
              The word Com means cooked rice, and Tam refers to the fractured
              grains produced during the milling process. These grains deliver a
              less aesthetically pleasing appearance since Com Tam was
              considered an imperfect product of lower quality compared to
              whole, unbroken grains. 
              However things started to shift during the economic difficulty in
              the Mekong Delta region around the late 18th and early 20th
              centuries, when the only purpose of high-grade whole rice was to
              export overseas. Therefore, Southern farmers came up with a
              solution of using fragmented grain swept off the floors.
            </p>
            <p>It was like discovering a hidden treasure...</p>
            <p>
              Soft and aromatic, it became the go-to meal for long days working
              the land. Out of pure necessity, a simple meal was born; a
              creation that could eventually grow to feed the very heart and
              soul of the place it derives.
            </p>
          </div>
          <JobButton
            href="#jobs"
            color="var(--main1)"
            hoverColor="var(--main3)"
          >
            What&apos;s next?
          </JobButton>
        </div>
        <div className="grid min-w-0 place-items-center max-md:-mt-4">
          <FoodPlateInteractive />
        </div>
      </section>
      <section id="jobs" className="sr-only" aria-label="Jobs" />
    </main>
  );
}
