import React from "react";
import { VectorMap } from "@south-paw/react-vector-maps";
import UsaMap from "../../geometry_files/json/rvm_country_usa.json";

export const RVMHoverableStates = () => {
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
			<h2 className='text-left mb-4'>React Vector Map: hoverable states</h2>
			<ActiveStateName stateName={stateName} />
			<div className={mapStyles}>
				<VectorMap {...UsaMap} layerProps={stateLayerProps} />
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
