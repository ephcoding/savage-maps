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

	console.log(
		">> geoJsonGeometry for GeoJsonSvgProjectionPath: \n",
		geoJsonGeometry
	);

	const fromTopoJSON = getGeoJsonFromTopoJson(topoJsonSource, geometryToUse);

	React.useEffect(() => {
		if (fromTopoJSON) {
			setGeoJsonGeometry(fromTopoJSON?.geoJSON);
		}
	}, [fromTopoJSON]);

	return (
		<svg
			// width='975px'
			// height='auto'
			viewBox='0 0 975 610'
			className='border-2 border-white'
		>
			{geoJsonGeometry && (
				<GeoJsonSvgProjectionPath
					geoJsonFeatures={geoJsonGeometry}
					projection={projection}
				/>
			)}
			{children}
		</svg>
	);
};
