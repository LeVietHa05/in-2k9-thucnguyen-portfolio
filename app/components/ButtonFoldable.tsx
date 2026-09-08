"use client";
import { climateCrisis } from "../font";
import { useState } from "react";

export default function ButtonFoldable({
  title,
  texts,
  textColor = "main1",
  bgColor = "main1",
  hoverTC = "main5",
  hoverBC = "main1",
}: {
  title: string;
  texts: string[];
  textColor?: string;
  bgColor?: string;
  hoverTC?: string;
  hoverBC?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <button
          onClick={() => toggleOpen()}
          className={`${climateCrisis.className} text-3xl text-center w-full text-[var(--${textColor})]  transition-all duration-300 hover:bg-[var(--${hoverBC})] hover:text-[var(--${hoverTC})]
          ${isOpen ? `rounded-t-xl bg-[var(--${textColor})] text-[var(--${hoverTC})]` : `rounded-xl bg-[var(--${hoverTC})]`} 
                    `}
        >
          {title}
        </button>
        <div
          onClick={() => toggleOpen()}
          className={`grid transition-all duration-500 ease-in-out overflow-hidden cursor-pointer
                         ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} `}
        >
          <div
            className={`min-h-0  bg-[var(--${bgColor})] text-[var(--${hoverTC})] px-6 rounded-b-xl  shadow-md`}
          >
            <ul className="list-disc list-inside space-y-2 text-lg pl-2 pt-2 pb-4 leading-[1]">
              {texts.map((e) => {
                return <li key={e}>{e}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
