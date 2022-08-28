import { Layout } from "../components";
import {
	GeoJsonSVGMapFromTopoJson,
	USOULinearGradientMap,
} from "../features/maps";
import * as d3 from "d3";
// -- MAP DATA
import { JSON, TOPO_JSON } from "../source_files";
import { GeoJsonSvgProjectionPath } from "../features/shapes";
const testMapUrl = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";
const fipsUsaMapUrl =
	"https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
const fipsAlbersMapUrl =
	"https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json";

const equalEarthProjection = d3.geoEqualEarth();
const albersProjection = d3.geoAlbers();

const SvgMapsPage = () => {
	return (
		<Layout pageName='Maps'>
			<div className='grid gap-16 grid-cols-2 grid-flow-row'>
				{/* <GeoJsonSVGMapFromTopoJson
          topoJsonSource={TOPO_JSON.topoJsonAlbersWithFIPS}
          geometryToUse="counties"
          projection={albersProjection}
        /> */}
				<GeoJsonSVGMapFromTopoJson
					topoJsonSource={TOPO_JSON.topoJsonAlbersWithFIPS}
					geometryToUse='states'
					projection={albersProjection}
				>
					{/* <GeoJsonSvgProjectionPath
            geometry={JSON.swdiTornadoWarningExample}
            projection={albersProjection}
          /> */}
				</GeoJsonSVGMapFromTopoJson>
				{/* <GeoJsonSVGMapFromTopoJson
          topoJsonSource={TOPO_JSON.topoJsonAlbersWithFIPS}
          geometryToUse="nation"
          projection={albersProjection}
        /> */}
				{/* <USOULinearGradientMap /> */}
			</div>
		</Layout>
	);
};

export default SvgMapsPage;
