import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import useSanity from "../../hooks/useSanity";
import { urlFor } from "../../lib/sanity";
export default function About() {
	const { about } = useSanity();

	return (
		<>
			<h2 className="head-text">
				I know that <span>Good Development</span>
				<br /> means <span>Good Business</span>
			</h2>
			<div className="app__profiles">
				{about.map((about, index) => {
					return (
						<motion.div
							whileInView={{
								opacity: 1,
							}}
							whileHover={{
								scale: 1.1,
							}}
							transition={{
								duration: 0.5,
								type: "tween",
							}}
							className="app__profile-item"
							key={`${about.title}-${index}`}
						>
							<img src={urlFor(about.imgUrl)} alt={about.title} />
							<h2 className="bold-text" style={{ marginTop: "20px" }}>
								{about.title}
							</h2>
							<p className="p-text" style={{ marginTop: "10px", wordWrap: "break-word" }}>
								{about.description}
							</p>
						</motion.div>
					);
				})}
			</div>
		</>
	);
}
