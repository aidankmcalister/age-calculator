import { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import OutputContainer from "./components/OutputContainer";
import calculateAge from "./scripts/calculateAge";
import arrowIcon from "./assets/imgs/icon-arrow.svg";

function App() {
  const [age, setAge] = useState({ days: 0, months: 0, years: 0 });

  const handleCalculateAge = () => {
    const calculatedAge = calculateAge();
    setAge(calculatedAge);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <div className="md:min-w-[35%] min-h-fit min-w-fit shadow-lg rounded-3xl bg-gray-50 p-5 rounded-br-[8rem] m-5 flex justify-center flex-col">
        <InputContainer />
        <div className="flex justify-center items-center mx-1 my-6">
          <hr className="w-full" />
          <button
            className="bg-violet-600 rounded-full p-5"
            onClick={handleCalculateAge}>
            <img src={arrowIcon} alt="Arrow Icon Button" width="70" />
          </button>
          <hr className="w-full" />
        </div>
        <OutputContainer age={age} />
      </div>
    </div>
  );
}

export default App;
