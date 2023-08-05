import React from "react";
import ProjectItem from "./ProjectItem";
import promptiaImage from "../assets/Promptopia.png";
import koonImage from "../assets/KoonEnterprise.png";
import amazonaImage from "../assets/amazona.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-12 sm:py-16"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo
        laudantium sapiente repellendus fugiat, quo eligendi omnis suscipit
        aliquam magni nesciunt, dicta voluptatibus dolorem deserunt id expedita
        doloremque saepe cupiditate.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={koonImage} title='Koon Enterprise' />
        <ProjectItem img={promptiaImage} title='Promptopia' />
        <ProjectItem img={amazonaImage} title='Amazona' />
        <ProjectItem img="https://webneel.com/daily/sites/default/files/images/daily/02-2014/10-beautiful-websites.jpg" title='Random' />
      </div>
    </div>
  );
};

export default Projects;
