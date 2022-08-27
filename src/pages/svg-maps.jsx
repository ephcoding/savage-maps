import { Layout } from "../components";
import {
	GeoJsonMapFromTopoJson,
	USOULinearGradientMap,
} from "../features/maps";
const SvgMapsPage = () => {
	return (
		<Layout pageName='Maps'>
			<GeoJsonMapFromTopoJson />
			{/* <USOULinearGradientMap /> */}
		</Layout>
	);
};

export default SvgMapsPage;
