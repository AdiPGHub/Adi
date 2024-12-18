import "./globals.css";
import NavBar from "./NavBar";
// import Image from "next/image";

export const metadata = {
	title: "Aditya Pandey",
	description: "This is the portfolio website of Aditya Pandey",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link
				rel="icon"
				href="https://i.postimg.cc/3RGr13K4/portfolio.png"
				type="image/png"
				sizes="any"
			/>
			<body className="custom-scrollbar bg-[#282c34]">
				<NavBar />
				{children}
				{/* <div className="BodyContents mb-10 sm:mb-16 md:mb-0 md:ml-60"></div> */}
			</body>
		</html>
	);
}
