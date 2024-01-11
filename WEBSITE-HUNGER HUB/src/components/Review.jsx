import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../layouts/ReviewCard";

const Review = () => {
  const data = [
    {
      id: 1,
      desc: "The burgers at Flavor Haven are a symphony of savory perfection! Each bite is a burst of juicy, premium beef complemented by fresh, quality ingredients. Creative options abound, offering a gourmet experience. From classic to innovative, Flavor Haven's burgers redefine culinary delight a must try for burger enthusiasts!",
      name: "Rajiv Sharma",
    },
    {
      id: 2,
      desc: "Indulged in the finest burgers at Flavor Haven—pure perfection! Every bite bursts with premium beef, fresh ingredients, and mouthwatering creativity. From classic to gourmet, each burger is a flavor symphony. Impeccable quality, impeccable taste—Flavor Haven's burgers redefine satisfaction. A must-try for burger aficionados!.",
      name: "Akshay Yadav",
    },
    {
      id: 3,
      desc: "Mouthwatering bliss! The burgers at Flavor Haven redefine culinary excellence. Each bite is a symphony of flavors—juicy, perfectly seasoned, and a testament to quality ingredients. From classic to gourmet, the menu caters to every palate. Flavor Haven is where burger cravings find fulfillment. A true delight for the senses!",
      name: "Rajat Singh",
    },
    {
      id: 4,
      desc: "The burgers at Flavor Haven are culinary marvels! Each bite is a symphony of flavors, featuring premium quality beef and a medley of fresh, locally sourced ingredients. The menu's creativity shines, offering a diverse range from classic to gourmet. A must-try for burger enthusiasts seeking an unparalleled taste experience!",
      name: "Rahul Tahiliani",
    },
    {
      id: 5,
      desc: "Absolutely delectable burgers at Flavor Haven! Each bite is a symphony of flavors—juicy, perfectly seasoned, and nestled in a fresh, pillowy bun. The menu's creativity shines, offering both classic and gourmet options. Impeccable quality and taste, making Flavor Haven the go-to for an unparalleled burger experience. A culinary delight!",
      name: "Sahil Gulliya",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="dark:bg-gray-900 dark:text-secondary">
      {/* heading  */}
      <h1 className="font-semibold text-4xl text-center text-secondary pt-24">
        Our Review
      </h1>

      {/* review card section  */}
      <div className=" py-10 mx-4 md:mx-0">
        <Slider {...settings}>
          {data.map((item) => (
            <ReviewCard key={item.id} name={item.name} desc={item.desc} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
