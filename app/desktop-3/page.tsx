"use client";

import { JobButton } from "../components/job-button";
import { climateCrisis } from "../font";
import Image from "next/image";
import ButtonFoldable from "../components/ButtonFoldable";

export default function Home() {
  return (
    <main className="relative min-h-svh overflow-x-hidden bg-[var(--main6)]">
      <div className="mx-auto grid min-h-svh w-full max-w-[1920px] grid-cols-1 gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10 lg:px-0 lg:py-10">
        <section className="relative flex min-h-[520px] items-center justify-center lg:min-h-0">
          <div className="absolute inset-0">
            <Image
              src={"/desktop-3/1.png"}
              width={1351}
              height={1321}
              alt=""
              className="h-full w-full object-contain object-center absolute bottom-0 left-0 z-3"
            ></Image>
            <Image
              src={"/desktop-3/2.png"}
              width={1351}
              height={1321}
              alt=""
              className="h-full w-full object-contain absolute bottom-0 right-0"
            ></Image>
          </div>
          <div className="relative aspect-[949/917] w-full max-w-[760px] z-2">
            <div className="absolute left-0 top-0 w-[min(88%,420px)] rounded-[16px] bg-[var(--main5)] p-[clamp(1rem,2.5vw,2rem)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]  ">
              <div
                className={`${climateCrisis.className} text-[45px] leading-[1.1] text-[var(--main1)]`}
              >
                Hi! This is Nguyen
              </div>
              <div className="space-y-2 pt-4 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div>
                    <Image
                      src={"/icon/person.png"}
                      alt=""
                      width={36}
                      height={36}
                      className="size-6 sm:size-9"
                    ></Image>
                  </div>
                  <div className="text-[clamp(0.95rem,2vw,1.5rem)]">
                    Vo Phan Thuc Nguyen
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                  <div>
                    <Image
                      src={"/icon/cake.png"}
                      alt=""
                      width={36}
                      height={36}
                      className="size-6 sm:size-9"
                    ></Image>
                  </div>
                  <div className="text-[clamp(0.95rem,2vw,1.5rem)]">June 4</div>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                  <div>
                    <Image
                      src={"/icon/coin.png"}
                      alt=""
                      width={36}
                      height={36}
                      className="size-6 sm:size-9"
                    ></Image>
                  </div>
                  <div className="text-[clamp(0.95rem,2vw,1.5rem)]">Gemini</div>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                  <div>
                    <Image
                      src={"/icon/hat.png"}
                      alt=""
                      width={36}
                      height={36}
                      className="size-6 sm:size-9"
                    ></Image>
                  </div>
                  <div className="text-[clamp(0.95rem,2vw,1.5rem)]">
                    Miss Hall&apos;s School
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center gap-8 py-4 lg:gap-10 lg:py-8">
          <div
            className={`${climateCrisis.className} text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-[var(--main2)]`}
          >
            Your first step is to choose{" "}
            <span className=" text-[var(--main4)]">fish sauce</span> or{" "}
            <span className=" text-[var(--main4)]">side dish,..</span> or maybe{" "}
            <span className=" text-[var(--main4)]"> both</span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4">
            <div className="flex flex-col gap-3">
              <div className="relative aspect-[344/255]">
                <Image
                  className="relative z-1 h-full w-full -rotate-10 object-contain"
                  src={"/food/nuocmam-1.png"}
                  alt=" "
                  width={344.39133404156513}
                  height={254.93901590354906}
                ></Image>
                <Image
                  src={"/desktop-3/3.png"}
                  fill
                  alt=""
                  className="object-contain"
                ></Image>
              </div>
              <ButtonFoldable
                texts={[
                  "Dancing",
                  "Sketch and sew random piece of clothing",
                  "Knitting while Watching series of dramas",
                  "Reading",
                ]}
                title="Fish sauce"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative aspect-[344/255]">
                <Image
                  className="relative left-[12%] z-1 h-auto w-[64%] -rotate-10 object-contain"
                  src={"/food/duachuot-2.png"}
                  alt=" "
                  width={220.64871148263126}
                  height={175.7711786610508}
                ></Image>
                <Image
                  className="absolute left-0 top-[14%] z-1 h-auto w-[64%] rotate-20 object-contain"
                  src={"/food/carot-1.png"}
                  alt=" "
                  width={220.64871148263126}
                  height={175.7711786610508}
                ></Image>
                <Image
                  className="absolute left-[18%] top-[48%] z-1 h-auto w-[64%] rotate-5 object-contain"
                  src={"/food/rau-cu-1.png"}
                  alt=" "
                  width={220.64871148263126}
                  height={175.7711786610508}
                ></Image>
                <Image
                  src={"/desktop-3/4.png"}
                  fill
                  alt=""
                  className="object-contain"
                ></Image>
              </div>
              <ButtonFoldable
                title="Extra toppings"
                texts={[
                  "Used to be a voice actress for advertisements",
                  "Participated in a Netflix series",
                ]}
              />
            </div>
          </div>

          <div>
            <JobButton
              href="/desktop-4"
              color="var(--main3)"
              hoverColor="var(--main1)"
              className=" "
            >
              Let’s get on to main ingredients
            </JobButton>
          </div>
        </section>
      </div>
    </main>
  );
}
