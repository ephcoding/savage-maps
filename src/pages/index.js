import { Layout } from "../components";
import { VectorMap } from "@south-paw/react-vector-maps";
import {
	AlbersProjectedAsPath,
	RVMHoverableStates,
	RVMRadialGradient,
	RVMRotatedGradientCover,
} from "../components/maps";

export default function Home() {
	return (
		<Layout>
			<div className='grid gap-16 sm:grid-cols-2 grid-flow-row'>
				<div>
					<RVMHoverableStates />
				</div>
				<div>
					<AlbersProjectedAsPath />
				</div>
				<div>
					<RVMRotatedGradientCover />
				</div>
				<div>
					<RVMRadialGradient />
				</div>
			</div>
		</Layout>
	);
}
