import * as d3 from "d3";

export const GeoJsonSvgProjectionPath = ({ geometry, projection }) => {
	const setSvgPath = d3.geoPath(projection);
	const { features } = geometry;

	return (
		<g>
			{features?.map((feature) => {
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
