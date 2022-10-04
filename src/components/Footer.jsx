import React from "react";

const Footer = () => {
  return (
    <div className="h-[300px] bg-gray-200 mt-8 grid grid-cols-2 gap-4 font-shock">
      <div className="flex flex-col justify-center items-end">
        <div>
          <h1 className="text-[20px] text-purple-900  font-extrabold ml-2">
            MTEMBETE.
          </h1>
        </div>
        <div className="flex flex-col items-end">
          <span>Homepage</span>
          <span>Portfolio</span>
          <span>Our process</span>
          <span>Our design team</span>
          <span>Contact us</span>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-16">
        <span>Mtembete interiorDesign</span>
        <span>00100-Nairobi</span>
        <span>(+254) 708 313 804</span>
        <span>Monday - Friday</span>
        <span>8:00am to 5:00pm EAT</span>
        <span>
          <button className="font-shock bg-amber-200 px-2 py-1 text-[16px] text-white">
            Let's chat
          </button>
        </span>
      </div>
    </div>
  );
};

export default Footer;
