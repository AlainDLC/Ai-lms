import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className=" md:px-28 lg:px-44 mt-32 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="">
          <h2 className="text-[70px] text-primary font-extrabold">
            Craft Magical Stories for kids in Minutes
          </h2>
          <p className="text-2xl text-primary font-light">
            Create fun and personalised stories that bring your child's
            adventures to life and spark their passion for reading. It only
            takes a few seconds!🐦‍🔥
          </p>
          <Link href={"/create-story"}>
            <Button size="lg" color="primary" className="mt-5">
              Create story
            </Button>
          </Link>
        </div>
        <div className="p-1">
          <Image src={"/story.png"} alt="story" height={200} width={500} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
