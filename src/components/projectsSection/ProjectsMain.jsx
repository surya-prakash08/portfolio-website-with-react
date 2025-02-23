import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ProjectsMain = () => {
  const projects = [
    {
      name: "Cloud Wings",
      year: "2025",
      align: "right",
      image: "images/website-img-1.png",
      link: "https://app.netlify.com/sites/cloudwingsbysurya/overview",
    },
    {
      name: "Password Manager",
      year: "2024",
      align: "right",
      image: "images/website-img-2.png",
      link: "https://passop-your-password-manager.netlify.app/",
    },
    {
      name: "EMI Calculator",
      year: "2025",
      align: "right",
      image: "images/website-img-3.png",
      link: "https://app.netlify.com/sites/emicalculatorbysurya/overview",
    },
    {
      name: "Weather App",
      year: "2025",
      align: "right",
      image: "images/website-img-4.png",
      link: "https://current-weather-appp.netlify.app/",
    },
  ];
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={index % 2 === 0 ? "left" : "right"}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
