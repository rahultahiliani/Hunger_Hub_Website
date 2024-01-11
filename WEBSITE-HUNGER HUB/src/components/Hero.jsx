import React from "react";
import img from "../assets/img/hero.png";

const Hero = () => {
  return (
    <div className=" dark:bg-gray-900 dark:text-white">
      <div className="min-h-screen container flex flex-col justify-center md:flex-row md:justify-between items-center">
        {/* content section  */}
        <div className="w-full md:w-2/4 space-y-8 text-center md:text-start mt-24 md:mt-10">
          <div>
            <h3 className=" font-bold text-4xl md:text-5xl">Dive into our</h3>
            <h1 className=" font-bold text-5xl md:text-7xl mt-2 text-primary">
              Cheesy Bluster!
            </h1>
          </div>
          <p>
          "Satisfy your cravings and elevate your dining experience at Hunger Hub! Culinary excellence meets irresistible flavors, creating a feast for your senses. Indulge in a world of delectable delights where every bite is a celebration. Welcome to a gastronomic haven that caters to your every culinary desire."
          </p>
          <button className=" bg-primary py-2 px-4 text-white font-semibold rounded-md hover:scale-105 transition duration-300 ease-in-out">
            Order Now
          </button>
        </div>

        {/* img section */}
        <div>
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
