// src/components/ProjectCard.tsx
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

export const ProjectCard = ({ project }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={true}
      glareMaxOpacity={0.1}
      className="w-full"
    >
      <motion.div
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all"
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="rounded-lg w-full h-40 object-cover mb-4"
        />
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        <div className="flex gap-2 flex-wrap mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-white/20 text-white px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a
            href={project.swaggerUrl}
            target="_blank"
            className="text-blue-400 underline text-sm"
            rel="noreferrer"
          >
            Swagger
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            className="text-blue-400 underline text-sm"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </Tilt>
  );
};
