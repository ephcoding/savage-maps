import UsaMap from "../../geometry_files/json/rvm_country_usa.json";
import { VectorMap } from "@south-paw/react-vector-maps";

export const RVMRotatedGradientCover = () => {
	return (
		<div className='stroke-neutral-600'>
			<VectorMap
				{...UsaMap}
				fill='url(#gradient2)'
				layerProps={{ className: "hover:fill-yellow-400" }}
			>
				<defs>
					<linearGradient
						id='gradient2'
						gradientUnits='userSpaceOnUse'
						gradientTransform='rotate(45)'
					>
						<stop offset='0%' stopColor='#111' />
						<stop offset='50%' stopColor='#333' />
						<stop offset='60%' stopColor='#f30' />
						<stop offset='65%' stopColor='#f00' />
						<stop offset='70%' stopColor='#f30' />
						<stop offset='80%' stopColor='#333' />
						<stop offset='100%' stopColor='#111' />
					</linearGradient>
				</defs>
			</VectorMap>
		</div>
	);
};
