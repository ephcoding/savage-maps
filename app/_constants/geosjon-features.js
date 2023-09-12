import * as topojson from "topojson-client";
import Albers from "../data/topoJSON/albers.topo.json";

export const AlbersNation = () => {
  const { features } = topojson.feature(Albers, "nation");
  return features;
};

export const AlbersStates = () => {
  const { features } = topojson.feature(Albers, "states");
  return features;
};

export const AlbersCounties = () => {
  const { features } = topojson.feature(Albers, "counties");
  return features;
};
