// ----- FOLLOWED THIS VID TO GET WORKING PROTOTYPE ----------
// -- https://www.youtube.com/watch?v=mzZ1fCXq-uo&t=615s
// -- https://unpkg.com/world-atlas@2.0.2/countries-50m.json
// ------------------------------------------------------------
import * as d3 from "d3";
import React from "react";
import { feature } from "topojson-client";
import AlbersTopoJSON from "../../geometry_files/topoJSON/albers_fips.json";

export const AlbersProjectedAsPath = ({ children }) => {
	const [geoJsonGeometry, setGeoJsonGeometry] = React.useState(null);
	const projection = d3.geoAlbers();
	const createSVGPath = d3.geoPath(projection);

	React.useEffect(() => {
		const generateGeoJson = async () => {
			const geoJSON = await feature(AlbersTopoJSON, "states");
			setGeoJsonGeometry(geoJSON);
		};

		generateGeoJson();
	}, []);

	geoJsonGeometry && console.log(geoJsonGeometry);

	return (
		<svg viewBox='0 0 975 610' className='border-2 border-white fill-blue-500'>
			{geoJsonGeometry &&
				geoJsonGeometry.features.map((feature) => {
					return (
						<path
							key={feature.id}
							d={createSVGPath(feature)}
							className='stroke-white'
						/>
					);
				})}
		</svg>
	);
};
