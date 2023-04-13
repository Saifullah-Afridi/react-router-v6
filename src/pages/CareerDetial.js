import React from "react";
import { Link, useLoaderData, useRouteError } from "react-router-dom";

const CareerDetial = () => {
  const career = useLoaderData();

  return (
    <div className="detail-page">
      <h2 key={career.id}>Career Detail : {career.title}</h2>
      <p>Starting Salary : {career.salary}</p>
      <p>Location :{career.location}</p>
      <div className="career-detail">
        <h3>Detail</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae,
          numquam sed molestias, fugit soluta libero aspernatur doloremque iste
          vero velit eius? Sit, tempore at delectus exercitationem quae beatae
          facere.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          dolore deleniti facilis, perspiciatis facere ducimus voluptatum labore
          adipisci nesciunt accusamus velit eius perferendis nostrum omnis
          architecto at in commodi minus?
        </p>
      </div>
    </div>
  );
};

export const CareerDetailLoder = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`http://localhost:4000/careers/${id}`);
  if (!response.ok) {
    throw new Error("could not find any data associated with the id given");
  }
  return await response.json();
};

export const CareerDetailError = () => {
  const error = useRouteError();
  return (
    <div className="error-page">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};
export default CareerDetial;
