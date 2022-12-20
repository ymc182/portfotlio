import { useEffect } from "react";
import { Footer, NavBar } from "./components/Layout";
import { Projects, Home, About, Skills, Header } from "./pages";

function App() {
	useEffect(() => {
		console.log("check");
		var docWidth = document.documentElement.offsetWidth;

		[].forEach.call(document.querySelectorAll("*"), function (el) {
			if (el.offsetWidth > docWidth) {
				console.log(el, el.offsetWidth, ">", docWidth);
			}
		});
	}, []);

	return (
		<div>
			<NavBar />
			<Header />
			{/* 	<About /> */}
			{/* 			<Projects />
			<Home />
			<Skills />

			<Footer /> */}
		</div>
	);
}

export default App;
