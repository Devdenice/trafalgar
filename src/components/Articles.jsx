import { article } from "../constants";
import Button from "./Button";
import pattern from "/pattern.svg";
import bg2 from "/services/bg/bg2.svg";

const Articles = () => {
  return (
    <div className="w-full py-12 relative">
      <div>
        <img
          src={pattern}
          width={100}
          height={100}
          className="absolute left-9 top-20 z-[-1]"
        />
      </div>

      <div>
        <img
          src={bg2}
          width={450}
          height={450}
          className="absolute right-0 top-28 z-[-1]"
        />
      </div>
      <div className="w-10/12 mx-auto flex flex-col items-center">
        <heading className="w-full text-center ">
          <h1 className="header pb-4">Check out our latest article</h1>
          <div className="py-[1px] rounded-full w-12 mx-auto bg-black"></div>
        </heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-12 max-md:gap-y-10">
          {article.map((articles) => (
            <div
              key={articles}
              className="max-w-[90%] xs:w-[80%] sm:w-[65%] md:w-full mx-auto bg-white shadow-sm rounded-2xl"
            >
              <img src={articles.img} className="rounded-t-2xl" />
              <div className="py-4 px-3 lg:py-8 lg:px-9 flex flex-col gap-y-3 ">
                <h3 className="services-header">{articles.title}</h3>
                <p className="services-subheader">{articles.subText}</p>
                <div className="relative px-0 py-0">
                  <Button label="Read more" readMore="readMore" white="white" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-6">
          <Button label="View all" white="white" />
        </div>
      </div>
    </div>
  );
};

export default Articles;
