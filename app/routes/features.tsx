import { Link } from '@remix-run/react';
import { type MetaFunction } from '@remix-run/cloudflare';

export const meta: MetaFunction = () => {
  return [
    { title: 'Features - Toost' },
    { name: 'description', content: 'Discover all the powerful features of Toost' }
  ];
};

const FEATURES = [
  {
    category: 'Development',
    icon: 'i-ph:code-duotone',
    color: 'from-blue-500 to-cyan-600',
    items: [
      {
        title: 'Multi-File Editing',
        description: 'Work on multiple files simultaneously with an intuitive tab system',
        icon: 'i-ph:files-duotone',
      },
      {
        title: 'Intelligent Code Editor',
        description: 'Powered by CodeMirror with syntax highlighting and autocompletion',
        icon: 'i-ph:code-block-duotone',
      },
      {
        title: 'Built-in Terminal',
        description: 'Multiple terminal tabs for running commands and scripts',
        icon: 'i-ph:terminal-duotone',
      },
      {
        title: 'File Search',
        description: 'Quickly find any file with Cmd/Ctrl+P',
        icon: 'i-ph:magnifying-glass-duotone',
      },
    ],
  },
  {
    category: 'AI-Powered',
    icon: 'i-ph:brain-duotone',
    color: 'from-purple-500 to-pink-600',
    items: [
      {
        title: 'Multiple AI Models',
        description: 'Choose from GPT-4, Claude, Gemini, and more',
        icon: 'i-ph:robot-duotone',
      },
      {
        title: 'AI Assistant',
        description: 'Get help with code, bugs, refactoring, and documentation',
        icon: 'i-ph:magic-wand-duotone',
      },
      {
        title: 'Smart Code Generation',
        description: 'Generate entire projects from natural language',
        icon: 'i-ph:sparkle-duotone',
      },
      {
        title: 'Context-Aware',
        description: 'AI understands your entire project structure',
        icon: 'i-ph:lightbulb-duotone',
      },
    ],
  },
  {
    category: 'Preview & Testing',
    icon: 'i-ph:devices-duotone',
    color: 'from-green-500 to-emerald-600',
    items: [
      {
        title: 'Device Preview',
        description: 'Test on desktop, tablet, and mobile instantly',
        icon: 'i-ph:device-mobile-duotone',
      },
      {
        title: 'Live Reload',
        description: 'See changes instantly as you code',
        icon: 'i-ph:arrow-clockwise-duotone',
      },
      {
        title: 'Multiple Ports',
        description: 'Run multiple servers simultaneously',
        icon: 'i-ph:plug-duotone',
      },
      {
        title: 'Console Access',
        description: 'Debug with full browser console access',
        icon: 'i-ph:bug-droid-duotone',
      },
    ],
  },
  {
    category: 'Collaboration',
    icon: 'i-ph:users-duotone',
    color: 'from-orange-500 to-red-600',
    items: [
      {
        title: 'Easy Sharing',
        description: 'Share projects with a single link',
        icon: 'i-ph:share-network-duotone',
      },
      {
        title: 'Real-time Collaboration',
        description: 'Work together with live cursors (coming soon)',
        icon: 'i-ph:users-three-duotone',
      },
      {
        title: 'Export Projects',
        description: 'Download as ZIP or deploy directly',
        icon: 'i-ph:download-simple-duotone',
      },
      {
        title: 'Git Integration',
        description: 'Commit, push, and manage branches',
        icon: 'i-ph:git-branch-duotone',
      },
    ],
  },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/landing" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl flex items-center justify-center">
                <div className="i-ph:lightning-fill text-white text-xl"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                Toost
              </span>
            </Link>
            <Link to="/" className="px-6 py-2 bg-gradient-to-r from-accent-500 to-accent-700 rounded-xl font-medium hover:scale-105 transition-transform">
              Launch App
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Powerful Features for Modern Development
          </h1>
          <p className="text-xl text-gray-400">
            Everything you need to build amazing applications
          </p>
        </div>

        <div className="space-y-20">
          {FEATURES.map((category) => (
            <div key={category.category}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <div className={`${category.icon} text-3xl text-white`}></div>
                </div>
                <h2 className="text-3xl font-bold">{category.category}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.title}
                    className="glass-light p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <div className={`${item.icon} text-2xl text-white`}></div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center glass-light rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">Join thousands of developers building with Toost</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-700 rounded-xl font-semibold text-lg hover:scale-105 transition-transform"
          >
            Start Building Now
            <div className="i-ph:arrow-right"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
