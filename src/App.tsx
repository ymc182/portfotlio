import { Footer, NavBar } from "./components/Layout";
import { Projects, Home, About, Skills, Header } from "./pages";

function App() {
	return (
		<div>
			<NavBar />
			<Header />
			<About />
			{/* 			<Projects />
			<Home />
			<Skills />

			<Footer /> */}
		</div>
	);
}

export default App;
