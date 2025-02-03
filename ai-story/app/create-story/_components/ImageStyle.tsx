import Image from "next/image";
import React, { useState } from "react";
import { OptionField, StoryTypeProps } from "./interface";

function ImageStyle({ userSelection }: StoryTypeProps) {
  const OptionList = [
    {
      label: "3D Carton",
      ImageUrl: "/treed.png",
      isFree: true,
    },
    {
      label: "Paper Cut",
      ImageUrl: "/papper.png",
      isFree: true,
    },
    {
      label: "Wather Color",
      ImageUrl: "/water.png",
      isFree: true,
    },
    {
      label: "Pixel Style",
      ImageUrl: "/pixel.png",
      isFree: true,
    },
  ];

  const onUserSelect = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({
      fieldValue: item?.label,
      fieldName: "imageStyle",
    });
  };

  const [selecteOption, setSelectedOption] = useState<string>();
  return (
    <div>
      <label className="font-bold text-4xl text-primary  ">
        4. Image Style
      </label>
      <div className="grid grid-cols-3 gap-4 mt-5 ">
        {OptionList.map((item, index) => (
          <div
            key={item.label}
            className={`relative grayscale hover:grayscale-0 cursor-pointer p-3  ${
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
              width={200}
              height={300}
              className="object-cover h-[120px] rounded-3xl gap-2 "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageStyle;
