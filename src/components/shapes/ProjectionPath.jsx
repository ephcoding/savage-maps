import * as d3 from "d3";

export const ProjectionPath = ({ geoJsonFeatures, projection }) => {
	const setSvgPath = d3.geoPath(projection);
	const { features } = geoJsonFeatures;

	return (
		<g>
			{features?.map((feature) => {
				return (
					<path
						key={feature.id}
						d={setSvgPath(feature)}
						className='stroke-white'
					/>
				);
			})}
		</g>
	);
};
