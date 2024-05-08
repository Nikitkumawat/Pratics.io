import React from "react";

function Banner() {
  return (
    <div className="NewHero_heroContainer__M77cV" id="top">
      {/* <img
        alt="herobg"
        loading="lazy"
        width="100"
        height="100"
        className="NewHero_vid__a5nxX"
        style={{ color: "transparent" }}
        src="images/banner.jpg"
      /> */}
      <video autoPlay loop className="NewHero_vid__a5nxX">
        <source
          src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4"
          type="video/mp4"
        />
      </video>
      <div className="NewHero_heroLightContent__H6F5T">
        <h1 className="NewHero_sectionHeadingLight__wqJ1M">
          We are at the forefront of AI
        </h1>
        <p className="NewHero_subHeadingLight__i7EVe">
          From Conserving Wildlife to Automatically Generating Caricatures
          <span style={{ fontWeight: "bold" }}>We Do It All</span>
        </p>
        <a href="about.html">
          <button className="Buttons_primaryButton__TNkjJ">Learn More</button>
        </a>
      </div>
    </div>
  );
}

export default Banner;
