import React from 'react'
import "./Trademark.css"

export default function Trademark() {
  return (
    <>
    <div className="d-flex flex-column flex-nowrap">
      <div className="d-flex flex-row justify-content-center">
        <div className="d-flex justify-content-center">
            <img className="logo" src="https://assets.stickpng.com/images/6095213753a8bf00040ff3a5.png" alt="Riot Games logo" />
        </div>

        <div className="d-flex justify-content-start">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3sUecBzN31mHa_kalbsFmbOW-WukMOQUM8Oz9HAlKCzFVIKI" alt="Valorant logo"/>
        </div>
      </div>

    
    
    <div className="d-flex justify-content-center my-10">
      <div className="d-flex flex-column">
        <center>The given text is just to replicate the look from original site</center>
        <div>© 2023 Riot Games, Inc. Riot Games, VALORANT, and any associated logos are trademarks, service</div>
        <center>marks, and/or registered trademarks of Riot Games, Inc.</center>
      </div>
    </div>

    </div>


    {/* Privacy Policy, Terms of Service , Cookie Preferences */}
    <center>
    <div class="btn-group my-5" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-dark">Privacy Policy</button>
    <button type="button" class="btn btn-dark">Terms of Service</button>
    <button type="button" class="btn btn-dark">Cookie Preferences</button>
    </div>
    </center>

    
    <center>
      <img src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt67f8b7843bd8166a/5e71600f353d6343a753219d/na-esrb.png?&height=100&disable=upscale" alt="Teen esrb logo"/>
    </center>
    </>
  )
}
