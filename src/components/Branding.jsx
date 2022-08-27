import Link from "next/link";

export const Branding = () => {
	return (
		<Link href='/'>
			<a className='inline-block'>
				<h1 className='font-bold text-lg text-transparent bg-gradient-to-r from-blue-600 to-gray-400 bg-clip-text'>
					KARTELAND
				</h1>
			</a>
		</Link>
	);
};
