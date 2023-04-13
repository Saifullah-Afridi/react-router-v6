import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="page">
      <h1>Error 404</h1>
      <p>Page Not Found</p>

      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default PageNotFound;
