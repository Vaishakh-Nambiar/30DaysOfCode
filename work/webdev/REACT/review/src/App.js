// using REACT-ICONS for this project

import React from "react";
import Review from "./Review";
import { FaGithub } from "react-icons/fa";
// it is actually a component

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>
            {/* <FaGithub /> */}
            reviews
          </h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
