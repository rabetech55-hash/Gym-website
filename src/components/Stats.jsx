import { useEffect, useState } from "react";

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>{count}</span>
  );
}

function Stats() {
  return (
    <section className="py-24 bg-grayCustom">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-5xl font-bold text-primary">
              <Counter end={5000} />+
            </h3>
            <p className="mt-4 text-gray-300">
              Members
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-primary">
              <Counter end={120} />
            </h3>
            <p className="mt-4 text-gray-300">
              Trainers
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-primary">
              <Counter end={25} />
            </h3>
            <p className="mt-4 text-gray-300">
              Awards
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-primary">
              <Counter end={98} />%
            </h3>
            <p className="mt-4 text-gray-300">
              Success Rate
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;