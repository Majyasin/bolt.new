import { memo, useState } from 'react';
import { toast } from 'react-toastify';
import { classNames } from '~/utils/classNames';

interface Component {
  id: string;
  name: string;
  description: string;
  library: string;
  preview: string;
  code: string;
  category: string;
  dependencies?: string[];
}

const COMPONENTS: Component[] = [
  {
    id: 'shadcn-button',
    name: 'Button',
    description: 'Beautiful button with variants',
    library: 'shadcn/ui',
    category: 'Buttons',
    preview: '🔘',
    dependencies: ['@radix-ui/react-slot', 'class-variance-authority'],
    code: `<Button variant="default" size="lg">
  Click me
</Button>`,
  },
  {
    id: 'shadcn-card',
    name: 'Card',
    description: 'Container with header and footer',
    library: 'shadcn/ui',
    category: 'Layout',
    preview: '📋',
    code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`,
  },
  {
    id: 'daisyui-hero',
    name: 'Hero Section',
    description: 'Landing page hero component',
    library: 'DaisyUI',
    category: 'Sections',
    preview: '🎯',
    code: `<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>`,
  },
  {
    id: 'mui-dialog',
    name: 'Dialog',
    description: 'Modal dialog with actions',
    library: 'Material UI',
    category: 'Overlays',
    preview: '💬',
    dependencies: ['@mui/material'],
    code: `<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Dialog Title</DialogTitle>
  <DialogContent>
    <DialogContentText>
      Dialog content goes here
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleClose}>Confirm</Button>
  </DialogActions>
</Dialog>`,
  },
];

const LIBRARIES = ['All', 'shadcn/ui', 'DaisyUI', 'Material UI', 'Chakra UI', 'Ant Design'];
const CATEGORIES = ['All', 'Buttons', 'Forms', 'Layout', 'Navigation', 'Overlays', 'Sections'];

interface ComponentLibraryProps {
  onClose: () => void;
}

export const ComponentLibrary = memo(({ onClose }: ComponentLibraryProps) => {
  const [selectedLibrary, setSelectedLibrary] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredComponents = COMPONENTS.filter(component => {
    const matchesLibrary = selectedLibrary === 'All' || component.library === selectedLibrary;
    const matchesCategory = selectedCategory === 'All' || component.category === selectedCategory;
    const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLibrary && matchesCategory && matchesSearch;
  });

  const insertComponent = (code: string, name: string) => {
    navigator.clipboard.writeText(code);
    toast.success(`Copied "${name}" component!`);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animated fadeIn">
      <div className="w-full max-w-7xl h-[85vh] bg-bolt-elements-background-depth-2 rounded-2xl shadow-2xl border border-bolt-elements-borderColor flex overflow-hidden animated fadeInScale">
        {/* Sidebar */}
        <div className="w-64 border-r border-bolt-elements-borderColor flex flex-col">
          <div className="p-4 border-b border-bolt-elements-borderColor">
            <h3 className="font-semibold text-bolt-elements-textPrimary mb-2">Libraries</h3>
            <div className="space-y-1">
              {LIBRARIES.map(library => (
                <button
                  key={library}
                  onClick={() => setSelectedLibrary(library)}
                  className={classNames(
                    'w-full px-3 py-2 rounded-lg text-left text-sm transition-all duration-200',
                    {
                      'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium': selectedLibrary === library,
                      'text-bolt-elements-textSecondary hover:bg-bolt-elements-item-backgroundActive': selectedLibrary !== library,
                    }
                  )}
                >
                  {library}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 flex-1 overflow-y-auto">
            <h3 className="font-semibold text-bolt-elements-textPrimary mb-2">Categories</h3>
            <div className="space-y-1">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={classNames(
                    'w-full px-3 py-2 rounded-lg text-left text-sm transition-all duration-200',
                    {
                      'bg-bolt-elements-item-backgroundActive text-bolt-elements-textPrimary font-medium': selectedCategory === category,
                      'text-bolt-elements-textSecondary hover:bg-bolt-elements-item-backgroundActive': selectedCategory !== category,
                    }
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-bolt-elements-borderColor bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <div className="i-ph:package-duotone text-2xl text-white"></div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-bolt-elements-textPrimary">Component Library</h2>
                  <p className="text-sm text-bolt-elements-textSecondary">Pre-built UI components</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-bolt-elements-item-backgroundActive rounded-lg transition-colors"
              >
                <div className="i-ph:x text-xl text-bolt-elements-textSecondary"></div>
              </button>
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 i-ph:magnifying-glass text-bolt-elements-textTertiary"></div>
              <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-bolt-elements-background-depth-3 border border-bolt-elements-borderColor rounded-xl text-bolt-elements-textPrimary placeholder-bolt-elements-textTertiary focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Components Grid */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredComponents.map((component) => (
                <div
                  key={component.id}
                  className="glass-light rounded-xl p-5 border border-bolt-elements-borderColor hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
                >
                  <div className="text-4xl mb-3 text-center">{component.preview}</div>
                  
                  <h3 className="font-semibold text-bolt-elements-textPrimary mb-1">
                    {component.name}
                  </h3>
                  
                  <p className="text-sm text-bolt-elements-textSecondary mb-2">
                    {component.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded text-xs font-medium">
                      {component.library}
                    </span>
                    <span className="px-2 py-0.5 bg-bolt-elements-background-depth-3 text-bolt-elements-textTertiary rounded text-xs">
                      {component.category}
                    </span>
                  </div>

                  <pre className="bg-bolt-elements-code-background rounded-lg p-3 text-xs overflow-x-auto mb-3 flex-1">
                    <code className="text-bolt-elements-code-text">{component.code}</code>
                  </pre>

                  <button
                    onClick={() => insertComponent(component.code, component.name)}
                    className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <div className="i-ph:plus-circle"></div>
                    Insert Component
                  </button>
                </div>
              ))}
            </div>

            {filteredComponents.length === 0 && (
              <div className="text-center py-12">
                <div className="i-ph:package-duotone text-6xl text-bolt-elements-textTertiary mb-4 mx-auto"></div>
                <p className="text-bolt-elements-textSecondary">No components found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
