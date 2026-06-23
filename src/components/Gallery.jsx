import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 bg-grayCustom"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="section-title gradient-text">
          Gym Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05
              }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt="Gym"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;