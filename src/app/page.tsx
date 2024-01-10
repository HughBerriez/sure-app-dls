"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/stories/Button";

export default function SureAppDlsLandingPage() {
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
      <main>
        <Button label="View SureApp's Storybook" primary />
      </main>
      <footer className="flex flex-col justify-center items-center space-y-3 text-center">
        <p className="font-medium text-sm">
          SureApp Design Technologist 2024 Application
        </p>
        <p className="font-medium text-sm ">
          By{" "}
          <a
            href="https://hb.framer.website"
            className="text-blue-700 hover:text-blue-500"
          >
            Hugh Berryman (Portfolio)
          </a>
        </p>
      </footer>
    </section>
  );
}
