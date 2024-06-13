"use client";
import {
  albersNation,
  albersCounties,
  albersStates,
  naturalEarth,
} from "@/app/_constants/geojson-features";
import {
  conicAlbers,
  conicAlbersUsa,
  azmEqualArea,
  azmEquidistant,
  azmGnomonic,
  azmOrthographic,
  conicConformal,
  conicEqualArea,
  conicEquidistant,
  cylEqualEarth,
  cylEquirectangular,
  cylMercator,
  cylNaturalEarth1,
  cylTransverseMercator,
} from "@/app/_constants/path-generators";
import { Basemap } from "./Basemap";

export const AlbersConusNation = () => (
  <Basemap geoJSON={albersNation} pathGen={conicAlbers} />
);
export const AlbersUSACounties = () => (
  <Basemap geoJSON={albersCounties} pathGen={conicAlbersUsa} />
);
export const AlbersUSAStates = () => (
  <Basemap geoJSON={albersStates} pathGen={conicAlbersUsa} />
);
export const AzimuthalEqualAreaCountries = () => (
  <Basemap geoJSON={naturalEarth} pathGen={azmEqualArea} />
);
export const EqualEarthCountries = () => (
  <Basemap geoJSON={naturalEarth} pathGen={cylEqualEarth} />
);
export const NaturalEarthAzmEqualArea = () => (
  <Basemap geoJSON={naturalEarth} pathGen={azmEqualArea} />
);
export const NaturalEarthAzmEquidistant = () => (
  <Basemap geoJSON={naturalEarth} pathGen={azmEquidistant} />
);
export const NaturalEarthAzmGnomonic = () => (
  <Basemap geoJSON={naturalEarth} pathGen={azmGnomonic} />
);
export const NaturalEarthAzmOrthographic = () => (
  <Basemap geoJSON={naturalEarth} pathGen={azmOrthographic} />
);
export const NaturalEarthConicConformal = () => (
  <Basemap geoJSON={naturalEarth} pathGen={conicConformal} />
);
export const NaturalEarthConicEqualArea = () => (
  <Basemap geoJSON={naturalEarth} pathGen={conicEqualArea} />
);
export const NaturalEarthConicEquidistant = () => (
  <Basemap geoJSON={naturalEarth} pathGen={conicEquidistant} />
);
export const NaturalEarthCylEquirectangular = () => (
  <Basemap geoJSON={naturalEarth} pathGen={cylEquirectangular} />
);
export const NaturalEarthCylMercator = () => (
  <Basemap geoJSON={naturalEarth} pathGen={cylMercator} />
);
export const NaturalEarthCylNaturalEarth1 = () => (
  <Basemap geoJSON={naturalEarth} pathGen={cylNaturalEarth1} />
);
export const NaturalEarthCylTransverseMercator = () => (
  <Basemap geoJSON={naturalEarth} pathGen={cylTransverseMercator} />
);
