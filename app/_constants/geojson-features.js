import * as topojson from "topojson-client";
import Albers from "../data/topoJSON/albers.topo.json";
import Countries from "../data/topoJSON/ne-10-countries-usa.topo.json";

export const albersNation = topojson.feature(Albers, "nation");
export const albersStates = topojson.feature(Albers, "states");
export const albersCounties = topojson.feature(Albers, "counties");
export const naturalEarthCountries = topojson.feature(
  Countries,
  "ne-10-countries-usa"
);
