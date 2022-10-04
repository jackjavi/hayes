import React from "react";
import HeaderPhoto from "../Assets/header_photo.jpg";

const Header = () => {
  return (
    <div className="pt-20">
      <div className="h-[300px] relative">
        <div>
          <img
            src={HeaderPhoto}
            alt=""
            className="h-[300px] w-full object-cover "
          />
        </div>

        <div className="flex flex-col bg-white py-2 px-4 absolute bottom-0 right-0 h-[200px] w-[50%]">
          <h2 className="flex-[3] font-monument text-[30px] text-amber-200">
            We make homes look beautiful
          </h2>
          <p className="flex-[6] text-[14px] font-playfair">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, neque quam. Aliquid animi ducimus dolor ipsum nobis
            dicta sunt ullam cum omnis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequatur, neque quam. Aliquid animi ducimus
            dolor ipsum nobis dicta sunt ullam cum omnis.
          </p>
          <div className="flex flex-[3] gap-2 text-[20px]">
            <button className="font-shock bg-amber-200 h-[60%] px-2 text-white">
              Let's chat
            </button>
            <button className="font-shock bg-amber-200 h-[60%] px-2 text-white">
              See our work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
