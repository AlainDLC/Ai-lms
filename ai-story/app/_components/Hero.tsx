import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="px-10 md:px-28 lg:px-44 mt-10 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 md:gap-x-20">
        <div className="">
          <h2 className="text-[70px] text-primary font-extrabold">
            Craft Magical Stories for kids in Minutes
          </h2>
          <p className="text-2xl text-primary font-light">
            Create fun and personalised stories that bring your child's
            adventures to life 🐦‍🔥
          </p>
          <Link href={"/create-story"}>
            <Button size="lg" color="primary" className="mt-5">
              Create story
            </Button>
          </Link>
        </div>
        <div>
          <Image src={"/story.png"} alt="story" height={400} width={700} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
