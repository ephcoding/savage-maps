import { IoShapesOutline } from "react-icons/io5";
import { FaDrawPolygon, FaGlobeAmericas } from "react-icons/fa";
import { SiConvertio } from "react-icons/si";
import { MdGradient } from "react-icons/md";

export const NAV_ITEMS = [
	{
		name: "shapes",
		href: "svg-shapes",
		description: "basic shapes.  like babies do.",
		icon: IoShapesOutline,
	},
	{
		name: "maps",
		href: "svg-maps",
		description: "visualize your place in the world.",
		icon: FaGlobeAmericas,
	},
	{
		name: "convert",
		href: "converting-to-svg",
		description: "convert from one file or coordinate system to another.",
		icon: SiConvertio,
	},
	{
		name: "gradients",
		href: "svg-gradients",
		description: "get fancy.",
		icon: MdGradient,
	},
];
