import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ updateFilter, updateSort }) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <br/>
      <br/>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <br/>
      <br/>
      <select onChange={updateFilter} name="greased">
        <option value="ALL">Please choose an option...</option>
        <option value="GREASED">Greased</option>
        <option value="NOT-GREASED">Not Greased</option>
      </select>
      <select onChange={updateSort} name="sort">
        <option value="none">Please choose an option...</option>
        <option value="name">Sort by name</option>
        <option value="weight">Sort by weight</option>
      </select>
    </div>
  );
};

export default Nav;