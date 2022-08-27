import { Layout } from "../components";
import {
	LouisianaMap,
	OBBLinearGradientMap,
	OBBVerticalLinearGradientMap,
	USOULinearGradientMap,
	USOURotatedGradientMap,
} from "../features/maps";
const SvgMapsPage = () => {
	return (
		<Layout pageName='Maps'>
			{/* <LouisianaMap /> */}
			<USOULinearGradientMap />
			{/* <USOURotatedGradientMap />
			<OBBLinearGradientMap />
			<OBBVerticalLinearGradientMap /> */}
		</Layout>
	);
};

export default SvgMapsPage;
