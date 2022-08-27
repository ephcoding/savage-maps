# **_NATIONAL WEATHER SERVICE ALERT DETAILS_**

_NWS Web Service Alert Response Props_

**_Context_**

- [GeoJSON-LD](https://geojson.org/geojson-ld/) | "vocabulary and JSON-LD context for GeoJSON"
  - [GeoJSON-LD 1.0 context](https://geojson.org/geojson-ld/geojson-context.jsonld)
  - [GitHub repo](https://github.com/geojson/geojson-ld)

**_Ex. Response_**

```json
{
	"@context": [
		"https://geojson.org/geojson-ld/geojson-context.jsonld",
		{
			"@version": "1.1",
			"wx": "https://api.weather.gov/ontology#",
			"@vocab": "https://api.weather.gov/ontology#"
		}
	],
	"type": "FeatureCollection",
	"features": [
		{
			"id": "alert id <url>",
			"type": "Feature",
			"geometry": {
				"type": "Polygon",
				"coordinates": [
					[
						[00, 00],
						[00, 00]
					]
				]
			},
			"properties": {
				"@id": "<id>",
				"@type": "wx:<type>",
				"id": "<id>",
				"areaDesc": "City, ST; City, ST",
				"geocode": {
					"SAME": ["022039", "022097"], // Specific Area Message Encoding
					"UGC": ["LAC039", "LAC097"] // Universal Geographic Code
				},
				"affectedZones": ["zone1", "zone2"], // * RETURNS GEOMETRY FOR EACH LOCATION
				"references": [],
				"sent": "<timestamp>",
				"effective": "<timestamp>",
				"onset": "<timestamp>",
				"expires": "<timestamp>",
				"ends": "<timestamp>",
				"status": "<status>",
				"messageType": "Alert",
				"category": "Met",
				"severity": "Extreme",
				"certainty": "Observed",
				"urgency": "Immediate",
				"event": "Tornado Warning",
				"sender": "w-nws.webmaster@noaa.gov",
				"senderName": "NWS Lake Charles LA",
				"headline": "Tornado Warning issued August 22 at 7:14PM CDT until August 22 at 7:45PM CDT by NWS Lake Charles LA",
				"description": "<description>",
				"instruction": "<instruction>",
				"response": "Shelter",
				"parameters": { "prop1": "value1" }
			}
		}
	]
}
```

# CONVERSIONS

- [epsg.io](https://epsg.io/transform#s_srs=3857&t_srs=3857&x=-92.3700000&y=30.7000000)
- [`geojson2svg`](https://github.com/gagan-bansal/geojson2svg) | converts **_[EPSG3857](https://epsg.io/3857)_** points to SVG
  - [found here](https://stackoverflow.com/a/26671873)
- [**_GPS VISUALIZER_**](https://www.gpsvisualizer.com/map_input?form=svg)
- [`proj4js`](https://github.com/proj4js/proj4js) | converts geo coords to **_[EPSG3857](https://epsg.io/3857)_**
- [**_`SHAPEFILE`_**](https://github.com/mbostock/shapefile) | "A cross-platform streaming parser for the ESRI Shapefile spatial data format. "
- [shp2json](https://github.com/substack/shp2json/blob/master/package.json) | "Convert shapefile zip archives into GeoJSON using ogr2ogr with a streaming interface"

# DATA | [**_NWS WARNING / WATCH MAP SERVER_**](https://mapservices.weather.noaa.gov/eventdriven/rest/services/WWA/watch_warn_adv/MapServer/1)

- [NWS IDP-GIS REST Metadata](https://www.weather.gov/gis/IDP-GISRestMetadata)
- [**_EVERY NOAA WEB SERVICE_**](https://www.weather.gov/gis/cloudgiswebservices)
- [**_NOAA REST SERVICES_**](https://idpgis.ncep.noaa.gov/arcgis/rest/services)
- [Severe Weather Data Inventory](https://www.ncdc.noaa.gov/swdiws)
- [National Weather Service GIS datasets](https://www.nohrsc.noaa.gov/gisdatasets/)
- [Storm Prediction Center shapefiles](https://www.spc.noaa.gov/gis/)
- [NOAA Radar Display & Conversion Tools](https://www.ncei.noaa.gov/products/radar/radar-display-conversion-tools)
- [NOAA radar](https://www.ncei.noaa.gov/products/radar)
- [NOAA data](https://www.ncei.noaa.gov/products/radar)
- [NOAA severe weather](https://www.ncei.noaa.gov/products/severe-weather)
- [NOAA archive info request system](https://www.ncei.noaa.gov/has/has.dsselect)
- [NOAA weather & data toolkit](https://www.ncdc.noaa.gov/wct/install.php)
- [NOAA radar base reflectivity ImageServer](https://idpgis.ncep.noaa.gov/arcgis/rest/services/radar/radar_base_reflectivity_time/ImageServer) (real-time NEXRAD radar imagery)

# DOWNLOADABLE MAPS

- [mapsvg.com](https://mapsvg.com/maps) | free SVG vector maps
  - [license](https://creativecommons.org/licenses/by/4.0/)

# FILE FORMATS

- [KML]()
- [KMZ]()
- [polygons]()
- [geoJson]()
- [shp]()
- [TopoJSON]()

# HOW-TO

- [center geoJson map in d3](https://stackoverflow.com/questions/14492284/center-a-map-in-d3-given-a-geojson-object)
- [read radar](https://www.youtube.com/watch?v=AeX2lMUfddQ)

# STYLING

- [headlessui + next.js `<Link/>`](https://headlessui.com/react/menu#integrating-with-next-js)

# SVG: GENERAL INFO

- [**_POLYGONS_**](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon)
- [**_PATHS_**](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)
- [basic props](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started#basic_properties_of_svg_files)

# SVG MAPS: COMPONENTS

- [`@south-paw/react-vector-maps`](https://react-vector-maps.netlify.com/)
  - [svg to JSON converter](https://react-vector-maps.netlify.app/converter)
- [`react-simple-maps`](https://www.react-simple-maps.io/) | [repo](https://github.com/zcreativelabs/react-simple-maps)
- [react vector maps](https://react-vector-maps.netlify.app/) | [repo](https://github.com/South-Paw/react-vector-maps)
  - [ready-to-go maps](https://react-vector-maps.netlify.app/maps)

1. display static UI + HI svg
1. project static shapes on map
1. historical reflectivity
1. real-time reflectivitys

# UI/UX

- [ARIA best practices](https://www.w3.org/WAI/ARIA/apg/patterns/)

# VIEWERS

- [Gibson Ridge radar viewers](http://www.grlevelx.com) (PC only)

# VIZ LIBRARIES

**Esri ArcGIS**

- [ESRI shapefile spec](https://www.esri.com/content/dam/esrisites/sitecore-archive/Files/Pdfs/library/whitepapers/pdfs/shapefile.pdf)
- [developer guides](https://developers.arcgis.com/documentation/) | [repo](https://github.com/Esri/arcgis-js-api)

**D3**

- [awesome-d3](https://github.com/curran/awesome-d3)
- [d3 (learn)](https://observablehq.com/@d3/learn-d3)
- [d3](https://github.com/d3/d3/wiki)
- [d3-geo](https://github.com/d3/d3-geo/tree/main/src/projection)
- [d3-geo-projection](https://observablehq.com/collection/@d3/d3-geo-projection)
- [streaming shapefiles](https://observablehq.com/@mbostock/streaming-shapefiles)

# WORKFLOWS

**Display NWS Alert Polygons on SVG Map**

_What's needed:_

- [x] MAP: svg conus map > [mapsvg.com](https://mapsvg.com/maps)
  - \>\> !! THIS !! \>\> [**_TopJSON Maps with FIPS codes_**](https://github.com/topojson/us-atlas)
- [x] SHAPE COORDINATES: to create polygon with
  - [**_NWS WARNING / WATCH MAP SERVER_**](https://mapservices.weather.noaa.gov/eventdriven/rest/services/WWA/watch_warn_adv/MapServer/1)
    - [WMS](https://mapservices.weather.noaa.gov/eventdriven/services/WWA/watch_warn_adv/MapServer/WMSServer?request=GetCapabilities&service=WMS) returns image/svg+xml
  - [National Weather Service Alers](https://api.weather.gov/)
  - [NOAA REST services](https://idpgis.ncep.noaa.gov/arcgis/rest/services)
  - [NWS Web Services](https://www.weather.gov/gis/cloudgiswebservices)
- [ ] ALERT POLYGON: create svg alert polygon with converted coords
  - [`d3.geoPath`](https://github.com/d3/d3-geo/blob/main/src/path/index.js) | "given a GeoJSON geometry or feature object, it generates an SVG path data string"
  - [`d3-geo`](https://github.com/d3/d3-geo) |
  - [`d3-polygon`](https://github.com/d3/d3-polygon#api-reference) > [`d3.polygonHull`](https://github.com/d3/d3-polygon/blob/master/src/hull.js#L23) |
  - [`d3-shape`](https://github.com/d3/d3-shape) |

_Considerations_

- geoJson coords are NOT the same as svg user coords
  - need way of converting geoJSON coords to SVG coords
- coords need "projected" onto map
  - how to do that
- "winding order" for GeoJSON is opposite of TopoJSON & ESRI shapefiles
- GeoJSON WGS84 uses planar (not spherical) coordinates - requires [stitching](https://github.com/d3/d3-geo-projection/blob/main/README.md#geostitch)

**Find & Display NEXRAD Shapefiles using NOAA Toolkit**

1. [ident storm reports by date](https://www.spc.noaa.gov/climo/online/)
1. [SPC interactive local storm report display](https://www.spc.noaa.gov/exper/reports/)
1. [locate shapefiles in NOAA NEXRAD inventory](https://www.ncdc.noaa.gov/nexradinv/)
