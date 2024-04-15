import { services } from "../constants";
import bg from "/services/bg/bg.svg";
import pattern from "/pattern.svg";
import Button from "../components/Button";

const OurServices = () => {
  return (
    <div className="relative h-[100%] py-12">
      {/* Background */}
      <div className="absolute z-[-1] -left-28 top-80 lg:top-44 lg:-left-0 ">
        <img src={bg} width={500} height={500} className="w-[80%] lg:w-[70%]" />
      </div>

      {/* Pattern */}
      <div className="absolute right-0 -bottom-60">
        <img src={pattern} width={100} height={100} />
      </div>

      {/* Our Services Section */}
      <div className="w-9/12 mx-auto flex flex-col items-center">
        <heading className="w-full text-center">
          <h1 className="header pb-4">Our Services</h1>
          <div className="py-[1px] rounded-full w-12 mx-auto bg-black"></div>
        </heading>
        <div className="relative">
          <p className="sub-header my-8 text-justify xxs:w-[90%] xs:w-[80%] mx-auto md:w-[80%] md:text-center">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-30 gap-y-8 px-1 lg:gap-6 pt-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex items-stretch xxs:max-w-[250px] xxs:mx-auto md:w-auto"
              >
                <div className="flex flex-col justify-between gap-y-3 bg-white drop-shadow-lg p-4 rounded-xl">
                  <img src={service.icon} width={50} height={50} />
                  <h3 className="services-header">{service.title}</h3>
                  <p className="services-subheader">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <Button label="Learn more" white="white" />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
