import { Button } from "@/stories/sure-examples/Button";
import Link from "next/link";
import React from "react";

export default function BookingAside() {
  return (
    <div className="flex flex-col shadow-lg h-auto p-4 space-y-6">
      <div>
        <div className="text-base font-bold">Summary</div>
        <div className="flex flex-row justify-between">
          <div className="text-3xl font-bold">$200.00</div>
          <div className="w-12 h-5 text-neutral-400 text-sm font-bold">
            per day
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-bold">Check In</label>
        <input type="date" />
        <label className="text-sm font-bold">Check Out</label>
        <input type="date" />
        <label className="text-sm font-bold">Guests</label>
        <input type="date" />
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex flex-row justify-between">
            <div className="text-sm font-normal">Service Fee</div>
            <div className="text-sm font-normal">$30</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-sm font-bold">Total</div>
            <div className="text-sm font-bold">$300</div>
          </div>
        </div>
        <Link
          href="#"
          className="bg-brand hover:bg-brand-dark active:bg-brand-light text-white font-bold py-2 px-4 rounded"
        >
          Book now
        </Link>
      </div>
    </div>
  );
}
