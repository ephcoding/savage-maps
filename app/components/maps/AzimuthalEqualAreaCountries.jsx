import { azmEqualArea } from "@/app/_constants/path-generators";
import { naturalEarthCountries } from "@/app/_constants/geojson-features.js";
import { Basemap } from "../Basemap";

export const AzimuthalEqualAreaCountries = () => (
  <Basemap
    geoJSON={naturalEarthCountries}
    pathGen={azmEqualArea}
    pathProps={{ stroke: "red" }}
  />
);
