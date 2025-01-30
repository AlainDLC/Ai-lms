import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Image
          src="/magic.png"
          alt="magi"
          height={700}
          width={1000}
          className="w-full h-full object-contain"
          quality={100}
        />
      </div>
      <div className="flex justify-center items-center h-screen order-first md:order-last">
        <SignIn />
      </div>
    </div>
  );
}
