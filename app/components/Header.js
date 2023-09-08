"use client";
import NextImage from "next/image";
import savageLogo from "../../public/savage-maps.png";
import { Navbar } from "react-daisyui";

export const Header = () => {
  return (
    <header>
      <Navbar data-theme="light">
        <Navbar.Start>
          <NextImage src={savageLogo} alt="SaVaGe Maps Logo" />
        </Navbar.Start>
      </Navbar>
    </header>
  );
};
