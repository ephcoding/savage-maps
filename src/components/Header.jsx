import { Branding, Navigation } from ".";

export const Header = ({ pageName }) => {
	return (
		<header className='mb-20'>
			<div className='container flex justify-between mx-auto items-center'>
				<Branding />
				<Navigation />
			</div>
			<h2 className='text-center text-2xl mt-20 uppercase'>{pageName}</h2>
		</header>
	);
};
