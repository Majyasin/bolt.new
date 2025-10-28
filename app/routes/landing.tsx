import { Link } from '@remix-run/react';
import { type MetaFunction } from '@remix-run/cloudflare';
import { useState } from 'react';
import { classNames } from '~/utils/classNames';

export const meta: MetaFunction = () => {
  return [
    { title: 'Toost - Where Ideas Begin' },
    { name: 'description', content: 'The ultimate AI-powered development platform. Build full-stack applications instantly with cutting-edge AI models.' }
  ];
};

const AI_MODELS = [
  {
    id: 'gpt-4',
    name: 'GPT-4',
    provider: 'OpenAI',
    icon: 'i-ph:robot-duotone',
    description: 'Most capable model for complex tasks',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'claude-3.5-sonnet',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    icon: 'i-ph:brain-duotone',
    description: 'Best for coding and analysis',
    color: 'from-purple-500 to-pink-600',
    recommended: true,
  },
  {
    id: 'gpt-4-turbo',
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    icon: 'i-ph:lightning-duotone',
    description: 'Faster responses, great performance',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'gemini-pro',
    name: 'Gemini Pro',
    provider: 'Google',
    icon: 'i-ph:sparkle-duotone',
    description: 'Excellent for multimodal tasks',
    color: 'from-orange-500 to-red-600',
  },
];

export default function Landing() {
  const [selectedModel, setSelectedModel] = useState('claude-3.5-sonnet');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-700 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl flex items-center justify-center">
                  <div className="i-ph:lightning-fill text-white text-xl"></div>
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                Toost
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link to="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
              <Link to="/docs" className="text-gray-300 hover:text-white transition-colors">Docs</Link>
              <Link to="/" className="px-6 py-2 bg-gradient-to-r from-accent-500 to-accent-700 hover:from-accent-600 hover:to-accent-800 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-500/25">
                Launch App
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16 animated fadeInUp">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-400 text-sm font-medium">
                ✨ Powered by AI
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Where Ideas
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent-400 via-accent-500 to-purple-500 bg-clip-text text-transparent">
                Begin
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Build full-stack applications in seconds with AI. Choose your model, describe your vision, and watch it come to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="group px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-700 hover:from-accent-600 hover:to-accent-800 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-accent-500/50 flex items-center gap-2"
              >
                Start Building Free
                <div className="i-ph:arrow-right group-hover:translate-x-1 transition-transform"></div>
              </Link>
              <button className="px-8 py-4 glass hover:bg-white/10 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2">
                <div className="i-ph:play-circle-duotone text-2xl"></div>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Model Selector */}
          <div className="max-w-5xl mx-auto animated fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="glass-light rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Choose Your AI Model
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {AI_MODELS.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model.id)}
                    className={classNames(
                      'relative p-6 rounded-xl transition-all duration-300 group text-left',
                      {
                        'glass-light border-2 border-accent-500 shadow-lg shadow-accent-500/25': selectedModel === model.id,
                        'glass hover:glass-light border border-white/10': selectedModel !== model.id,
                      }
                    )}
                  >
                    {model.recommended && (
                      <div className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full text-xs font-bold">
                        Recommended
                      </div>
                    )}
                    
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${model.color} flex items-center justify-center mb-4`}>
                      <div className={`${model.icon} text-2xl text-white`}></div>
                    </div>
                    
                    <h4 className="font-bold text-white mb-1">{model.name}</h4>
                    <p className="text-xs text-gray-400 mb-2">{model.provider}</p>
                    <p className="text-sm text-gray-300">{model.description}</p>

                    {selectedModel === model.id && (
                      <div className="absolute top-4 right-4">
                        <div className="i-ph:check-circle-fill text-2xl text-accent-500"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-400">
              Professional development tools, powered by AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'i-ph:code-duotone', title: 'Multi-File Editing', desc: 'Edit multiple files with tabs, just like a real IDE' },
              { icon: 'i-ph:devices-duotone', title: 'Device Preview', desc: 'Test on desktop, tablet, and mobile instantly' },
              { icon: 'i-ph:folder-open-duotone', title: 'Project Templates', desc: '12+ templates for Next.js, React, Vue, and more' },
              { icon: 'i-ph:git-branch-duotone', title: 'Git Integration', desc: 'Commit, push, and manage branches visually' },
              { icon: 'i-ph:robot-duotone', title: 'AI Assistant', desc: 'Get help with code, bugs, and refactoring' },
              { icon: 'i-ph:share-network-duotone', title: 'Easy Sharing', desc: 'Share projects with a single link' },
            ].map((feature, i) => (
              <div
                key={i}
                className="glass-light hover:glass p-8 rounded-2xl transition-all duration-300 hover:scale-105 border border-white/10 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <div className={`${feature.icon} text-3xl text-white`}></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass-light rounded-3xl p-12 border border-white/20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of developers building with Toost
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-700 hover:from-accent-600 hover:to-accent-800 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-accent-500/50"
          >
            Start Building Now
            <div className="i-ph:arrow-right"></div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/templates" className="hover:text-white transition-colors">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/examples" className="hover:text-white transition-colors">Examples</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400">© 2024 Toost. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="i-ph:twitter-logo-fill text-xl"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="i-ph:github-logo-fill text-xl"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="i-ph:discord-logo-fill text-xl"></div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
