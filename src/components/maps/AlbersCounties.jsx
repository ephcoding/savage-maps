// ----- FOLLOWED THIS VID TO GET WORKING PROTOTYPE ----------
// -- https://www.youtube.com/watch?v=mzZ1fCXq-uo&t=615s
// -- https://unpkg.com/world-atlas@2.0.2/countries-50m.json
// ------------------------------------------------------------
import * as d3 from "d3";
import React from "react";
import { feature } from "topojson-client";
import AlbersTopoJSON from "../../geometry_files/topoJSON/albers_fips.json";

export const AlbersCounties = ({ children }) => {
  const [geoJsonGeometry, setGeoJsonGeometry] = React.useState(null);
  const projection = d3.geoAlbers();
  const createSVGPath = d3.geoPath(projection);

  React.useEffect(() => {
    const generateGeoJson = () => {
      const geoJSON = feature(AlbersTopoJSON, "counties");
      console.log(geoJSON);
      setGeoJsonGeometry(geoJSON);
    };

    generateGeoJson();
  }, []);

  return (
    <svg viewBox="0 0 975 610" className="stroke-blue-500 fill-charcoal-200">
      {/* -- create SVG path from GeoJSON features */}
      {geoJsonGeometry &&
        geoJsonGeometry.features.map((feature) => {
          return (
            <path
              key={feature.id}
              d={createSVGPath(feature)}
              className="hover:fill-yellow-400"
            />
          );
        })}
      {/* <defs> */}
      {/* <linearGradient id="gradient1" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06f" />
          <stop offset="70%" stopColor="#111" />
        </linearGradient>
      </defs> */}
    </svg>
  );
};
