import "./globals.css";
import { Inter } from "next/font/google";
import { Footer, Header } from "@/app/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Savage Maps",
	description: "Interactive maps powered by D3.js",
	openGraph: {
		title: "Savage Maps",
		siteName: "Savage Maps",
		description: "Interactive maps powered by D3.js",
		locale: "en_US",
		type: "website",
		url: "https://savagemaps.com",
		images: [
			{
				url: "/public/savage-maps-preview.png",
				width: 1600,
				height: 900,
				alt: "Savage Maps social preview image",
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' data-theme='acid'>
			<body className={`${inter.className} flex min-h-screen flex-col`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
