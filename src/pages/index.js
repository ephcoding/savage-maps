import Head from "next/head";
import Image from "next/image";

import { BasicSVG } from "../components";

import {
	LouisianaMap,
	OBBLinearGradientMap,
	OBBVerticalLinearGradientMap,
	USOULinearGradientMap,
	USOURotatedGradientMap,
} from "../maps";

export default function Home() {
	return (
		<main className='min-h-screen p-4   text-white text-5xl bg-gradient-to-br from-neutral-800 to-neutral-900'>
			<div>
				<h1>KARTELAND</h1>
			</div>
			<div className='grid gap-10 md:grid-cols-2'>
				<BasicSVG />
				<LouisianaMap />
				<USOULinearGradientMap />
				<USOURotatedGradientMap />
				<OBBLinearGradientMap />
				<OBBVerticalLinearGradientMap />
			</div>
		</main>
	);
}
