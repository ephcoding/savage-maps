"use client";
import * as topojson from "topojson-client";
import { geoPath, geoNaturalEarth1 } from "d3";
import WorldAtlasTopo from "../data/world-atlas.topo.json";
import WorldAtlasLand from "../data/world-atlas-land.geo.json";
import WorldAtlasCountries from "../data/world-atlas-countries.geo.json";

export const BackgroundMap = () => {
	const projection = geoNaturalEarth1();
	const d3Path = geoPath(projection);
	const { features } = topojson.feature(
		WorldAtlasTopo,
		WorldAtlasTopo.objects.countries
	);

	console.log(features);

	return (
		<div className='bg-neutral-700'>
			<svg viewBox='-5 -15 975 540' xmlns='http://www.w3.org/2000/svg'>
				<g>
					{features &&
						features.map(({ id, geometry }) => (
							<path
								key={id}
								d={d3Path(geometry)}
								stroke='black'
								fill='none'
								className='hover:fill-red-500'
							/>
						))}
				</g>
				{/* <path d={d3Path(features)} stroke='black' fill='grey' /> */}
			</svg>
		</div>
	);
};