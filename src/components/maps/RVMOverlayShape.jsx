import UsaMap from "../../geometry_files/json/rvm_country_usa.json";
import { VectorMap } from "@south-paw/react-vector-maps";
import { D3GeoPath } from "../shapes";

export const RVMOverlayShape = () => {
	return (
		<div className='fill-slate-700 stroke-white'>
			<VectorMap {...UsaMap}>
				{/* <defs>
					<linearGradient id='gradient4'>
						<stop offset='0%' stopColor='#ff0' />
						<stop offset='100%' stopColor='#111' />
					</linearGradient>
				</defs> */}
				<D3GeoPath />
			</VectorMap>
		</div>
	);
};
