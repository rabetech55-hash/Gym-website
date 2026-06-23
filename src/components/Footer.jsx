import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-grayCustom py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-primary">
              TITAN FITNESS
            </h2>

            <p className="mt-4 text-gray-300">
              Elite fitness, professional coaching,
              and world-class training facilities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>Programs</li>
              <li>Membership</li>
              <li>Trainers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-5 text-3xl text-primary">

              <FaFacebook />

              <FaInstagram />

              <FaTwitter />

              <FaYoutube />

            </div>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 Titan Fitness. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;