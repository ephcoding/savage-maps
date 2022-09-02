import { Layout } from "../components";
import { VectorMap } from "@south-paw/react-vector-maps";
import {
	AlbersCounties,
	AlbersProjectedAsPath,
	RVMHoverableStates,
	RVMOverlayShape,
	RVMRadialGradient,
	RVMRotatedGradientCover,
} from "../components/maps";
import { AlbersConvective } from "../components/maps/AlbersConvective";

export default function Home() {
	return (
		<Layout>
			{/* <div className='grid gap-16 sm:grid-cols-2 grid-flow-row place-items-center'> */}
			<div className='bg-gradient-to-r from-zinc-900 to-zinc-600 p-6 rounded-lg shadow-black shadow-lg'>
				<AlbersConvective />
			</div>
			{/* <div className='bg-gradient-to-r from-zinc-900 to-zinc-600 p-6 rounded-lg shadow-black shadow-lg'>
				<RVMHoverableStates />
			</div>
			<div className='bg-gradient-to-r from-zinc-900 to-zinc-600 p-6 rounded-lg shadow-black shadow-lg'>
				<AlbersProjectedAsPath />
			</div>
			<div className='bg-gradient-to-r from-zinc-900 to-zinc-600 p-6 rounded-lg shadow-black shadow-lg'>
				<RVMRotatedGradientCover />
			</div>
			<div className='bg-gradient-to-r from-zinc-900 to-zinc-600 p-6 rounded-lg shadow-black shadow-lg'>
				<RVMRadialGradient />
			</div> */}
			<div className='bg-gradient-to-r from-zinc-900 to-zinc-600 p-6 rounded-lg shadow-black shadow-lg'>
				<RVMOverlayShape />
			</div>
			{/* <div className='bg-gradient-to-r from-zinc-900 to-zinc-600 p-6 rounded-lg shadow-black shadow-lg'>
				<AlbersCounties />
			</div> */}
			{/* </div> */}
		</Layout>
	);
}
