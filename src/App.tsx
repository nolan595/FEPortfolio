import { projects } from './projects';
import { ProjectCard } from './components/ProjectCard';
import { Hero } from './components/Hero';

export default function App() {
  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen">
      <Hero />

      <section id="projects" className="px-6 py-12">
        <h2 className="text-3xl text-white font-bold text-center mb-12">
          All Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}