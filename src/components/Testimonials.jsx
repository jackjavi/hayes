import React from "react";
import Testimonial1 from "../Assets/testimonials/testimonial1.jpg";
import Testimonial2 from "../Assets/testimonials/testimonial2.jpg";
import Testimonial3 from "../Assets/testimonials/testimonial3.jpg";
import Testimonial4 from "../Assets/testimonials/testimonial4.jpg";

const Testimonials = () => {
  return (
    <div className="mt-2 h-[30vh]">
      <div className="grid grid-cols-4 gap-2 h-[100%] text-[11px]">
        <div className="h-[100%]">
          <img src={Testimonial1} alt="" className="h-[90%] object-cover" />
          <p>"Stop your research now. This is the design team to work with."</p>
        </div>
        <div>
          <img src={Testimonial2} alt="" className="h-[90%] object-cover" />
          <p>"The team at Mtembete interiro designs is first-rate."</p>
        </div>
        <div>
          <img src={Testimonial3} alt="" className="h-[90%] object-cover" />
          <p>
            "Mtembete and his team made this process wonderful for all of us."
          </p>
        </div>
        <div>
          <img src={Testimonial4} alt="" className="h-[90%] object-cover" />
          <p>"The whole thing came out better than we could believe."</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
