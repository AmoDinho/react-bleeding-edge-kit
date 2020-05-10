import React from "react";

const HeadingOne = ({ className, children }) => {
  return <h1 className={`${className} text-xl`}>{children}</h1>;
};

export default HeadingOne;
