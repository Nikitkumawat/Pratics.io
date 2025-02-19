import React from "react";

function About() {
  return (
    <div className="NewAbout_aboutContainer__G3n_a">
      <div className="NewAbout_headingCont__ZZXiR">
        <h1 className="NewAbout_heading__Ae5Tt">About Us</h1>
        <div className="NewAbout_underline__uXrIm"></div>
      </div>
      <div className="NewAbout_aboutContent__kZs2M">
        <div id="heroImg" className="NewAbout_imgCont__Y_fwz">
          <img
            alt="about"
            fetchPriority="high"
            width="400"
            height="400"
            className="NewAbout_black_white__d1w4b"
            style={{ color: "transparent" }}
            src="images/aboutLatest.jpg"
          />
        </div>
        <div className="NewAbout_section2Content__9gvQg">
          <h3 className="NewAbout_section2Txt__G3n8n">Welcome To LENS</h3>
          <p className="NewAbout_section2par__XgbEk">
            We put our hearts, souls and sweat into designing and developing
            custom AI - powered solutions for your business so you don&#x27;t
            have to.
          </p>
          <a href="about.html">
            <button className="NewAbout_aboutBtn__9mWL9">
              <div>Learn More</div>
              <span></span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
