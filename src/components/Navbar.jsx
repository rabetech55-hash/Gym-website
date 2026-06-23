import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-primary">
          TITAN FITNESS
        </h1>

        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Programs</a></li>
          <li><a href="#membership">Pricing</a></li>
          <li><a href="#trainers">Trainers</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        
      </div>

      
      
    </nav>
  );
}

export default Navbar;