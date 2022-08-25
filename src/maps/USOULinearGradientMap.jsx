import React from "react";
import usaMap from "../json/usa.json";
import warning from "../json/warning-1";
import { VectorMap, VectorMapLayer } from "@south-paw/react-vector-maps";

export const USOULinearGradientMap = () => {
	return (
		<div className='stroke-blue-400 fill-[url(#gradient1)]'>
			<VectorMap
				{...usaMap}
				// viewBox='0 0 543.449 296.262'
				// layers={[{ ...usaMap }, warning]}
				// tabIndex
				// layerProps={{
				// 	className: "hover:fill-yellow-400",
				// }}
				// checkedLayers={["warning-1"]}
				// currentLayers={["warning-1"]}
			>
				<defs>
					<linearGradient id='gradient1' gradientUnits='userSpaceOnUse'>
						<stop offset='0%' stopColor='#06f' />
						<stop offset='70%' stopColor='#111' />
					</linearGradient>
				</defs>
			</VectorMap>
		</div>
	);
};
