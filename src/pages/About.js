import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about page">
      <h2>About Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quos
        fuga, repellat sit tempore exercitationem eos eius! Assumenda asperiores
        dolor voluptatum dolorum, perferendis voluptates ad autem, omnis
        nesciunt harum laboriosam.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
        incidunt placeat, soluta saepe porro itaque aliquid quae, beatae,
        tenetur minus maiores animi ex assumenda accusamus minima commodi
        consequuntur nisi magnam?
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default About;
