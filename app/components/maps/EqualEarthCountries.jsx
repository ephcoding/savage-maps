"use client";
import { cylEqualEarth } from "@/app/_constants/path-generators";
import { naturalEarth } from "@/app/_constants/geojson-features.js";
import { Basemap } from "../Basemap";

export const EqualEarthCountries = () => (
  <Basemap
    geoJSON={naturalEarth}
    pathGen={cylEqualEarth}
    pathProps={{ stroke: "red" }}
  />
);
