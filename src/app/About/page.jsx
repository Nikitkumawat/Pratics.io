import React from "react";
import About from "../component/About";
import Service from "../component/Service";

function page() {
  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <About />
      </div>
      <Service />
    </>
  );
}

export default page;
