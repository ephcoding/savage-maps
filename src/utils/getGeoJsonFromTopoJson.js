import React from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";

export const getGeoJsonFromTopoJson = (topoJsonSource, geometryToUse) => {
	const [geoJSON, setGeoJSON] = React.useState(null);
	let topoJSON, geometries;

	React.useEffect(() => {
		const convertTopoJsonToGeoJson = async () => {
			topoJSON = await getTopoJsonFromSource(d3, topoJsonSource);
			geometries = await getTopoJSONGeometry(topoJSON, geometryToUse);
			setGeoJSON(feature(topoJSON, geometries));
		};

		convertTopoJsonToGeoJson();
	}, []);

	return { geoJSON, topoJSON, geometries };
};

const getTopoJsonFromSource = async (d3, topoJson) => {
	typeof topoJson === "object"
		? topoJson
		: typeof topoJson === "string"
		? await d3.json(topoJson)
		: new Error(
				"Invalid TopoJson Type.  Requires topoJSON resource url string or a topoJSON object."
		  );
};
const getTopoJSONGeometry = (topoJson, geometry) => topoJson.objects[geometry];
