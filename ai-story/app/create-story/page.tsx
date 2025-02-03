"use client";
import React, { useState } from "react";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import { Button } from "@heroui/button";
import { fieldData, formDataType } from "./_components/interface";

function CreateStory() {
  const [formData, setFormData] = useState<formDataType>();

  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
    console.log(formData);
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
        <StoryType userSelection={onHandleUserSelection} />
        <AgeGroup userSelection={onHandleUserSelection} />
        <ImageStyle userSelection={onHandleUserSelection} />
      </div>
      <div className="flex justify-end my-10">
        <Button color="primary" className="p-10 text-2xl">
          Generate Story
        </Button>
      </div>
    </div>
  );
}

export default CreateStory;
