import React from "react";
import { motion } from "framer-motion"

function Home() {
  return (
    <section id="home" className="min-h-screen grid place-items-center px-4 lg:-mt-28">
      <div className="-mt-48 lg:mt-24 xl:mt-24 text-center grid gap-5">
        <motion.h1
          className="text-3xl font-bold sm:text-4xl lg:text-5xl tracking-widest"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          REUVIN
        </motion.h1>

        <motion.h1
          className="text-3xl font-bold sm:text-4xl lg:text-5xl tracking-widest"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          HERNANDEZ
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl lg:text-2xl tracking-widest text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I craft seamless digital experiences from intuitive frontends to powerful backends.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a href="#projects">
            <button className="border-2 border-black py-2 px-8 sm:px-10 rounded-3xl cursor-pointer hover:bg-green-500">
              Explore Work
            </button>
          </a>
          <a href="#contact">
            <button className="border-2 border-black py-2 px-8 sm:px-10 rounded-3xl cursor-pointer hover:bg-green-500">
              Let's Connect
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
