import React from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";

export const getGeoJsonFromTopoJson = (topoJsonSource, geometryToUse) => {
	const [geoJsonFromTopoJson, setGeoJsonFromTopoJson] = React.useState();

	React.useEffect(() => {
		const convertTopoJsonToGeoJson = async () => {
			const topoJSON = await getTopoJsonFromSource(topoJsonSource); // input TopoJSON object
			const geometries = getTopoJSONGeometry(topoJSON, geometryToUse); // specific TopoJSON Collection to convert
			setGeoJsonFromTopoJson({
				geoJSON: feature(topoJSON, geometries), // converted TopoJSON GeometryCollection
				topoJSON,
				geometries,
			});
		};

		convertTopoJsonToGeoJson();
	}, []);

	return geoJsonFromTopoJson;
};

const getTopoJsonFromSource = async (topoJson) => {
	if (typeof topoJson === "object") return topoJson;
	if (typeof topoJson === "string") return await d3.json(topoJson);
	console.error(
		"Cannot convert TopoJSON to GeoJSON: invalid TopoJson Type.  Provide either a url string or a properly formatted TopoJSON object."
	);
};

const getTopoJSONGeometry = (topoJson, geometry) => topoJson.objects[geometry];
