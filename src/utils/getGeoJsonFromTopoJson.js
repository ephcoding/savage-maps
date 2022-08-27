import React from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";

// TODO: make topoJSON arg optionally a "" || {}
// IF "" THEN fetch from URL with d3.json()
// ELSE IF {} then continue logic starting at [geometryCollection] value assignment

export const getGeoJsonFromTopoJson = (topoJsonSource, geometryToUse) => {
	const [geoJsonGeometryCollection, setGeoJsonGeometryCollection] =
		React.useState(null);

	React.useEffect(() => {
		const convert = async () => {
			let topoJSONMap, topoJsonGeometryCollection;

			if (typeof window !== "undefined") {
				typeof topoJsonSource === "object"
					? (topoJSONMap = topoJsonSource)
					: typeof topoJsonSource === "string"
					? (topoJSONMap = await d3.json(topoJsonSource))
					: new Error(
							"Unsupported topoJsonSource type used: [url: string, topoJson: object]"
					  );

				topoJsonGeometryCollection = topoJSONMap.objects[geometryToUse];
				setGeoJsonGeometryCollection(
					feature(topoJSONMap, topoJsonGeometryCollection)
				);
			}
		};

		convert();
	}, []);

	return geoJsonGeometryCollection;
};
