import Link from "next/link";
import { NAV_ITEMS } from "../constants";

export const Navigation = () => {
	return (
		<nav className='flex items-start'>
			{NAV_ITEMS.map(({ name, href }) => (
				<Link href={href} key={name}>
					<a className='text-sm ml-4 hover:text-blue-600'>{name}</a>
				</Link>
			))}
		</nav>
	);
};
