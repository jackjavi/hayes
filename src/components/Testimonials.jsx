import React from "react";
import Testimonial1 from "../Assets/testimonials/testimonial1.jpg";
import Testimonial2 from "../Assets/testimonials/testimonial2.jpg";
import Testimonial3 from "../Assets/testimonials/testimonial3.jpg";
import Testimonial4 from "../Assets/testimonials/testimonial4.jpg";

const Testimonials = () => {
  return (
    <div className="mt-2 h-[30vh]">
      <div className="grid grid-cols-4 gap-2 h-[100%]">
        <div className="h-[100%]">
          <img src={Testimonial1} alt="" className="h-full object-cover" />
        </div>
        <div>
          <img src={Testimonial2} alt="" className="h-full object-cover" />
        </div>
        <div>
          <img src={Testimonial3} alt="" className="h-full object-cover" />
        </div>
        <div>
          <img src={Testimonial4} alt="" className="h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
