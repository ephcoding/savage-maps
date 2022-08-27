import React from "react";
import { getGeoJsonFromTopoJson } from "../../utils/getGeoJsonFromTopoJson";
import * as d3 from "d3";

// ----- FOLLOWED THIS VID TO GET WORKING PROTOTYPE ----------
// -- https://www.youtube.com/watch?v=mzZ1fCXq-uo&t=615s
// -- https://unpkg.com/world-atlas@2.0.2/countries-50m.json
// ------------------------------------------------------------

export const GeoJsonSVGMapFromTopoJson = ({
	topoJsonSource,
	geometryToUse,
	projection,
}) => {
	const [geoJsonGeometry, setGeoJsonGeometry] = React.useState(null);

	const geoJson = getGeoJsonFromTopoJson(topoJsonSource, geometryToUse);

	React.useEffect(() => {
		if (geoJson) {
			setGeoJsonGeometry(geoJson);
		}
		geoJsonGeometry && console.log(">> GEOJSON MAP:\n", geoJsonGeometry);
	}, [geoJson]);

	return (
		<svg
			id='geoJsonMap'
			// width='975'
			// height='610'
			viewBox='0 0 975 610'
			className='border-2 border-white'
		>
			{geoJsonGeometry && (
				<GeoProjectionPath geometry={geoJsonGeometry} projection={projection} />
			)}
		</svg>
	);
};

const GeoProjectionPath = ({ geometry, projection }) => {
	const setSvgPath = d3.geoPath(projection);

	return (
		<g>
			{geometry.features.map((feature) => {
				return (
					<path
						key={feature.id}
						d={setSvgPath(feature)}
						className='stroke-red-500'
					/>
				);
			})}
		</g>
	);
};
