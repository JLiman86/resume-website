import { services } from "../data";

const Services = () => {
  return (
    <div id="services" className=" mt-24">
      <h2 className="text-center text-5xl font-semibold">
        {services.title}
        <span className=" ml-2 inline-block w-[10px] h-[10px] bg-accent rounded-full"></span>
      </h2>
      <p className="text-center mt-8 max-w-4xl mx-auto">{services.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {services.skills.map((service, idx) => {
          return (
            <div key={idx} className="text-center space-y-5 hover:shadow-2xl">
              <img className="h-[120px] inline-block" src={service.icon} alt="" />
              <h3 className="text-3xl font-semibold">{service.name}</h3>
              <p className="">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
