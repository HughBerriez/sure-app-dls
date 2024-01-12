import Image from "next/image";
import React from "react";
import Ratings from "./Ratings";

export default function HeroListing() {
  return (
    <div className="space-y-7">
      <div className="flex flex-row justify-between items-end">
        <div>
          <div className="text-3xl font-semibold">Private Penthouse</div>
          <Ratings numReviews={200} rating={4} />
        </div>
        <div className="flex flex-row items-center space-x-2">
          <Image
            src={"/map-pin-outline.svg"}
            alt="map-pin-outline.svg"
            width={16}
            height={16}
          />
          <div className="text-sm font-medium">
            Beverly Hills, California, United States
          </div>
        </div>
      </div>
      <Image
        src={"/penthouse.jpeg"}
        alt="Penthouse listing"
        width={600}
        height={400}
      />

      <div className="space-y-4">
        <div className="text-2xl font-semibold">Description</div>
        <div className="w-96 text-black text-base font-normal leading-normal">
          Elevate your lifestyle with this stunning penthouse in the heart of
          Beverly Hills. Offering awe-inspiring panoramic views, a spacious open
          layout, a gourmet kitchen, and a private terrace, this penthouse is
          the epitome of luxury living. Imagine waking up to the iconic Beverly
          Hills skyline, enjoying al fresco dining on your private terrace, and
          having world-class amenities at your fingertips. Don&apos;t miss the
          chance to experience Beverly Hills in the most glamorous way possible.
          Contact us today and make this penthouse your new home.
        </div>
      </div>
    </div>
  );
}
