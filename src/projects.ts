// src/projects.ts
export const projects = [
  {
    id: 'task-manager',
    title: 'Task Manager',
    description: 'CRUD API with JWT auth using NestJS & Prisma',
    thumbnail: '/thumbnails/taskManager.png',
    swaggerUrl: 'https://mainbe.up.railway.app/taskManager/docs',
    githubUrl: 'https://github.com/mark/task-manager',
    tags: ['NestJS', 'Prisma', 'Auth']
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'Full-featured blog API with roles, comments, and auth',
    thumbnail: '/thumbnails/blog.png',
    swaggerUrl: 'https://mainbe.up.railway.app/blogPlatform/docs',
    githubUrl: 'https://github.com/mark/blog-platform',
    tags: ['NestJS', 'RabbitMQ', 'Prisma']
  }
];
