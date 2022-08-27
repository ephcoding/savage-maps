import React from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";

// TODO: make topoJSON arg optionally a "" || {}
// IF "" THEN fetch from URL with d3.json()
// ELSE IF {} then continue logic starting at [geometryCollection] value assignment

export const convertTopoJsonToGeoJson = (
	topoJsonURL,
	geometryCollectionObjectName = ""
) => {
	const [geoJsonMap, setGeoJsonMap] = React.useState(null);

	React.useEffect(() => {
		const convert = async () => {
			if (typeof window !== "undefined") {
				const topoJSONMap = await d3.json(topoJsonURL);
				const geometryCollection = await topoJSONMap.objects[
					geometryCollectionObjectName
				];

				setGeoJsonMap(feature(topoJSONMap, geometryCollection));
			}
		};

		convert();
	}, []);

	return geoJsonMap;
};
