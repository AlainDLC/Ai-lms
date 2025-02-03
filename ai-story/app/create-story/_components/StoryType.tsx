import { fieldset } from "framer-motion/client";
import Image from "next/image";
import React, { useState } from "react";
import { OptionField, StoryTypeProps } from "./interface";

function StoryType({ userSelection }: StoryTypeProps) {
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

  const onUserSelect = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({
      fieldValue: item?.label,
      fieldName: "storyType",
    });
  };
  return (
    <div>
      <label className="font-bold text-4xl text-primary  ">2. Story Type</label>
      <div className="grid grid-cols-3 gap-4 mt-5  ">
        {OptionList.map((item, index) => (
          <div
            key={item.label}
            className={`relative grayscale hover:grayscale-0 cursor-pointer  ${
              selecteOption === item.label
                ? "grayscale-0 border-5 rounded-3xl border-blue-300"
                : "grayscale"
            } `}
            onClick={() => onUserSelect(item)}
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
