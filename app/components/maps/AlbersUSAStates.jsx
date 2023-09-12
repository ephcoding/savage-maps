"use client";
import { conicAlbersUsa } from "@/app/_constants/path-generators";
import { albersStates } from "@/app/_constants/geojson-features.js";
import { Basemap } from "../Basemap";

export const AlbersUSAStates = () => (
  <Basemap
    geoJSON={albersStates}
    pathGen={conicAlbersUsa}
    pathProps={{ stroke: "red" }}
  />
);
