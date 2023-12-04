import {contact} from '../data'
import Logo from '../assets/img/logo.svg'

const Contact = () => {
  return (
    <div id="contact" className=" mt-24">
      <h2 className="text-center text-5xl font-semibold">
        {contact.title}
        <span className=" ml-2 inline-block w-[10px] h-[10px] bg-accent rounded-full"></span>
      </h2>
      <p className="text-center max-w-4xl mx-auto mt-8">
        {contact.subtitle}
      </p>

      <div className=' mt-10 text-center'><img className='inline-block w-[200px] md:w-[250px]' src={Logo} alt="" /></div>
    </div>
  );
};

export default Contact