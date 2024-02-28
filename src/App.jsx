import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import blop from "./assets/blop.png";
import mainimg from "./assets/mainimg.svg";
import "animate.css";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container home-container">
        <div className="home-text">
          <h1 className="animate__bounce">Welcome to our website!</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium asperiores temporibus, rem fuga quae nam totam ea maxime
            libero tempora labore quos officiis repellat quia ipsum nesciunt
            explicabo at! Iusto sequi repellat id autem incidunt pariatur
            repellendus vero, architecto, et soluta, quae deserunt consequatur
            accusantium. Veritatis labore blanditiis possimus unde non?
            Necessitatibus fugiat, aperiam exercitationem id hic, velit commodi
            eius ipsum corrupti nihil assumenda eos quos eveniet veniam quia.
            Deleniti temporibus quis iure assumenda alias. Cupiditate deleniti
            maiores pariatur unde libero beatae, ratione quaerat eos accusamus
            autem porro rem, veritatis doloribus molestias aspernatur magni
            voluptatum dicta officiis aut, nesciunt quibusdam?
          </p>
        </div>
        <div className="home-images">
          <img src={blop} alt="blop" className="blop " />
          <img src={mainimg} alt="main" className="main-img animate__swing" />
        </div>
      </div>
    </>
  );
};

export default App;
