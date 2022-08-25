import React from "react";
import { VectorMap } from "@south-paw/react-vector-maps";
import usaMap from "../json/usa.json";

export const SVGMap = () => {
	const [stateName, setStateName] = React.useState(null);
	const mapStyles = "stroke-10 stroke-stone-800 fill-stone-100";
	const stateLayerStyles = `hover:fill-red-500`;

	const stateLayerProps = {
		className: stateLayerStyles,
		onMouseEnter: ({ target }) => {
			setStateName(target.attributes.name.value);
		},
	};

	return (
		<>
			<MapH3 title='USA: event-based actions' />
			<ActiveStateName stateName={stateName} />
			<div className={mapStyles}>
				<VectorMap {...usaMap} layerProps={stateLayerProps} />
			</div>
		</>
	);
};

function ActiveStateName({ stateName }) {
	return (
		<p className='md:text-xl lg:text-2xl'>
			State: <span className='text-red-500'>{stateName || ""}</span>
		</p>
	);
}
