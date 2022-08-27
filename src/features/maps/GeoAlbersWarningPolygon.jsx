// CONVERT TORNADO WARNING GeoJSON POLYGON COORDINATES TO SVG PATH
// ( https://datavis.tech/datavis-2020/ )
// ( https://datavis.tech/datavis-2020-episode-3-finding-visualizations/ ) - finding viz's
// ( https://www.youtube.com/watch?v=xkBheRZTkaw ) 2022 course
// (https://youtu.be/mzZ1fCXq-uo?t=615) - ep. 20 GeoJSON to SVG path
// (https://www.youtube.com/watch?v=xkBheRZTkaw) - D3 course
// (http://using-d3js.com/05_01_paths.html#h_rvwUvGrTBV)
// (https://github.com/d3/d3-geo/blob/main/README.md#geoAlbers)
// ***************************************************************
import { geoAlbers, geoPath } from "d3";
import { SVG } from "../../source_files";

// ***************************************************************
// ** VARIABLES **
// - features CONTEXT: GeoJSON-LD
// - feature object: [ [ [...coords] ]]  // could have multiple polygons
// - projection: the map you're putting your path on
// ***************************************************************

const usaProjection = geoAlbers();
const usMapProjSVGPath = geoPath(usaProjection);

export const GeoAlbersNwsAlertPolygon = ({ json }) => (
	<svg width='100' height='100' viewBox='0 0 100 100'>
		<g className='fill-red-500 stroke-red-500' viewBox='0 0 100 100'>
			{json.layers.map((polygon) => (
				<path d={usMapProjSVGPath(polygon)} />
			))}
		</g>
	</svg>
);
