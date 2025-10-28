export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  prompt: string;
  tags: string[];
}

export const PROJECT_TEMPLATES: ProjectTemplate[] = [
  {
    id: 'nextjs-app',
    name: 'Next.js App',
    description: 'Modern React framework with App Router',
    icon: 'i-ph:react-logo-duotone',
    prompt: 'Create a Next.js 14 application with App Router, TypeScript, Tailwind CSS, and a clean project structure. Include a modern landing page with navigation.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'react-vite',
    name: 'React + Vite',
    description: 'Fast React development with Vite',
    icon: 'i-ph:lightning-duotone',
    prompt: 'Create a React application using Vite, TypeScript, and Tailwind CSS. Set up a modern component structure with routing using React Router.',
    tags: ['React', 'Vite', 'TypeScript'],
  },
  {
    id: 'vue-app',
    name: 'Vue 3 App',
    description: 'Progressive JavaScript framework',
    icon: 'i-ph:triangle-duotone',
    prompt: 'Create a Vue 3 application with Vite, TypeScript, Pinia for state management, and Vue Router. Use the Composition API.',
    tags: ['Vue', 'Vite', 'TypeScript'],
  },
  {
    id: 'astro-site',
    name: 'Astro Site',
    description: 'Content-focused static site',
    icon: 'i-ph:rocket-launch-duotone',
    prompt: 'Create an Astro website with TypeScript and Tailwind CSS. Include a blog setup with markdown support and a modern design.',
    tags: ['Astro', 'TypeScript', 'Static'],
  },
  {
    id: 'svelte-app',
    name: 'SvelteKit App',
    description: 'Cybernetically enhanced web apps',
    icon: 'i-ph:fire-duotone',
    prompt: 'Create a SvelteKit application with TypeScript and Tailwind CSS. Include routing and a component library structure.',
    tags: ['Svelte', 'TypeScript'],
  },
  {
    id: 'express-api',
    name: 'Express API',
    description: 'Node.js REST API server',
    icon: 'i-ph:cloud-duotone',
    prompt: 'Create an Express.js REST API with TypeScript. Include proper routing, middleware, error handling, and a basic CRUD structure.',
    tags: ['Node.js', 'Express', 'API'],
  },
  {
    id: 'landing-page',
    name: 'Landing Page',
    description: 'Modern marketing landing page',
    icon: 'i-ph:layout-duotone',
    prompt: 'Create a beautiful, responsive landing page with HTML, Tailwind CSS, and vanilla JavaScript. Include hero section, features, testimonials, and contact form.',
    tags: ['HTML', 'Tailwind', 'Landing'],
  },
  {
    id: 'portfolio',
    name: 'Portfolio Site',
    description: 'Personal portfolio website',
    icon: 'i-ph:user-circle-duotone',
    prompt: 'Create a modern portfolio website with sections for projects, about, skills, and contact. Use React, TypeScript, and Tailwind with smooth animations.',
    tags: ['React', 'Portfolio'],
  },
  {
    id: 'dashboard',
    name: 'Admin Dashboard',
    description: 'Full-featured admin panel',
    icon: 'i-ph:chart-line-duotone',
    prompt: 'Create a responsive admin dashboard with React, TypeScript, and Tailwind. Include charts, tables, forms, and a sidebar navigation.',
    tags: ['React', 'Dashboard', 'Admin'],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Store',
    description: 'Online store with cart',
    icon: 'i-ph:shopping-cart-duotone',
    prompt: 'Create an e-commerce store with Next.js, TypeScript, and Tailwind. Include product listing, cart functionality, and checkout flow.',
    tags: ['Next.js', 'E-commerce'],
  },
  {
    id: 'blog',
    name: 'Blog Platform',
    description: 'Content management blog',
    icon: 'i-ph:article-duotone',
    prompt: 'Create a blog platform with Astro, markdown support, and Tailwind CSS. Include post listing, individual post pages, and categories.',
    tags: ['Astro', 'Blog', 'Markdown'],
  },
  {
    id: 'chrome-extension',
    name: 'Chrome Extension',
    description: 'Browser extension starter',
    icon: 'i-ph:puzzle-piece-duotone',
    prompt: 'Create a Chrome extension with TypeScript. Include popup, background script, content script, and proper manifest v3 configuration.',
    tags: ['Chrome', 'Extension'],
  },
];
