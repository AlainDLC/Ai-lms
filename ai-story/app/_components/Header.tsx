"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@heroui/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const MenyList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Create Story",
      path: "/create-story",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, isSignedIn } = useUser();

  return (
    <Navbar
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      className="overflow-hidden"
    >
      <NavbarContent>
        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand className="flex items-center gap-2">
          <Image src={"/pixe.svg"} alt="pixe" height={40} width={40} />
          <h2 className="font-bold text-2xl text-primary hidden sm:flex">
            Magic Story
          </h2>
        </NavbarBrand>
        {MenyList.map((item, index) => (
          <NavbarItem
            key={index}
            className="text-xl text-primary font-medium hover:underline"
          >
            <Link href={item.path}>{item.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <UserButton />
        <Link href={"/dashboard"}>
          <Button color="primary">
            {isSignedIn ? "Dashboard" : "Get Started"}
          </Button>
        </Link>
      </NavbarContent>
      <NavbarMenu>
        {MenyList.map((item, index) => (
          <NavbarItem key={index}>
            <Link href={item.path}>{item.name}</Link>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
