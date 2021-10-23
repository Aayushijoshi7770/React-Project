import React from "react";
import "./MainContent.css";
import Capture from "./Capture.PNG";
import Capture1 from "./Capture1.PNG";
import Capture3 from "./Capture3.PNG";

export default function Home() {
  return (
    <div id="main" className="Home-wrapper">
      <div className="row">
        <div className="col-5">
          <h1 id="header">
            Spend Less Time
            <br />
            for Great Design Result
          </h1>
          <p id="padder">
            Create a beautiful & awesome marketing website and <br/>landing page as
            fast as possible with Ehya.
          </p>
          <button  id="one">Buy Ehya UI Kit</button>
          <button className="two" id="two"> Download Sample</button>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img  id="image1" src={Capture3}></img>
        </div>
      </div>
    </div>
  );
}
