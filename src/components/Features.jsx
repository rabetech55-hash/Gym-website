import { motion } from "framer-motion";
import { FaDumbbell, FaHeartbeat, FaUserTie, FaAppleAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaDumbbell size={40} />,
    title: "Strength Training",
    desc: "Build muscle, increase power and improve performance."
  },
  {
    icon: <FaHeartbeat size={40} />,
    title: "Cardio Fitness",
    desc: "Boost endurance and improve heart health."
  },
  {
    icon: <FaUserTie size={40} />,
    title: "Personal Coaching",
    desc: "Expert trainers focused on your goals."
  },
  {
    icon: <FaAppleAlt size={40} />,
    title: "Nutrition Plans",
    desc: "Customized meal plans for maximum results."
  }
];

function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-black to-grayCustom"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="section-title gradient-text">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 100
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.2
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.05
              }}
              className="glass p-8 rounded-3xl text-center cursor-pointer"
            >
              <div className="text-primary flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;