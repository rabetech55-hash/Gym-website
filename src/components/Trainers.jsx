import { motion } from "framer-motion";

const trainers = [
  {
    name: "James Carter",
    role: "Strength Coach",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  },
  {
    name: "Sarah Adams",
    role: "Fitness Expert",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "David Brown",
    role: "Bodybuilding Coach",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  }
];

function Trainers() {
  return (
    <section
      id="trainers"
      className="py-24 bg-grayCustom overflow-hidden"
    >
      <h2 className="section-title gradient-text">
        Expert Trainers
      </h2>

      <motion.div
        animate={{
          x: [0, -300, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 15
        }}
        className="flex gap-8 px-8"
      >
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="glass rounded-3xl min-w-[320px] overflow-hidden"
          >
            <img
              src={trainer.image}
              alt={trainer.name}
              className="h-80 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {trainer.name}
              </h3>

              <p className="text-primary mt-2">
                {trainer.role}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Trainers;