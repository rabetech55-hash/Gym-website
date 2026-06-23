import { motion } from "framer-motion";

const reviews = [
  {
    name: "Michael",
    text: "Best gym experience I've ever had."
  },
  {
    name: "Sophia",
    text: "Amazing trainers and modern equipment."
  },
  {
    name: "Daniel",
    text: "Lost 20kg and completely changed my life."
  },
  {
    name: "Emma",
    text: "Professional environment and great support."
  }
];

function Testimonials() {
  return (
    <section className="py-24 bg-black overflow-hidden">

      <h2 className="section-title gradient-text">
        Success Stories
      </h2>

      <motion.div
        animate={{
          x: [0, -800]
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear"
        }}
        className="flex gap-8 w-max px-8"
      >
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            className="glass rounded-3xl p-8 w-96"
          >
            <h3 className="text-primary font-bold text-xl mb-4">
              {review.name}
            </h3>

            <p className="text-gray-300">
              "{review.text}"
            </p>
          </div>
        ))}
      </motion.div>

    </section>
  );
}

export default Testimonials;