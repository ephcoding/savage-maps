const proj4 = require("proj4");

// ****************************************************
// -- STEP #1: convert NWS polygon coords to EPSG3857
// -- 'GOOGLE' format coordinates & convert to SVG
// ****************************************************
// WGS84: default 'from' projection
const toProjection = "EPSG:3857";

const convertWGS84ToEPSG3857 = (wgs84CoordsArray) => {
	const conversion = wgs84CoordsArray.map((coords) => {
		return proj4(toProjection, coords);
	});

	return conversion;
};

module.exports = convertWGS84ToEPSG3857;
