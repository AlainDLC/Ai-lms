"use client";
import React from "react";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";

interface fieldData {
  fieldValue: string;
  fieldName: string;
}

function page() {
  const onHandleUserSelection = (data: fieldData) => {
    console.log(data);
  };
  return (
    <div className="p-10 md:px-20 lg:px-40">
      <div className="font-extrabold text-[70px] text-primary text-center">
        CREATE YOUR STORY
        <p className="font-medium text-xl text-center">
          Unlock your creativity with AI: Craft stories like never before! Let
          our Ai bring your imagination to life, one story at a time
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
        <StorySubjectInput userSelection={onHandleUserSelection} />
        <StoryType />
      </div>
    </div>
  );
}

export default page;
