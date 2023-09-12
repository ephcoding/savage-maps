"use client";
import {
  AlbersConusNation,
  AlbersUSACounties,
  AlbersUSAStates,
  AzimuthalEqualAreaCountries,
  EqualEarthCountries,
} from "@/app/components/maps";

export default function Home() {
  return (
    <main className="flex-1">
      <AlbersConusNation />
      <AlbersUSAStates />
      <AlbersUSACounties />
      <AzimuthalEqualAreaCountries />
      <EqualEarthCountries />
    </main>
  );
}
