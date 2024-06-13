import { azmEqualArea } from "@/app/_constants/path-generators";
import { naturalEarth } from "@/app/_constants/geojson-features.js";
import { Basemap } from "../Basemap";

export const AzimuthalEqualAreaCountries = () => (
  <Basemap
    geoJSON={naturalEarth}
    pathGen={azmEqualArea}
    pathProps={{ stroke: "red" }}
  />
);
