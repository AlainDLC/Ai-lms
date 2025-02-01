import Image from "next/image";
import React from "react";

// lägg in bilder
function StoryType() {
  const OptionList = [
    {
      label: "Story Book",
      ImageUrl: "",
      isFree: true,
    },
    {
      label: "Bed Story",
      ImageUrl: "",
      isFree: true,
    },
    {
      label: "Educational",
      ImageUrl: "",
      isFree: true,
    },
  ];
  return (
    <div>
      <label className="font-bold text-4xl text-primary">2. Story Type</label>
      <div>
        {OptionList.map((item, index) => (
          <div>
            <Image
              src={item.ImageUrl}
              alt={item.label}
              width={300}
              height={500}
              className="object-cover h-[260px] rounded-3xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryType;
