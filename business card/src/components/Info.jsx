import React from 'react'
import Photo from "../assets/sera photo.png"
import Mail from "../assets/Icon.png"
import './info.css'

// import ReactDOM  from "react-dom"

export default function Info(){
  return(
  <>
  <img className = "info_img"src={Photo} alt="My pic" />
  <div className="head">
  <h2>Sera Susan Koshy</h2>
  <h3 className='occupation'>Frontend Developer</h3>
  <h5 className='website'>serasusan.com</h5>
  </div>
  <div>
    <button>< img className='button-mail' src={Mail}></img>Email</button>
  </div>
  </>
  )
}

