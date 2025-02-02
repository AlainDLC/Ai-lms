"use client";
import Image from "next/image";
import React, { useState } from "react";

function StoryType() {
  const OptionList = [
    {
      label: "Story Book",
      ImageUrl: "/storybook.png",
      isFree: true,
    },
    {
      label: "Bed Story",
      ImageUrl: "/pilot.png",
      isFree: true,
    },
    {
      label: "Educational",
      ImageUrl: "/ed.png",
      isFree: true,
    },
  ];

  const [selecteOption, setSelectedOption] = useState<string>();
  return (
    <div>
      <label className="font-bold text-4xl text-primary  ">2. Story Type</label>
      <div className="grid grid-cols-3 gap-4 mt-5  ">
        {OptionList.map((item, index) => (
          <div
            className={`relative grayscale hover:grayscale-0 cursor-pointer  ${
              selecteOption === item.label
                ? "grayscale-0 border-5 rounded-3xl border-blue-300"
                : "grayscale"
            } `}
            onClick={() => setSelectedOption(item.label)}
          >
            <h2 className="absolute bottom-6 text-center w-full text-primary-50 text-2xl ">
              {item.label}
            </h2>
            <Image
              src={item.ImageUrl}
              alt={item.label}
              width={300}
              height={500}
              className="object-cover h-full rounded-3xl "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryType;
