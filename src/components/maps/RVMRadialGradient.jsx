import UsaMap from "../../geometry_files/json/rvm_country_usa.json";
import { VectorMap } from "@south-paw/react-vector-maps";

export const RVMRadialGradient = () => {
	return (
		<div className='stroke-neutral-600'>
			<h2 className='text-left mb-4'>React Vector Map: radial gradient</h2>
			<VectorMap
				{...UsaMap}
				// fill='url(#gradient2)'
				layerProps={{ className: "hover:fill-yellow-400" }}
				className='stroke-black fill-[url(#gradient3)]'
			>
				<defs>
					<radialGradient id='gradient3' gradientUnits='userSpaceOnUse'>
						<stop offset='0%' stopColor='#f00' />
						<stop offset='10%' stopColor='#f30' />
						<stop offset='20%' stopColor='#f60' />
						<stop offset='25%' stopColor='#000' />
						<stop offset='30%' stopColor='#111' />
						<stop offset='35%' stopColor='#222' />
						<stop offset='40%' stopColor='#333' />
						<stop offset='100%' stopColor='#0f0' />
					</radialGradient>
				</defs>
			</VectorMap>
		</div>
	);
};
