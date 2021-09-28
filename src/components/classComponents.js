import React from "react";
import "../styles/classComponents.css"

import Cat from "./classComponents/cat";
import Dog from "./classComponents/dog";
import Elephant from "./classComponents/elephant";
import Lion from "./classComponents/lion";
import Tiger from "./classComponents/tiger";
import Deer from "./classComponents/deer";

class ClassComponents extends React.Component {
  render() {
    return (
      <>
        <div className="classComponents">
          <Cat />
          <Dog />
          <Elephant />
          <Tiger />
          <Lion />
          <Deer />
        </div>
      </>
    );
  }
}

export default ClassComponents;
