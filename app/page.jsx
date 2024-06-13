"use client";
import { Basemap } from "./components";
import {
  NaturalEarthAzmEqualArea,
  NaturalEarthAzmEquidistant,
  NaturalEarthAzmGnomonic,
  NaturalEarthAzmOrthographic,
  NaturalEarthConicConformal,
  NaturalEarthConicEqualArea,
  NaturalEarthConicEquidistant,
  NaturalEarthCylEquirectangular,
  NaturalEarthCylMercator,
  NaturalEarthCylNaturalEarth1,
  NaturalEarthCylTransverseMercator,
} from "@/app/components/D3Maps";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-3">
        <NaturalEarthAzmEqualArea />
        <NaturalEarthAzmEquidistant />
        <NaturalEarthAzmGnomonic />
      </div>
      <div className="grid grid-cols-3">
        <NaturalEarthAzmOrthographic />
        <NaturalEarthConicConformal />
        <NaturalEarthConicEqualArea />
      </div>
      <div className="grid grid-cols-3">
        <NaturalEarthConicEquidistant />
        <NaturalEarthCylEquirectangular />
        <NaturalEarthCylMercator />
      </div>
      <div className="grid grid-cols-3">
        <NaturalEarthCylNaturalEarth1 />
        <NaturalEarthCylTransverseMercator />
      </div>
    </main>
  );
}
