import { contributors } from "../data"

const Contributors = () => {
  return (
    <div id="contributors" className=" mt-24">
      <h2 className="text-center text-5xl font-semibold">
        {contributors.title}
        <span className=" ml-2 inline-block w-[10px] h-[10px] bg-accent rounded-full"></span>
      </h2>
      <p className="text-center mt-8 max-w-4xl mx-auto">{contributors.subtitle}</p>

      <div className=" mt-16 flex flex-col items-center gap-10 md:flex-row flex-wrap justify-center max-w-[1000px] mx-auto">
        {contributors.brands.map((contributor, idx) => {
          return (
            <div key={idx} className="">
              <img
                className="h-[50px] inline-block w-full"
                src={contributor.image}
                alt=""
              />
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contributors