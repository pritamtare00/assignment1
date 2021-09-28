import React from "react";
import "../styles/funComponents.css"

import Sparrow from "./funComponents/sparrow";
import Crow from "./funComponents/crow";
import Peacock from "./funComponents/peacock";
import Owl from "./funComponents/owl";
import Parrot from "./funComponents/parrot";
import Eagle from "./funComponents/eagle";

const FunComponents = () => {
  return (
    <>
      <div className="funComponents">
        <Sparrow />
        <Crow />
        <Peacock />
        <Owl />
        <Parrot />
        <Eagle />
      </div>
    </>
  );
};

export default FunComponents;
