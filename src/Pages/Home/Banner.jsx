import { motion } from "motion/react";
import center from "/src/assets/center.jpg";
import image1 from "/src/assets/image1.jpg";
import image2 from "/src/assets/image2.jpg";
import image3 from "/src/assets/image3.jpg";
import image4 from "/src/assets/image4.jpg";
import image5 from "/src/assets/image5.jpg";

const Banner = () => {
  return (
    <div className="m-10 flex h-screen">
      <div className="space-y-8 flex-1 md:ml-20 mt-9">
        <h1 className="lg:text-7xl md:text-5xl text-2xl font-bold text-[#05033b]">
          Find Jobs, <br />
          Hire Creatives
        </h1>
        <p className="text-gray-500">
          Each month, more than 3 million job seekers turn to website in their
          search for work, making over 140,000 applications every single day
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          <button className="btn hover:bg-[#05033b] bg-blue-600 text-white border-none w-[150px]">
            Get Started
          </button>
          <button className="btn border-blue-600 text-blue-600 w-[150px]">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1">
        <div className=" hidden lg:grid relative">
          <div className="absolute bg-gray-100 h-52 w-52 rounded-full right-28 top-40"></div>
          <div className="absolute bg-gray-100 h-44 w-44 rounded-full right-[260px] top-8"></div>
          <div className="absolute bg-gray-100 h-28 w-28 rounded-full right-[390px] top-44"></div>
          {/* images */}
          <motion.img
            src={center}
            alt=""
            className="absolute h-58 w-58 rounded-full right-48 top-40 z-10"
            animate={{
              y: [-30, 20, -30],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={image1}
            alt=""
            className="absolute h-32 w-32 rounded-full right-5 top-48 "
            animate={{
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={image2}
            alt=""
            className="absolute h-38 w-38 rounded-full right-[400px] top-10 "
            animate={{
              x: [0, 40, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={image3}
            alt=""
            className="absolute h-28 w-28 rounded-full right-32 "
            animate={{
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={image4}
            alt=""
            className="absolute h-24 w-24 rounded-full right-38 top-[420px] "
            animate={{
              x: [-20, 20, -20],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={image5}
            alt=""
            className="absolute h-32 w-32 rounded-full right-[400px] top-[350px] "
            animate={{
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
