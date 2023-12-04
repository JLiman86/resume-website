import { social } from "../data";
import Person from "../assets/img/man_banner.png";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-heroText bg-no-repeat bg-contain pt-10 flex flex-col md:flex-row"
    >
      <div className=" w-full md:w-3/5 md:pr-20">
        <div className="text-center space-y-4 font-semibold md:text-left pt-16">
          <h3>Hola! I'm</h3>
          <h2 className="text-2xl text-accent">Justin Vaccaro</h2>
          <h1 className="text-6xl ">
            Creative <br className="md:ml-10" />
            <span className="inline-block md:ml-12"> </span>
            Designer
            <span className="inline-block w-[10px] h-[10px] bg-accent rounded-full"></span>
          </h1>
        </div>
        <p className="text-center md:text-left mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, saepe
          ratione ut sed placeat aliquam fuga nulla dolores voluptate
          cupiditate!
        </p>

        <ul className="mt-8  flex items-center justify-center md:justify-start gap-4">
          {social.map((icon,idx) => {
            return (
              <li key={idx}>
                <a href={icon.href}>{icon.icon}</a>
              </li>
            );
          })}
        </ul>

        <button className="lg:mt-20  mt-10 block bg-accent p-3 mx-auto md:mx-0 hover:bg-accent-hover text-white">
          Download my CV
        </button>
      </div>

      <div className=" bg-blob w-full md:w-2/5 bg-no-repeat bg-contain mt-14 md:mt-0">
        <div>
          <img className="w-full" src={Person} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
