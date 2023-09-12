"use client";
import { cylEqualEarth } from "@/app/_constants/path-generators";
import { naturalEarthCountries } from "@/app/_constants/geojson-features.js";
import { Basemap } from "../Basemap";

export const EqualEarthCountries = () => (
  <Basemap
    geoJSON={naturalEarthCountries}
    pathGen={cylEqualEarth}
    pathProps={{ stroke: "red" }}
  />
);
