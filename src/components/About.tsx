import Person from '../assets/img/man_about.png'
import {about} from '../data'

const About = () => {
  return (
    <div id="about" className=" mt-8">
      <h2 className="text-center text-5xl font-semibold">
        {about.title}
        <span className=" ml-2 inline-block w-[10px] h-[10px] bg-accent rounded-full"></span>
      </h2>
      <p className="text-center max-w-4xl mx-auto mt-8">
        {about.subtitle}
      </p>

      <div className='max-w-[500px] mx-auto mt-10'><img className='w-full' src={Person} alt="" /></div>
    </div>
  );
};

export default About;
