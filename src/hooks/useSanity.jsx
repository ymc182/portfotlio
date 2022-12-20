import React from "react";
import { client } from "../lib/sanity";
export default function useSanity() {
	const [about, setAbout] = React.useState([]);

	React.useEffect(() => {
		const query = `*[_type == "about"]{
			title,
			description,
			imgUrl
		}`;

		client.fetch(query).then((data) => {
			setAbout(data);
		});
	}, []);

	return { about };
}
