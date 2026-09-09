"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { climateCrisis } from "../font";
import Image from "next/image";

type JobButtonProps = {
  href: string;
  children?: ReactNode;
  color?: string;
  hoverColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  className?: string;
  target?: "_self" | "_blank";
  onClick?: () => void;
  isBack?: boolean;
};

export function JobButton({
  href,
  children = "View job",
  color = "var(--main1)",
  hoverColor = "var(--main2)",
  textColor = "var(--main5)",
  hoverTextColor = "var(--main4)",
  className = "",
  target,
  isBack = false,
  onClick,
}: JobButtonProps) {
  const style = {
    "--job-button-color": color,
    "--job-button-hover-color": hoverColor,
    "--job-button-text-color": textColor,
    "--job-button-hover-text-color": hoverTextColor,
  } as CSSProperties;

  return (
    <Link
      href={href}
      target={target}
      onClick={(event) => {
        if (onClick) {
          event.preventDefault();
          onClick();
        }
      }}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`group job-button ${className} rounded-full   ${climateCrisis.className}`}
      style={style}
    >
      {isBack && (
        <>
          <Image
            src={"/arrow-right-1.svg"}
            alt=""
            width={36}
            height={26}
            className="group-hover:hidden"
          ></Image>
          <Image
            src={"/arrow-right-2.svg"}
            alt=""
            width={36}
            height={26}
            className="group-hover:block hidden"
          ></Image>
        </>
      )}
      <span className="job-button__label">{children}</span>
      {!isBack && (
        <>
          <Image
            src={"/arrow-left-1.svg"}
            alt=""
            width={36}
            height={26}
            className="group-hover:hidden"
          ></Image>
          <Image
            src={"/arrow-left-2.svg"}
            alt=""
            width={36}
            height={26}
            className="group-hover:block hidden"
          ></Image>
        </>
      )}
    </Link>
  );
}
