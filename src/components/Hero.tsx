import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const rotation = useTransform(scrollYProgress, [0, 1], ['0deg', '270deg']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <section
      ref={ref}
      className="relative h-[60vh] flex flex-col items-center  text-white overflow-hidden"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-blue-950 to-black z-0"
      />

      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 mt-20">
          Mark’s Portfolio
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
        </p>
      </motion.div>

      <motion.img
        src="/icon.png"
        alt="Turning Object"
        style={{ rotate: rotation, scale }}
        className="w-[200px] md:w-[400px] mt-12 relative z-10"
      />
    </section>
  );
};