"use client";

import React from "react";
import Image from "next/image";

import { Button } from "@/stories/Button";

export default function SureAppDlsLandingPage() {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="flex h-screen flex-col items-center justify-center space-y-36">
      <header className="flex flex-col items-center space-y-3">
        <Image
          src="/sure-logo_400x400.jpeg"
          width={70}
          height={70}
          style={{ borderRadius: "50%" }}
          alt="Sure App Logo"
        />
        <h1 className="font-semibold text-xl md:text-3xl">SureApp DLS</h1>
      </header>
      <main className="flex flex-col items-center justify-center space-y-2">
        <div className="space-x-2">
          <Button
            label="Storybook"
            primary
            onClick={() =>
              handleClick(
                "https://659e1a04f5eed59ea7345e35-mlxwvuvkbj.chromatic.com/?path=/docs/configure-your-project--docs"
              )
            }
          />
          <Button
            label="Chromatic"
            primary={false}
            onClick={() =>
              handleClick(
                "https://www.chromatic.com/library?appId=659e1a04f5eed59ea7345e35&inviteToken=chpi_6f14430c7f3b4d01ac1234969700d56f"
              )
            }
          />
        </div>
        <Button
          label="GitHub"
          onClick={() =>
            handleClick("https://github.com/HughBerriez/sure-app-dls")
          }
        />
      </main>
      <footer className="flex flex-col justify-center items-center space-y-3 text-center">
        <p className="font-medium text-sm">
          SureApp Design Technologist 2024 Application
        </p>
        <p className="font-medium text-sm ">
          By{" "}
          <a
            href="https://hb.framer.website"
            target="_blank"
            className="text-blue-700 hover:text-blue-500"
          >
            Hugh Berryman (Portfolio)
          </a>
        </p>
      </footer>
    </section>
  );
}
