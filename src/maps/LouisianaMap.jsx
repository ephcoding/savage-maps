import React from "react";
import Louisiana from "../json/Louisiana.json";
import warning from "../json/warning-1.json";
import { VectorMap } from "@south-paw/react-vector-maps";

export const LouisianaMap = () => {
	return (
		<div className='stroke-blue-400 fill-[url(#gradient1)]'>
			<VectorMap
				{...Louisiana}
				// viewBox='0 0 543.449 296.262'
				// layers={[...LA["layers"], warning]}
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
				{/* <svg width='100' height='100'>
					<path
						d='M62.31466666666667,105.04241879023813 62.336000000000006,104.94311510603559 62.5208888888889,104.91826981448379 62.47822222222222,105.13333873391221 62.31466666666667,105.04241879023813Z'
						stroke='white'
						fill='red'
					/>
				</svg> */}
			</VectorMap>
		</div>
	);
};
