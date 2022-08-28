import React from "react";
import * as d3 from "d3";

const projection = d3.geoAlbers();
const createSVGPath = d3.geoPath(projection);

export const D3GeoPath = () => {
	const geometry = {
		features: [
			{
				type: "Feature",
				geometry: {
					type: "Polygon",
					coordinates: [
						[
							[-92.37, 30.7],
							[-92.34, 30.82],
							[-92.08, 30.85],
							[-92.14, 30.59],
							[-92.37, 30.7],
						],
					],
				},
			},
		],
	};

	return (
		<g
			height='100'
			width='100'
			viewBox='0 0 10 10'
			className='fill-red-400 stroke-red-500'
		>
			{geometry.features.map((feature, index) => {
				return <path key={index} d={createSVGPath(feature)} />;
			})}
		</g>
	);
};
