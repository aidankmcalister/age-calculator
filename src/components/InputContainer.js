import React from "react";

const InputContainer = () => {
  return (
    <div className="">
      <div className="flex md:text-xl">
        <div className="flex flex-col m-2">
          <label
            className="text-gray-500 md:text-xl text-xs font-poppins-bold tracking-widest"
            htmlFor="day">
            DAY
          </label>
          <input
            id="dayInput"
            className="w-24 border border-gray-400 rounded-lg p-2  md:w-32"
            type="text"
            name="day"
          />
        </div>
        <div className="flex flex-col m-2">
          <label
            className="text-gray-500 md:text-xl text-xs font-poppins-bold tracking-widest"
            htmlFor="month">
            MONTH
          </label>
          <input
            id="monthInput"
            className="w-24 border border-gray-400 rounded-lg p-2  md:w-32"
            type="text"
            name="month"
          />
        </div>
        <div className="flex flex-col m-2">
          <label
            className="text-gray-500 md:text-xl text-xs font-poppins-bold tracking-widest"
            htmlFor="year">
            YEAR
          </label>
          <input
            id="yearInput"
            className="w-24 border border-gray-400 rounded-lg p-2  md:w-32"
            type="text"
            name="year"
          />
        </div>
      </div>
    </div>
  );
};

export default InputContainer;
