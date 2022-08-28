import React from "react";
import { JSON } from "../../source_files";
import * as d3 from "d3";

export const Polygon = () => {
	const svgRef = React.useRef(null);

	React.useEffect(() => {
		const drawPolygonHull = (ref) => {
			// const features = JSON.nwsTornadoWarnings.features[0].geometry.coordinates;
			const features = [
				[-92.37, 30.7],
				[-92.34, 30.82],
				[-92.08, 30.85],
				[-92.14, 30.59],
				[-92.37, 30.7],
			];
			const svg = d3.select(ref.current);

			svg.append(features.map((feature) => <path d={d3.geoPath(feature)} />));
		};

		drawPolygonHull(svgRef);
	}, [svgRef]);

	return (
		<svg
			ref={svgRef}
			id='polygon'
			xmlns='http://www.w3.org/2000/svg'
			width='400'
			height='400'
			// viewBox='0 0 400 400'
			className='bg-red-400'
		></svg>
	);
};
