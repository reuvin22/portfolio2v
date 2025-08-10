import React from 'react'
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="about"
      className="min-h-screen pt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-xl lg:text-4xl xl:text-4xl font-bold text-center">Let’s Work Together</h1>
    </motion.section>
  )
}

export default Contact