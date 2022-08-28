import React from "react";
import { GeoJsonSvgProjectionPath } from "../shapes";
import { getGeoJsonFromTopoJson } from "../../utils/getGeoJsonFromTopoJson";

// ----- FOLLOWED THIS VID TO GET WORKING PROTOTYPE ----------
// -- https://www.youtube.com/watch?v=mzZ1fCXq-uo&t=615s
// -- https://unpkg.com/world-atlas@2.0.2/countries-50m.json
// ------------------------------------------------------------

export const GeoJsonSVGMapFromTopoJson = ({
  topoJsonSource,
  geometryToUse,
  projection,
  children,
}) => {
  const [geoJsonGeometry, setGeoJsonGeometry] = React.useState(null);
  const { geoJson } = getGeoJsonFromTopoJson(topoJsonSource, geometryToUse);

  console.log(">> geoJsonFromTopoJson\n", geoJson);

  React.useEffect(() => {
    if (geoJson) setGeoJsonGeometry(geoJson);
  }, [geoJson]);

  return (
    <svg viewBox="0 0 975 610" className="border-2 border-white">
      {geoJsonGeometry && (
        <GeoJsonSvgProjectionPath
          geometry={geoJsonGeometry}
          projection={projection}
        />
      )}
      {children}
    </svg>
  );
};
