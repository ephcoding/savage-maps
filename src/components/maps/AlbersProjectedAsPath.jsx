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
		const generateGeoJson = () => {
			const geoJSON = feature(AlbersTopoJSON, "states");
			console.log(geoJSON);
			setGeoJsonGeometry(geoJSON);
		};

		generateGeoJson();
	}, []);

	return (
		<>
			<h2 className='text-left mb-4'>Albers Projection: states</h2>
			<svg
				viewBox='60 0 850 531'
				className='stroke-blue-500 fill-[url(#gradient1)]'
			>
				{/* -- create SVG path from GeoJSON features */}
				{geoJsonGeometry &&
					geoJsonGeometry.features.map((feature) => {
						return <path key={feature.id} d={createSVGPath(feature)} />;
					})}
				<defs>
					<linearGradient id='gradient1' gradientUnits='userSpaceOnUse'>
						<stop offset='0%' stopColor='#06f' />
						<stop offset='70%' stopColor='#111' />
					</linearGradient>
				</defs>
				{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="-180 -290 800 800"> */}
				<polygon
					points='220,140 250,210 190,230 170,220'
					className='fill-red-500/70 stroke-neutral-900'
				/>
				{/* </svg> */}
			</svg>
		</>
	);
};
