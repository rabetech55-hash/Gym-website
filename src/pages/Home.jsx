import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Stats from "../components/Stats";
import Membership from "../components/Membership";
import Trainers from "../components/Trainers";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Stats />
      <Membership />
      <Trainers />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

