"use client";
import NextImage from "next/image";
import savageLogo from "../../public/savage-maps.png";

export const SavageLogo = () => (
	<NextImage src={savageLogo} alt='SaVaGe Maps logo' priority />
);
