import { ClerkProvider } from "@clerk/nextjs";
import { HeroUIProvider } from "@heroui/react";
import React from "react";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <HeroUIProvider>{children}</HeroUIProvider>
    </ClerkProvider>
  );
}

export default Provider;
