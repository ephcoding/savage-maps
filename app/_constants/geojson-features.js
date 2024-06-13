import * as topojson from "topojson-client";
import Albers from "../data/topoJSON/albers.topo.json";
import WorldAtlas from "../data/topoJSON/world-atlas.topo.json";
import NaturalEarth from "../data/topoJSON/ne-10-countries-usa.topo.json";

export const albersNation = topojson.feature(Albers, "nation");
export const albersStates = topojson.feature(Albers, "states");
export const albersCounties = topojson.feature(Albers, "counties");
export const naturalEarth = topojson.feature(
  NaturalEarth,
  "ne-10-countries-usa"
);
export const worldAtlasCountries = topojson.feature(WorldAtlas, "countries");
export const worldAtlasLand = topojson.feature(WorldAtlas, "land");
