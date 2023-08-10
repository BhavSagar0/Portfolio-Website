import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

const Main = () => {
  const imageRef = useRef(null);
  const [overlayHeight, setOverlayHeight] = useState(0);

  useEffect(() => {
    const setHeight = () => {
      if (imageRef.current) {
        const imageHeight = imageRef.current.clientHeight;
        setOverlayHeight(imageHeight);
      }
    };
    window.addEventListener("resize", setHeight);
    setHeight();
  }, []);

  return (
    <div id="main">
      <img
        ref={imageRef}
        className="w-full sm:h-screen sm:object-cover sm:object-left-bottom object-scale-down "
        src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt=""
        srcset=""
      />

      <div
        style={{ height: `${overlayHeight}px` }}
        className={`w-full absolute top-0 left-0 bg-white/50`}
      >
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-4xl text-3xl font-bold text-gray-800">
            I'm Bhav Sagar
          </h1>
          <h2 className="flex sm:text-2xl text-xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="div"
              speed={50}
              cursor={true}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 sm:max-w-[200px] max-w-[150px] w-full">
            <FaTwitter size={20} className="cursor-pointer" />
            <a href="https://www.instagram.com/bhav.sagar/" target="_blank">
              <FaInstagram size={20} className="cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/bhavsagar/" target="_blank">
              <FaLinkedinIn size={20} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
