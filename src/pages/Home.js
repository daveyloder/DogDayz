import React from "react";
import Jumbotron from "../components/JumbotronComponent";
import WelcomeBlock from "../components/WelcomeBlockCompoent";

const Home = () => {
  return (
    <div>
      <Jumbotron heading="DogDayz" subheading="Where every dog has it's day!" />
      {/* Welcome Block */}
     <WelcomeBlock />
      {/* Services Block */}
      <div className="container p-5">
        <div className="row text-center">
          <div className="col">
            <h1>Services</h1>
            <h3 className="pt-1">
              From pickups, to boarding, we got you covered!
            </h3>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-4">
            <img src="https://via.placeholder.com/300" alt="service photo 1" />
          </div>
          <div className="col-4">
            <img src="https://via.placeholder.com/300" alt="service photo 2" />
          </div>
          <div className="col-4">
            <img src="https://via.placeholder.com/300" alt="service photo 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
