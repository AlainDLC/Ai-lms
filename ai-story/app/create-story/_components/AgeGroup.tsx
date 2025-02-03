import Image from "next/image";
import React, { useState } from "react";

function AgeGroup() {
  const OptionList = [
    {
      label: "0-2 Years",
      ImageUrl: "/twoyears.png",
      isFree: true,
    },
    {
      label: "3-5 Years",
      ImageUrl: "/fiwe.png",
      isFree: true,
    },
    {
      label: "5-8 Years",
      ImageUrl: "/eight.png",
      isFree: true,
    },
  ];

  const [selecteOption, setSelectedOption] = useState<string>();
  return (
    <div>
      <label className="font-bold text-4xl text-primary  ">3. Age Group</label>
      <div className="grid grid-cols-3 gap-4 mt-5 ">
        {OptionList.map((item, index) => (
          <div
            key={item.label}
            className={`relative grayscale hover:grayscale-0 cursor-pointer p-3  ${
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
              width={200}
              height={300}
              className="object-cover h-[200px] rounded-3xl gap-2 "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgeGroup;
