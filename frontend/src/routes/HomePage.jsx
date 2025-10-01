import React from "react";
import "./HomePage.scss";
import bg from "../assets/bg.png";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt unde
            dolores sequi quam expedita exercitationem, excepturi esse eaque
            perspiciatis laborum?
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Received</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="img-container">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
