import { svgToJsonUsa } from "../../source_files";
import { VectorMap } from "@south-paw/react-vector-maps";

export const USOULinearGradientMap = () => {
	return (
		<div>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
				<VectorMap
					{...svgToJsonUsa}
					className='stroke-blue-400 fill-[url(#gradient1)]'
				>
					<defs>
						<linearGradient id='gradient1' gradientUnits='userSpaceOnUse'>
							<stop offset='0%' stopColor='#06f' />
							<stop offset='70%' stopColor='#111' />
						</linearGradient>
					</defs>
				</VectorMap>

				<svg xmlns='http://www.w3.org/2000/svg' viewBox='-180 -290 800 800'>
					<polygon
						points='220,140 250,210 190,230 170,220'
						className='fill-red-500/70 stroke-neutral-900'
					/>
				</svg>
			</svg>
		</div>
	);
};
