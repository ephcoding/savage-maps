// CONVERT TORNADO WARNING GeoJSON POLYGON COORDINATES TO SVG PATH
// ( https://datavis.tech/datavis-2020/ )
// ( https://datavis.tech/datavis-2020-episode-3-finding-visualizations/ ) - finding viz's
// ( https://www.youtube.com/watch?v=xkBheRZTkaw ) 2022 course
// (https://youtu.be/mzZ1fCXq-uo?t=615) - ep. 20 GeoJSON to SVG path
// (https://www.youtube.com/watch?v=xkBheRZTkaw) - D3 course
// (http://using-d3js.com/05_01_paths.html#h_rvwUvGrTBV)
// (https://github.com/d3/d3-geo/blob/main/README.md#geoAlbers)
// ***************************************************************
import React from "react";
import * as d3 from "d3";
import { geoAlbers, geoPath } from "d3";
import { GeoJsonSvgProjectionPath } from "../shapes";
import { SVG } from "../../source_files";

const usaProjection = geoAlbers();
const usMapProjSVGPath = geoPath(usaProjection);

// ----- FOLLOWED THIS VID TO GET WORKING PROTOTYPE ----------
// -- https://www.youtube.com/watch?v=mzZ1fCXq-uo&t=615s
// -- https://unpkg.com/world-atlas@2.0.2/countries-50m.json
// ------------------------------------------------------------

export const NwsAlertPolygon = ({ geometry, projection }) => {
  return (
    <GeoProjectionPath geometry={geoJsonGeometry} projection={projection} />
  );
};
