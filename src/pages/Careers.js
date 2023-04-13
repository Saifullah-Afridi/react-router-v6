import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
  const careersData = useLoaderData(careerLoader);
  console.log(careersData);
  return (
    <div className="page post">
      {careersData.map((ele) => {
        return (
          <Link to="/" key={ele.id}>
            <p>{ele.title}</p>
            <p>{ele.location}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Careers;

export const careerLoader = async () => {
  const response = await fetch("http://localhost:4000/careers");
  console.log(response);
  return response.json();
};
