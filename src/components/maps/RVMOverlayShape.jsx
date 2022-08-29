import UsaMap from "../../geometry_files/json/rvm_country_usa.json";
import { VectorMap } from "@south-paw/react-vector-maps";
import { D3GeoPath } from "../shapes";
import * as d3 from "d3";

export const RVMOverlayShape = () => {
	const projection = d3.geoAlbers();
	const createSVGPath = d3.geoPath(projection);

	return (
		<div className='fill-transparent stroke-white'>
			<h2 className='text-left mb-4'>React Vector Map: polygon overlay</h2>
			<VectorMap {...UsaMap}>
				<polygon
					points='220,140 250,210 190,230 170,220'
					className='fill-red-500/70 stroke-neutral-900'
				/>
				{/* <path
          id="warning-1"
          title="my-first-warning"
          d="M62.31466666666666,42.16888888888889 62.336,42.083555555555556 62.52088888888889,42.06222222222222 62.47822222222222,42.24711111111111 62.31466666666666,42.16888888888889Z"
          stroke="white"
          fill="red"
        /> */}
				{/* {[
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
        ].map((feature) => {
          return (
            <path
              key={feature.id}
              d={createSVGPath(feature)}
              stroke="red"
              fill="red"
            />
          );
        })} */}
			</VectorMap>
		</div>
	);
};
