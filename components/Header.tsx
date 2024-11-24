"use client";
import React from "react";
import Logo from "./Logo";
import Container from "./Container";
import { NavbarData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="border-b border-b-hoverColor/10">
      <Container className="flex items-center justify-between py-5">
        <Logo title="John" subtitle="." />
        <div className="hidden md:flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
          {NavbarData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.link}
              className="hover:text-hoverColor hoverEffect relative group overflow-x-hidden"
            >
              {item?.title}
              <span
                className={`w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect ${
                  pathname === item?.link
                    ? "translate-x-0"
                    : "-translate-x-[105%]"
                }`}
              />
            </Link>
          ))}
          <Link
            href={"/"}
            className="text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect"
          >
            Hire me
          </Link>
        </div>
        <div className="inline-flex md:hidden relative">
          <Menu className="hover:text-hoverColor hoverEffect cursor-pointer" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
