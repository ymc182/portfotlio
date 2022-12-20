import React from "react";
import { client } from "../lib/sanity";
export default function useSanity() {
	const [about, setAbout] = React.useState([]);
	const [projects, setProjects] = React.useState([]);
	React.useEffect(() => {
		const queryAbout = `*[_type == "about"]{
			title,
			description,
			imgUrl
		}`;
		const queryProjects = `*[_type == "projects"]{
			title,
			description,
			projectLink,
			codeLink,
			imgUrl,
			tags
		}`;
		client.fetch(queryAbout).then((data) => {
			setAbout(data);
		});
		client.fetch(queryProjects).then((data) => {
			setProjects(data);
		});
	}, []);

	return { about, projects };
}
