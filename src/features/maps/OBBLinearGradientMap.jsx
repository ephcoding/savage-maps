import { svgToJsonUsa } from "../../source_files";
import { VectorMap } from "@south-paw/react-vector-maps";

export const OBBLinearGradientMap = () => {
	return (
		<div className='stroke-neutral-600'>
			<VectorMap {...svgToJsonUsa} fill='url(#gradient3)'>
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
