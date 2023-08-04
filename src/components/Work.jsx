import React from "react";
import WorkItem from "./WorkItem";

const Work = () => {
  const data = [
    {
      year: 2021,
      title: "Associate Software Engineer",
      duration: "1 Year",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facilis consequatur cumque delectus voluptatem pariatur alias quasi possimus, ipsam tenetur",
    },

    {
      year: 2022,
      title: "Dotnet Trainee",
      duration: "6 Months",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facilis consequatur cumque delectus voluptatem pariatur alias quasi possimus, ipsam tenetur",
    },

    {
      year: 2022,
      title: "Software Engineer",
      duration: "1 Year",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facilis consequatur cumque delectus voluptatem pariatur alias quasi possimus, ipsam tenetur",
    },
  ];
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => {
        return (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        );
      })}
    </div>
  );
};

export default Work;
