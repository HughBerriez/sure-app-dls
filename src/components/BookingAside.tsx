import Link from "next/link";
import React from "react";
import GuestsInput from "./GuestsInput";
import InputContainer from "./InputContainer";
import Button from "./Button";

export default function BookingAside() {
  return (
    <div className="flex flex-col shadow-xl p-4 space-y-6">
      <div className="space-y-2">
        <div className="text-base font-bold">Summary</div>
        <div className="flex flex-row justify-between items-end space-x-2">
          <div className="text-3xl font-bold">$200.00</div>
          <div className="text-neutral-400 text-sm font-medium mb-[2px]">
            per day
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <InputContainer label="Check In">
          <input
            type="date"
            className="border-[1px] rounded border-slate-300 px-5 py-3"
          />
        </InputContainer>
        <InputContainer label="Check out">
          <input
            type="date"
            className="border-[1px] rounded border-slate-300 px-5 py-3"
          />
        </InputContainer>
        <InputContainer label="Guests">
          <GuestsInput />
        </InputContainer>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex flex-row justify-between">
            <div className="text-sm font-normal">Service Fee</div>
            <div className="text-sm font-normal">$30</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-sm font-bold">Total</div>
            <div className="text-sm font-bold">$300</div>
          </div>
        </div>
        {/* separator comonent */}
        <div className="border-b border-slate-300"></div>
        <Button variant="solid">Book now</Button>
      </div>
    </div>
  );
}
