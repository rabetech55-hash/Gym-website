import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "$29",
    features: [
      "Gym Access",
      "Locker Access",
      "Group Classes"
    ]
  },
  {
    name: "Pro",
    price: "$59",
    featured: true,
    features: [
      "Everything in Basic",
      "Personal Trainer",
      "Nutrition Plan"
    ]
  },
  {
    name: "Elite",
    price: "$99",
    features: [
      "Everything in Pro",
      "VIP Lounge",
      "Priority Coaching"
    ]
  }
];

function Membership() {
  return (
    <section
      id="membership"
      className="py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="section-title gradient-text">
          Membership Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -15,
                scale: 1.03
              }}
              className={`glass p-10 rounded-3xl text-center ${
                plan.featured
                  ? "border-2 border-blue-500 blue-glow"
                  : ""
              }`}
            >
              <h3 className="text-3xl font-bold mb-4">
                {plan.name}
              </h3>

              <h4 className="text-5xl text-primary font-black mb-8">
                {plan.price}
              </h4>

              <ul className="space-y-4 mb-8">
                {plan.features.map((item, i) => (
                  <li key={i}>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="bg-primary px-8 py-3 rounded-full font-bold">
                Join Now
              </button>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Membership;