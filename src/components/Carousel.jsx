import { useState } from "react";
import { feedback } from "../constants";
import pattern from "/pattern.svg";
import nextButon from "/carousel/next.svg";
import prevButon from "/carousel/prev.svg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFeedback = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedback.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevFeedback = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedback.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-[85%] mx-auto relative py-12">
      <img src={pattern} className="absolute bottom-40 -left-[50px]" />
      <div className="bg-gradient-to-r from-[#67C3F3] to-[#5A98F2] px-10 max-xxs:px-2 py-20 rounded-2xl relative">
        <img src={pattern} className="absolute top-0 right-0" />
        <h1 className="feedback-header pb-4">What our customers are saying</h1>
        <div className="py-[1px] rounded-full w-12 mx-auto bg-white mb-10"></div>
        <div className="relative w-[90%] mx-auto">
          <div className="flex gap-2">
            {feedback.map((item, index) => (
              <div
                key={index}
                style={{
                  display: index === currentIndex ? "block" : "none",
                }}
              >
                <div className="flex justify-between items-center max-lg:flex-col gap-y-10">
                  <div className="flex gap-x-12 items-center max-md:flex-col max-sm:gap-y-5">
                    <div>
                      <img
                        src={item.clientImg}
                        alt={item.client}
                        width={100}
                        height={100}
                        className="rounded-full bg-cover h-20 w-20"
                      />
                    </div>
                    <div className="text-white text-center sm:text-left">
                      <h3 className="text-sm md:text-base">{item.client}</h3>
                      <p className="text-xs md:text-sm opacity-80">
                        {item.position}
                      </p>
                    </div>
                  </div>
                  <div className="w-[90%] sm:w-[75%] md:w-[60%] overflow-hidden h-[150px] flex items-center">
                    <p className="text-xs sm:text-sm md:text-base text-white text-justify">
                      <q>{item.clientFeedback}</q>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center w-[20%] mx-auto justify-between py-5 max-md:w-[50%]">
        <img
          src={prevButon}
          className="cursor-pointer"
          onClick={prevFeedback}
        />
        <div className=" flex gap-x-1.5">
          {feedback.map((_, index) => (
            <span
              key={index}
              className={`inline-block h-2 w-2 rounded-full ${
                index === currentIndex
                  ? "bg-[#5B9BF3]"
                  : "bg-[#5B9BF3] opacity-60"
              } transition-opacity duration-500 ease-in-out`}
            ></span>
          ))}
        </div>
        <img
          src={nextButon}
          className="cursor-pointer"
          onClick={nextFeedback}
        />
      </div>
    </div>
  );
};

export default Carousel;
