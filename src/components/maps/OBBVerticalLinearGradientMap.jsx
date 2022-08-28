import { svgToJsonUsa } from "../../source_files";
import { VectorMap } from "@south-paw/react-vector-maps";

export const OBBVerticalLinearGradientMap = () => {
	return (
		<div className='stroke-neutral-600'>
			<VectorMap
				{...svgToJsonUsa}
				fill='url(#gradient4)'
				checkedLayers={["us-tx"]}
			>
				<defs>
					<linearGradient id='gradient4' gradientTransform='rotate(90)'>
						<stop offset='0%' stopColor='#0f0' />
						<stop offset='100%' stopColor='#111' />
					</linearGradient>
				</defs>
			</VectorMap>
		</div>
	);
};
