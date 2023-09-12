"use client";
import { conicAlbers } from "@/app/_constants/path-generators";
import { albersNation } from "@/app/_constants/geojson-features.js";
import { Basemap } from "../Basemap";

export const SolidAlbersUSNation = () => (
  <Basemap
    geoJSON={albersNation}
    pathGen={conicAlbers}
    pathProps={{ fill: "red" }}
  />
);
