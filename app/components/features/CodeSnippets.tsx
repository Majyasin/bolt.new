import { memo, useState } from 'react';
import { toast } from 'react-toastify';
import { classNames } from '~/utils/classNames';

interface Snippet {
  id: string;
  title: string;
  description: string;
  language: string;
  code: string;
  category: string;
  tags: string[];
}

const SNIPPETS: Snippet[] = [
  {
    id: 'react-component',
    title: 'React Functional Component',
    description: 'Modern React component with hooks',
    language: 'tsx',
    category: 'React',
    tags: ['react', 'component', 'hooks'],
    code: `import { useState } from 'react';

export function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
  },
  {
    id: 'api-fetch',
    title: 'Async API Fetch',
    description: 'Fetch data with error handling',
    language: 'ts',
    category: 'JavaScript',
    tags: ['api', 'fetch', 'async'],
    code: `async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}`,
  },
  {
    id: 'tailwind-card',
    title: 'Tailwind Card Component',
    description: 'Beautiful card with Tailwind CSS',
    language: 'tsx',
    category: 'UI',
    tags: ['tailwind', 'card', 'ui'],
    code: `<div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-2xl">
  <img className="w-full h-48 object-cover" src="/image.jpg" alt="Card" />
  <div className="p-6">
    <h3 className="font-bold text-xl mb-2">Card Title</h3>
    <p className="text-gray-700 dark:text-gray-300 text-base">
      Card description goes here
    </p>
  </div>
</div>`,
  },
  {
    id: 'express-route',
    title: 'Express API Route',
    description: 'RESTful endpoint with validation',
    language: 'ts',
    category: 'Backend',
    tags: ['express', 'api', 'backend'],
    code: `app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ 
        error: 'Name and email required' 
      });
    }
    
    const user = await createUser({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});`,
  },
];

const CATEGORIES = ['All', 'React', 'JavaScript', 'UI', 'Backend', 'CSS', 'Utilities'];

interface CodeSnippetsProps {
  onClose: () => void;
}

export const CodeSnippets = memo(({ onClose }: CodeSnippetsProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSnippets = SNIPPETS.filter(snippet => {
    const matchesCategory = selectedCategory === 'All' || snippet.category === selectedCategory;
    const matchesSearch = snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         snippet.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const copySnippet = (code: string, title: string) => {
    navigator.clipboard.writeText(code);
    toast.success(`Copied "${title}" to clipboard!`);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animated fadeIn">
      <div className="w-full max-w-6xl h-[85vh] bg-bolt-elements-background-depth-2 rounded-2xl shadow-2xl border border-bolt-elements-borderColor flex flex-col overflow-hidden animated fadeInScale">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-bolt-elements-borderColor bg-gradient-to-r from-purple-500/10 to-pink-500/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <div className="i-ph:code-block-duotone text-2xl text-white"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-bolt-elements-textPrimary">Code Snippets</h2>
              <p className="text-sm text-bolt-elements-textSecondary">Ready-to-use code templates</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-bolt-elements-item-backgroundActive rounded-lg transition-colors"
          >
            <div className="i-ph:x text-xl text-bolt-elements-textSecondary"></div>
          </button>
        </div>

        {/* Search & Filters */}
        <div className="p-6 border-b border-bolt-elements-borderColor space-y-4">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 i-ph:magnifying-glass text-bolt-elements-textTertiary"></div>
            <input
              type="text"
              placeholder="Search snippets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-bolt-elements-background-depth-3 border border-bolt-elements-borderColor rounded-xl text-bolt-elements-textPrimary placeholder-bolt-elements-textTertiary focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={classNames(
                  'px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap',
                  {
                    'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg': selectedCategory === category,
                    'bg-bolt-elements-background-depth-3 text-bolt-elements-textSecondary hover:bg-bolt-elements-item-backgroundActive': selectedCategory !== category,
                  }
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Snippets Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredSnippets.map((snippet) => (
              <div
                key={snippet.id}
                className="glass-light rounded-xl p-4 border border-bolt-elements-borderColor hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-bolt-elements-textPrimary mb-1">
                      {snippet.title}
                    </h3>
                    <p className="text-sm text-bolt-elements-textSecondary">
                      {snippet.description}
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-bolt-elements-background-depth-3 rounded text-xs text-bolt-elements-textTertiary">
                    {snippet.language}
                  </span>
                </div>

                <pre className="bg-bolt-elements-code-background rounded-lg p-3 text-xs overflow-x-auto mb-3 max-h-32">
                  <code className="text-bolt-elements-code-text">{snippet.code}</code>
                </pre>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {snippet.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-bolt-elements-background-depth-3 rounded text-xs text-bolt-elements-textTertiary"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => copySnippet(snippet.code, snippet.title)}
                    className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
                  >
                    <div className="i-ph:copy"></div>
                    Copy
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredSnippets.length === 0 && (
            <div className="text-center py-12">
              <div className="i-ph:code-block-duotone text-6xl text-bolt-elements-textTertiary mb-4 mx-auto"></div>
              <p className="text-bolt-elements-textSecondary">No snippets found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
