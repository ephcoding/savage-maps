import React from "react";
// import esriConfig from "@arcgis/core/config";
// import Map from "@arcgis/core/Map";
// import Basemap from "@arcgis/core/Basemap";
// import Legend from "@arcgis/core/widgets/Legend";
// import LayerList from "@arcgis/core/widgets/LayerList";
// import MapView from "@arcgis/core/views/MapView";
// import Extent from "@arcgis/core/geometry/Extent";
// import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
// import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const ArcGISTestMap = () => {
	const mapRef = React.useRef(null);

	// React.useEffect(() => {
	// 	const test = async () => {
	// 		const res = await fetch(
	// 			"https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer"
	// 		);

	// 		console.log(await res.body);
	// 	};

	// 	test();
	// }, []);

	// React.useEffect(() => {
	// const app = {};
	// if (mapRef.current) {
	// 	esriConfig.apiKey = process.env.REACT_APP_ARCGIS_KEY;

	// const layer = new MapImageLayer({
	// 	url: "https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/SPC_wx_outlks/MapServer",
	// 	opacity: 0.4,
	// sublayers: [
	// 	{ id: 1, visible: true },
	// 	{ id: 3, visible: false },
	// 	{ id: 5, visible: false },
	// 	{ id: 7, visible: false },
	// ],
	// });

	// const map = new Map({
	// 	basemap: new Basemap({
	// 		baseLayers: [
	// 			new FeatureLayer({
	// 				url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS/nws_reference_map/MapServer/3",
	// 			}),
	// 		],
	// 	}),
	// 	layers: [layer],
	// });

	// const view = new MapView({
	// 	container: mapRef.current,
	// 	map,
	// });

	// view.when(
	// 	async () => {
	// 		let initExtent;
	// 		await layer.when(
	// 			() => (initExtent = Extent.fromJSON(layer.sourceJSON.initialExtent))
	// 		);
	// 		view.ui.add(new Legend({ view }), "top-right");
	// 		view.ui.add(
	// 			new LayerList({
	// 				view,
	// 			}),
	// 			"bottom-left"
	// 		);
	// 		view.goTo(initExtent);
	// 		// console.log("VIEW SOURCE JSON >>\n", view);
	// 	},
	// 	(err) => console.log("LAYER ERROR >>\n", err)
	// );

	// app.view = view;
	// app.layerHandle = layerHandle;
	// }

	// return () => {
	// app.layerHandle.remove();
	// 		app.view.destroy();
	// 	};
	// }, []);

	return (
		<>
			<div className='h-[70vh] p-4' ref={mapRef}></div>
		</>
	);
};
