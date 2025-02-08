"use client";
import React, { useState } from "react";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import { Button } from "@heroui/button";
import { fieldData, formDataType } from "./_components/interface";
import { chatSession } from "@/config/GeminiAi";
import { db } from "@/config/db";
import { StoryData } from "@/config/schema";
import { v4 as uuid4 } from "uuid";

import CustomLoader from "./_components/CustomLoader";
import axios from "axios";
import { useRouter } from "next/navigation";

const CREATE_STORY_PROPMT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;

function CreateStory() {
  const router = useRouter();
  const [formData, setFormData] = useState<formDataType>();
  const [loading, setLoading] = useState(false);

  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
    console.log(formData);
  };

  const GenerateStory = async () => {
    const FINAL_PROPMT = CREATE_STORY_PROPMT?.replace(
      "{ageGroup}",
      formData?.ageGroup ?? ""
    )
      .replace("{storyType}", formData?.storyType ?? "")
      .replace("{storySubject}", formData?.storySubject ?? "")
      .replace("{imageStyle}", formData?.imageStyle ?? "");

    try {
      setLoading(true);

      // Skicka förfrågan till chatSession för att generera berättelsen
      const result = await chatSession.sendMessage(FINAL_PROPMT);
      const responseText = result?.response?.text();

      console.log("Svar från chatSession:", responseText);

      if (responseText) {
        try {
          const story = JSON.parse(responseText);
          console.log("Story data:", story);

          if (story?.chapters && story.chapters.length > 0) {
            // Skapa en bild med API
            const imageResp = await axios.post("/api/generate-image", {
              prompt:
                "Add text with title: " +
                story.chapters[0]?.chapterTitle +
                " in bold text for book cover " +
                story.chapters[0]?.imagePrompt,
            });

            const imageUrl = imageResp?.data?.imageUrl;
            console.log("Bild-API svar:", imageResp?.data);

            let fullImageUrl = null;
            if (imageUrl) {
              fullImageUrl = `${window.location.origin}${imageUrl}`;
              console.log("Fullständig bild-URL:", fullImageUrl);
            } else {
              console.log("Bild-URL saknas.");
            }

            const storyId = uuid4();

            await SaveInDb(storyId, responseText, fullImageUrl);

            router.push(`/view-story/${storyId}`);
          } else {
            console.log("Inga kapitel i den genererade berättelsen.");
          }
        } catch (jsonError) {
          console.error("Fel vid JSON-parsning:", jsonError);
        }
      } else {
        console.log("Inget textinnehåll i svaret från chatSession.");
      }

      setLoading(false);
    } catch (err) {
      console.error("Fel vid generering av berättelse:", err);
      setLoading(false);
    }
  };
  const SaveInDb = async (
    storyId: string,
    output: string,
    coverImage: string | null
  ) => {
    setLoading(true);
    try {
      const result = await db
        .insert(StoryData)
        .values({
          storyId: storyId,
          ageGroup: formData?.ageGroup,
          imageStyle: formData?.imageStyle,
          storySubject: formData?.storySubject,
          storyType: formData?.storyType,
          output: JSON.parse(output),
          coverImage: coverImage,
        })
        .returning({ storyId: StoryData?.storyId });

      setLoading(false);
      return result;
    } catch (err) {
      console.log("Fel vid sparande i databasen:", err);
      setLoading(false);
    }
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
        <Button
          disabled={loading}
          color="primary"
          className="p-10 text-2xl"
          onPress={GenerateStory}
        >
          Generate Story
        </Button>
      </div>

      <CustomLoader isLoading={loading} />
    </div>
  );
}

export default CreateStory;
