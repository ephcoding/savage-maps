import Link from "next/link";

export const Branding = () => {
	return (
		<Link href='/'>
			<a className='inline-block'>
				<h1 className='font-bold text-lg text-white'>KARTELAND</h1>
			</a>
		</Link>
	);
};
