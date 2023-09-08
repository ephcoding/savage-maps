import "./globals.css";
import { Inter } from "next/font/google";
import { Footer, Header } from "@/app/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Savage Maps",
	description: "Interactive maps powered by D3.js",
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
