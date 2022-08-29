import UsaMap from "../../geometry_files/json/rvm_country_usa.json";
import { VectorMap } from "@south-paw/react-vector-maps";
import { ProjectionPath } from "../shapes";
import * as d3 from "d3";

const albersProjection = d3.geoAlbers();

export const RVMLinearGradientCover = () => {
	return (
		<div>
			<h2 className='text-left mb-4'>React Vector Map: linear gradient</h2>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
				<VectorMap
					{...UsaMap}
					className='stroke-blue-400 fill-[url(#gradient1)]'
				>
					<defs>
						<linearGradient id='gradient1' gradientUnits='userSpaceOnUse'>
							<stop offset='0%' stopColor='#06f' />
							<stop offset='70%' stopColor='#111' />
						</linearGradient>
					</defs>
				</VectorMap>
			</svg>
		</div>
	);
};
