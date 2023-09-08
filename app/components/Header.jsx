"use client";
import { Navbar } from "react-daisyui";
import { useTheme } from "react-daisyui";

import { SavageLogo } from "./SavageLogo";

export const Header = () => {
	const theme = useTheme();

	console.log("theme: ", theme);

	return (
		<header>
			<Navbar className='bg-black p-6'>
				<Navbar.Start>
					<div className='w-36'>
						<SavageLogo />
					</div>
				</Navbar.Start>
			</Navbar>
		</header>
	);
};
