"use client";
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
      <div className="grid grid-cols-4">
        <NaturalEarthAzmEqualArea />
        <NaturalEarthAzmEquidistant />
        <NaturalEarthAzmGnomonic />
        <NaturalEarthAzmOrthographic />
      </div>
      <div className="grid grid-cols-4">
        <NaturalEarthConicConformal />
        <NaturalEarthConicEqualArea />
        <NaturalEarthConicEquidistant />
      </div>
      <div className="grid grid-cols-4">
        <NaturalEarthCylEquirectangular />
        <NaturalEarthCylMercator />
        <NaturalEarthCylNaturalEarth1 />
        <NaturalEarthCylTransverseMercator />
      </div>
    </main>
  );
}
