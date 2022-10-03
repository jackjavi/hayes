import React from "react";
import HeaderPhoto from "../Assets/header_photo.jpg";

const Header = () => {
  return (
    <div className="pt-20 h-screen">
      <div className="h-[60vh] ">
        <img
          src={HeaderPhoto}
          alt=""
          className="h-[60vh] w-full object-cover "
        />
        <div className="bg-white absolute top-[37vh] right-0 h-[40%] w-[50%]">
          <h2 className="font-playfair text-[36px] text-amber-200">
            We make homes look beautiful
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, neque quam. Aliquid animi ducimus dolor ipsum nobis
            dicta sunt ullam cum omnis.
          </p>
          <div>
            <button>Let's chat</button>
            <button>See our work</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
