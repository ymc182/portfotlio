import React from "react";
import AppWrapper from "../../Wrapper/AppWrapper";
import "./Projects.scss";
import useSanity from "../../hooks/useSanity";
import { urlFor } from "../../lib/sanity";
import { motion } from "framer-motion";
//define the type of the props
type IProjectSchema = {
	title: string;
	description: string;
	projectLink: string;
	codeLink: string;
	imgUrl: string;
	tags: string[];
};

function Projects() {
	const { projects } = useSanity();
	return (
		<div className="app__projects">
			<h2 className="head-text">
				We know that <span>Good Built Quality</span>
				<br /> means <span>Good Business</span>
			</h2>
			<div className="app__projects-cards-container">
				{projects.map((project: IProjectSchema, index: number) => {
					return (
						<div key={`${project.title}-${index}`} className="app__projects-card">
							<div className="app__projects-img-container">
								<motion.div
									whileInView={{
										opacity: [0, 1],
										transition: {
											duration: 1,
											type: "tween",
										},
									}}
									whileHover={{
										//look at mouse position
										x: 0,
										y: 0,
										rotate: 360,
										transition: {
											duration: 0.5,
											type: "tween",
										},
									}}
									className="app__projects-card-img"
								>
									<img src={urlFor(project.imgUrl)} />
								</motion.div>
							</div>
							<a href={project.projectLink} target="_blank">
								{project.title}
							</a>
							<p className="p-text">{project.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default AppWrapper(Projects, "Projects", "");
