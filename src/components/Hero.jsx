import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

function Hero() {
  const heroRef = useRef();

  useEffect(() => {
    gsap.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.5
    });

    gsap.from(".hero-subtitle", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay: 0.4
    });

    gsap.from(".hero-btns", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      delay: 0.8
    });

    const handleScroll = () => {
      const scroll = window.scrollY;

      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY =
          `${scroll * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-[120px] opacity-30 top-10 left-10"></div>

      <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-20 bottom-0 right-0"></div>

      <div className="relative z-10 text-center px-6">

        <motion.h1
          className="hero-title text-6xl md:text-8xl font-black mb-6 gradient-text"
        >
          TITAN FITNESS
        </motion.h1>

        <p className="hero-subtitle text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Transform Your Body. Transform Your Life.
        </p>

        <div className="hero-btns mt-10 flex flex-col md:flex-row justify-center gap-5">

          <motion.button
            whileHover={{
              scale: 1.05
            }}
            className="bg-primary px-8 py-4 rounded-full font-bold blue-glow"
          >
            Join Now
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05
            }}
            className="border border-white px-8 py-4 rounded-full"
          >
            Free Trial
          </motion.button>

        </div>
      </div>

      <motion.div
        animate={{
          y: [0, -20, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute bottom-10 text-white text-4xl"
      >
        ↓
      </motion.div>
    </section>
  );
}

export default Hero;