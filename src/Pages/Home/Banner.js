import React from "react";
import banner from "../../Pages/Home/Banner.css";
const Banner = () => {
  return (
    <div style={{"font-family": "'Poppins',sans-serif"}} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="w-2/4" src="https://i.ibb.co/WBpL69y/manufacture.jpg" />
        <div>
          <h1 className="text-5xl font-bold">
            <span className="text-primary">Bazaar</span> E-Commerce
          </h1>
          <p  className="py-6">
            Scrap tools ltd, based in bangladesh, MI, serves the tools sell,
            manufacture. They offer standard and custom parts and tools, with
            custom manufacturing services including machining, additive
            manufacturing, molding, cutting, extrusions, stamping, bending, and
            welding.
          </p>
          <button className="btn btn-primary">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
