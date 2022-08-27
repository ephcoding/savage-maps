import { Header } from "./Header";

export const Layout = ({ pageName, children }) => {
	return (
		<div className='min-h-screen p-4 flex flex-col text-white bg-gradient-to-br from-gray-800 to-gray-600'>
			<Header pageName={pageName} />
			<main className='container mx-auto grow flex flex-col'>{children}</main>
		</div>
	);
};
