import Navigation from "./Navigation";
import patternImg from "/pattern.svg";
import heroImg from "/images/Hero.png";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="relative h-[100%] pb-6">
      <div>
        <img
          src={patternImg}
          width={100}
          height={100}
          className="w-50 h-50 absolute left-[-10px] top-20 z-0"
          alt="Pattern Image"
        />
      </div>
      <div className="flex flex-col  justify-evenly">
        <div className="">
          <Navigation />
        </div>
        <div className="w-10/12 mx-auto flex items-center justify-center max-md:flex-col z-20  ">
          <div className="flex flex-col items-center justify-center w-11/12 mx-auto md:flex-row md:w-full py-2 ">
            <div className="basis-6/12 flex flex-col items-center md:items-start gap-y-3 md:gap-y-6 lg:gap-y-9">
              <h1 className="hero-header">Virtual healthcare for you</h1>
              <p className="hero-subheader">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <div className="mb-16">
                <Button label="Consult today" />
                {/* <Button label="Learn more" white="white" /> */}
              </div>
            </div>
            <div className="basis-7/12 max-w-[80%] sm:max-w-[65%]">
              <img
                src={heroImg}
                width={550}
                height={550}
                className="w-full bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
