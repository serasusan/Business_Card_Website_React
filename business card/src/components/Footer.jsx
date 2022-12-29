import React from "react"
import github from "../assets/Github.png"
import Instagram from "../assets/Instagram icon.png"
import Facebook from "../assets/Facebook icon.png"
import LinkedIn from "../assets/LinkedIn icon.png"
import Twitter from "../assets/Twitter icon.png"
import "./Footer.css"


// import ReactDOM  from "react-dom"

export default function Footer(){
  return(
  <div className="Logos">
  <div className="grp">
  <img src={ github } alt="Github" class="logo"></img>
  <img src={ Instagram } alt="Instagram" class="logo"></img>
  <img src={ Facebook } alt="Facebook" class="logo"></img>
  <img src={ LinkedIn } alt="LinkedIn" class="logo"></img>
  <img src={ Twitter } alt="Twitter" class="logo"></img>
  </div>
  </div>
  )
}

