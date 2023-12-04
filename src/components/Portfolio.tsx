import { portfolio } from "../data";

const Portfolio = () => {
  return (
    <div id="portfolio" className=" mt-24">
      <h3 className="tracking-wide text-center text-2xl font-normal">
        {portfolio.preTitle}
      </h3>
      <h2 className="font-medium text-4xl text-accent tracking-wide text-center ">
        {portfolio.title}
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <img src={portfolio.image1} alt="" />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <img className="h-full  object-cover" src={portfolio.image2} alt="" />
          <img className="h-full object-cover" src={portfolio.image3} alt="" />
          <img className="h-full object-cover" src={portfolio.image4} alt="" />
          <img className="h-full object-cover" src={portfolio.image5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
