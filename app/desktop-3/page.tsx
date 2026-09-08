"use client";

import { JobButton } from "../components/job-button";
import { climateCrisis } from "../font";
import Image from "next/image";
import { useState } from "react";
import ButtonFoldable from "../components/ButtonFoldable";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="relative  h-svh overflow-hidden bg-[var(--main6)] flex gap-4">
      <div className="relative max-w-1/2">
        <div className="absolute top-0 left-0">
          <Image
            src={"/desktop-3/1.png"}
            width={949.43310546875}
            height={917.0413208007812}
            alt=""
          ></Image>
        </div>
        <div className=" ">
          <Image
            src={"/desktop-3/2.png"}
            width={949.43310546875}
            height={917.0413208007812}
            alt=""
          ></Image>
        </div>
        <div className="absolute top-[10%] left-[10%] bg-[var(--main5)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[16px] p-[clamp(0.25rem,24px,2rem)] max-w-md w-1/2">
          <div
            className={`${climateCrisis.className} text-[var(--main1)] text-[clamp(2rem,36px,4rem)] leading-[1.2]`}
          >
            Hi! This is Nguyen
          </div>
          <div className="pt-4">
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src={"/icon/person.png"}
                  alt=""
                  width={36}
                  height={36}
                  className="size-9"
                ></Image>
              </div>
              <div className="text-[clamp(1.5rem,24px,2.3rem)] ">
                Vo Phan Thuc Nguyen
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src={"/icon/cake.png"}
                  alt=""
                  width={36}
                  height={36}
                  className="size-9"
                ></Image>
              </div>
              <div className="text-[clamp(1.5rem,24px,2.3rem)] ">June 4</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src={"/icon/coin.png"}
                  alt=""
                  width={36}
                  height={36}
                  className="size-9"
                ></Image>
              </div>
              <div className="text-[clamp(1.5rem,24px,2.3rem)] ">Gemini</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src={"/icon/hat.png"}
                  alt=""
                  width={36}
                  height={36}
                  className="size-9"
                ></Image>
              </div>
              <div className="text-[clamp(1.5rem,24px,2.3rem)] ">
                Miss Hall&apos;s School
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-1/2 flex flex-col justify-evenly">
        <div
          className={`${climateCrisis.className} text-[clamp(2rem,40px,3rem)] text-[var(--main2)] leading-[1.2]`}
        >
          Your first step is to choose{" "}
          <span className=" text-[var(--main4)]">fish sauce</span> or{" "}
          <span className=" text-[var(--main4)]">side dish,..</span> or maybe{" "}
          <span className=" text-[var(--main4)]"> both</span>
        </div>

        <div className="grid grid-cols-2 gap-4 ">
          <div className="">
            <div className="relative  ">
              <Image
                className="-rotate-10 relative z-1"
                src={"/food/nuocmam-1.png"}
                alt=" "
                width={344.39133404156513}
                height={254.93901590354906}
              ></Image>
              <Image src={"/desktop-3/3.png"} fill alt=""></Image>
            </div>
          </div>
          <div className="">
            <div className="relative  ">
              <Image
                className="-rotate-10 relative z-1 left-15"
                src={"/food/duachuot-2.png"}
                alt=" "
                width={220.64871148263126}
                height={175.7711786610508}
              ></Image>
              <Image
                className="-rotate-10 absolute z-1 top-10 left-0 rotate-20 "
                src={"/food/carot-1.png"}
                alt=" "
                width={220.64871148263126}
                height={175.7711786610508}
              ></Image>
              <Image
                className="-rotate-10 absolute z-1 top-35 left-18 rotate-5"
                src={"/food/rau-cu-1.png"}
                alt=" "
                width={220.64871148263126}
                height={175.7711786610508}
              ></Image>
              <Image src={"/desktop-3/4.png"} fill alt=""></Image>
            </div>
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
          <ButtonFoldable
            title="Extra toppings"
            texts={[
              "Used to be a voice actress for advertisements",
              "Participated in a Netflix series",
            ]}
          />
        </div>

        <div className=" ">
          <JobButton
            href="/desktop-4"
            color="var(--main3)"
            hoverColor="var(--main1)"
            className=" "
          >
            Let’s get on to main ingredients
          </JobButton>
        </div>
      </div>
    </main>
  );
}
