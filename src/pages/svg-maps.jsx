import { Layout } from "../components";
import { FipsConusMap, USOULinearGradientMap } from "../features/maps";
const SvgMapsPage = () => {
	return (
		<Layout pageName='Maps'>
			<FipsConusMap />
			{/* <USOULinearGradientMap /> */}
		</Layout>
	);
};

export default SvgMapsPage;
