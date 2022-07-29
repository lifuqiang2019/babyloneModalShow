import React, {
  FC,
  Suspense,
} from "react";
import "./quesInfo.css";


const ThreeDemo1: FC<{}> = () => {
  return (
    <>
      <div id="container">
        <div style={{ overflow: 'hidden', width: '818px' }}>

        </div>
      </div>
      <div id="menu">
        <button id="table">TABLE</button>
        <button id="sphere">SPHERE</button>
        <button id="helix">HELIX</button>
        <button id="grid">GRID</button>
      </div>
    </>
  );
};
export default ThreeDemo1;