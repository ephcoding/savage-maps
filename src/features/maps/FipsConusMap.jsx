import React from "react";
import { TOPO_JSON } from "../../source_files";
import { convertTopoJsonToGeoJson } from "../../utils/convertTopoJsonToGeoJson";

const testMapUrl = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

// ----- FOLLOWED THIS VID TO GET WORKING PROTOTYPE ----------
// -- https://www.youtube.com/watch?v=mzZ1fCXq-uo&t=615s
// -- https://unpkg.com/world-atlas@2.0.2/countries-50m.json
// ------------------------------------------------------------

export const FipsConusMap = () => {
	// const topoMap = TOPO_JSON.topoJsonAlbersWithFIPS;
	const geoJsonMap = convertTopoJsonToGeoJson(testMapUrl, "countries");

	return <div>FipsConusMap</div>;
};
