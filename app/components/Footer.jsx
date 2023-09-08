"use client";
import { Footer as DaisyFooter } from "react-daisyui";

import { SavageLogo } from "./SavageLogo";

const devResources = [
	{
		text: "D3",
		href: "https://d3js.org",
	},
	{
		text: "Map Shaper",
		href: "https://mapshaper.org",
	},
	{
		text: "GeoJSON",
		href: "https://geojson.org",
	},
	{
		text: "TopoJSON",
		href: "https://github.com/topojson/topojson-specification",
	},
	{
		text: "Choose the Right Map",
		href: "https://flourish.studio/blog/choosing-the-right-map-type-for-your-data",
	},
];

const inspiration = [
	{
		text: "Observable Maps",
		href: "https://observablehq.com/@d3/gallery#maps",
	},
	{
		text: "React Graph Gallery",
		href: "https://www.react-graph-gallery.com",
	},
];

export const Footer = () => {
	return (
		<footer>
			<DaisyFooter className='bg-black p-6'>
				<div>
					<Title title='Dev Resources' />
					<Links links={devResources} />
				</div>
				<div>
					<Title title='Inspiration' />
					<Links links={inspiration} />
				</div>
				<CopyrightBlock />
			</DaisyFooter>
		</footer>
	);
};

const Title = ({ title }) => (
	<DaisyFooter.Title className='text-neutral-content'>
		{title}
	</DaisyFooter.Title>
);

const Links = ({ links }) => {
	return links.map(({ text, href }) => (
		<a
			key={text}
			href={href}
			alt={text}
			target='_blank'
			className='hover:text-primary'
		>
			{text}
		</a>
	));
};

const CopyrightBlock = () => {
	return (
		<div className='self-center'>
			<div className='w-40'>
				<SavageLogo />
			</div>
			<p>&copy; {new Date().getFullYear()} Savage Maps</p>
		</div>
	);
};
