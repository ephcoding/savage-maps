import UsaMap from "../../geometry_files/json/rvm_country_usa.json";
import { VectorMap } from "@south-paw/react-vector-maps";

export const RVMLinearGradient = () => {
	return (
		<div className='stroke-neutral-600'>
			<h2 className='text-left mb-4'>Albers Projection: linear gradient</h2>
			<VectorMap {...UsaMap} fill='url(#gradient3)'>
				<defs>
					<linearGradient id='gradient3'>
						<stop offset='0%' stopColor='#ff0' />
						<stop offset='100%' stopColor='#111' />
					</linearGradient>
				</defs>
			</VectorMap>
		</div>
	);
};
