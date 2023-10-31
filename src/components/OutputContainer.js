import React from "react";

const OutputContainer = ({ age }) => {
  return (
    <div className="md:text-8xl text-6xl font-poppins-bold-italic mb-4 tracking-tight">
      <h1>
        <span className="text-violet-600 mr-3">{age.years}</span>
        years
      </h1>
      <h1>
        <span className="text-violet-600 mr-3">{age.months}</span>
        months
      </h1>
      <h1>
        <span className="text-violet-600 mr-3">{age.days}</span>
        days
      </h1>
    </div>
  );
};

export default OutputContainer;
