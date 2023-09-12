import { conicAlbersUsa } from "@/app/_constants/path-generators";
import {
  albersCounties,
  albersCountiesMesh,
} from "@/app/_constants/geojson-features.js";
import { Basemap } from "../Basemap";

export const AlbersUSACounties = () => (
  <Basemap
    geoJSON={albersCounties}
    pathGen={conicAlbersUsa}
    pathProps={{ stroke: "red" }}
  />
);
