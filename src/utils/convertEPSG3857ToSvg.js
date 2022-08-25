const fs = require("fs");
const geojson2svg = require("geojson2svg");
const convertWGS84ToEPSG3857 = require("./convertWGS84ToEPSG3857");
const miniResponse = require("../data/fakeMiniResponse.json");
const parseSvg = require("parse-svg");

// ****************************************************
// -- STEP #2: convert EPSG3857 coords into SVG
// ****************************************************
const coordinates = [
	[-92.37, 30.7],
	[-92.34, 30.82],
	[-92.08, 30.85],
	[-92.14, 30.59],
	[-92.37, 30.7],
];

const convertedCoords = convertWGS84ToEPSG3857(coordinates);

var converter = geojson2svg({
	// viewportSize: '',
	mapExtent: { left: -180, bottom: -90, right: 180, top: 90 },
	output: "svg",
	fitTo: "",
	precision: "",
	explode: "",
	attributes: { stroke: "white", fill: "red" },
	// pointAsCircle: "",
	// r: "",
	callback: "",
	viewportExtent: { width: 200, height: 200 },
});
var svgString = converter.convert({
	type: "Polygon",
	coordinates: [[...coordinates]],
	// coordinates: [[...convertedCoords]],
});

// const svgEl = parseSvg(svgString);
// *******************************************************
// -- STEP #3: convert SVG into JSON-formatted map object
// *******************************************************

console.log(">> PATH DATA:\n", svgString);
// console.log(">> SVG STRING:\n", svgEl);
