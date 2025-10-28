import { Link } from '@remix-run/react';
import { type MetaFunction } from '@remix-run/cloudflare';

export const meta: MetaFunction = () => {
  return [
    { title: 'Pricing - Toost' },
    { name: 'description', content: 'Simple, transparent pricing for every team' }
  ];
};

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for trying out Toost',
    features: [
      '10 AI generations per day',
      'Access to GPT-4 & Claude',
      'Basic templates',
      'Community support',
      '1 active project',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$20',
    period: '/month',
    description: 'For professional developers',
    features: [
      'Unlimited AI generations',
      'All AI models (GPT-4, Claude, Gemini)',
      'All templates & features',
      'Priority support',
      'Unlimited projects',
      'Export projects',
      'Collaboration features',
      'Advanced Git integration',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Team',
    price: '$50',
    period: '/month',
    description: 'For teams building together',
    features: [
      'Everything in Pro',
      'Up to 5 team members',
      'Shared workspaces',
      'Team analytics',
      'SSO & advanced security',
      'Dedicated support',
      'Custom AI training',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
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
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-400">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass-light rounded-2xl p-8 border-2 ${
                plan.popular ? 'border-accent-500 shadow-2xl shadow-accent-500/25' : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="i-ph:check-circle-fill text-accent-500 mt-0.5"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-accent-500 to-accent-700 hover:from-accent-600 hover:to-accent-800 hover:scale-105'
                    : 'glass hover:bg-white/10'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-400">
          <p className="mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <Link to="/landing" className="text-accent-500 hover:text-accent-400 transition-colors">
            Have questions? Contact our sales team →
          </Link>
        </div>
      </div>
    </div>
  );
}
