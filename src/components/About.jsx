import { motion } from "framer-motion";

function About() {
  return (
    <section className="py-24 bg-black">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{
              opacity: 0,
              x: -100
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 1
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8 gradient-text">
              About Titan Fitness
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Titan Fitness combines cutting-edge equipment,
              professional trainers and science-based fitness
              strategies to help members reach peak performance.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mt-6">
              Whether you're building strength, losing weight
              or preparing for competition, our facilities and
              coaching staff are ready to help.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 100
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 1
            }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f"
              alt="Gym"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;