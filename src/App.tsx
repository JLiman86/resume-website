import About from "./components/About";
import Button from "./components/Button";
import Contact from "./components/Contact";
import Contributors from "./components/Contributors";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <div className="container mx-auto ">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contributors/>
      <Portfolio/>
      <Contact />
      <Footer/>
      <Button/>
    </div>
  );
}

export default App;
