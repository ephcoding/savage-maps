import React from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";

export const convertTopoJsonToGeoJson = (
	topoMap,
	geometryCollectionObjectName = ""
) => {
	const [geoJsonMap, setGeoJsonMap] = React.useState(null);

	React.useEffect(() => {
		const convert = async () => {
			if (typeof window !== "undefined") {
				const topoJSONMap = await d3.json(topoMap);
				const geometryCollection = await topoJSONMap.objects[
					geometryCollectionObjectName
				];

				console.log(">> TOPOMAPJSON:\n", topoJSONMap);

				setGeoJsonMap(feature(topoJSONMap, geometryCollection));
			}
		};

		convert();
	}, []);

	return geoJsonMap;
};
