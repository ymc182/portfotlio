import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import useSanity from "../../hooks/useSanity";
import { urlFor } from "../../lib/sanity";
import AppWrapper from "../../Wrapper/AppWrapper";
import { IAboutSchema } from "../../constants/types";

function About() {
	const { about } = useSanity();

	return (
		<>
			<div className="app__about">
				<h2 className="head-text">
					Learning <span>New Things</span>
					<br /> every <span>day</span>
				</h2>
				<div className="app__profiles">
					{about.map((about: IAboutSchema, index: number) => {
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
			</div>
		</>
	);
}

export default AppWrapper(About, "Experience", "");
