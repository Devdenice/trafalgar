import Button from "../components/Button";
import { more } from "../constants";

const More = () => {
  return (
    <div className="w-full py-12">
      <div className="w-10/12 mx-auto h-[100%]  py-10 flex flex-col gap-y-32">
        {more.map((more, index) => (
          <div key={more}>
            <div className="flex max-sm:flex-col">
              <div
                className={`order-2 max-sm:1 basis-5/12 flex flex-col max-lg:gap-y-6 justify-evenly ${
                  index === 0 || index === 1 ? "order-1" : "order-2 "
                }`}
              >
                <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                  <h3 className="header pb-4 max-xs:pt-4">{more.title}</h3>
                  <div className="py-[1px] rounded-full w-12  bg-black"></div>
                </div>
                <p className="sub-header text-justify xxs:w-[90%] xs:w-[80%] mx-auto sm:text-left sm:mx-0 sm:w-full">
                  {more.subtext}
                </p>
                <Button
                  label={`${index === 1 ? "Download now" : "Learn more"}`}
                  white="white"
                  className="className"
                />
              </div>
              <div
                className={`order-1 basis-8/12  ${
                  index === 1 ? "order-2 max-sm:order-1" : "order-1"
                }`}
              >
                <img
                  src={more.img}
                  width={500}
                  height={500}
                  className={` max-w-[75%]  max-sm:mx-auto  max-sm:mb-5 ${
                    index === 1 ? "ml-auto" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;
