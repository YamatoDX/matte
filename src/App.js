import React,{useState} from "react";
import {BrowserRouter as Router} from "react-router-dom"

export default function App(){
  const arr = ["apple","orange"];
  return(
    <>
    {arr.map(each => (
      <div key={each}>
        {each}
      </div>
    ))}
    </>
  )
}