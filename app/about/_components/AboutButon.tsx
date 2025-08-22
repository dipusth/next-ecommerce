"use client";
import React from "react";
import TestComponent from "./TestComponent";

const AboutButon = () => {
  const handleClick = () => {
    console.log("About clicked");
  };
  console.log("this is about button");
  return (
    <>
      <TestComponent />
      <button
        className="bg-primary text-white rounded-md py-2 px-5"
        onClick={handleClick}
      >
        AboutButon
      </button>
    </>
  );
};

export default AboutButon;
