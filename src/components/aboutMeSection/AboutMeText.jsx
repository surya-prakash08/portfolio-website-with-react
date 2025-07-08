import React from "react";
import { Link } from "react-scroll";
const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>

      <p className="text-white ">
        {" "}
        I am a Dynamic Frontend Developer with 3+ years of experience at Infosys
        Limited, delivering engaging web applications and enhancing user
        experiences. Proficient in JavaScript, HTML5, CSS, React.js , Node.js,
        Express, RESTful API and Redux Toolkit, demonstrating a strong ability
        to implement innovative solutions. Having 6 months of experience in
        Automated Testing with Selenium and Java. I am committed to continuous
        improvement and staying updated with the latest trends in frontend
        technology.
      </p>
      <Link
        to="projects"
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}
        className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan"
      >
        My Projects
      </Link>
    </div>
  );
};

export default AboutMeText;
