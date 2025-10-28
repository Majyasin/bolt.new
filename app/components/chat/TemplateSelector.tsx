import { memo, useState } from 'react';
import { PROJECT_TEMPLATES, type ProjectTemplate } from '~/lib/templates';
import { classNames } from '~/utils/classNames';
import { Dialog } from '../ui/Dialog';

interface TemplateSelectorProps {
  onSelectTemplate: (prompt: string) => void;
  onClose: () => void;
}

export const TemplateSelector = memo(({ onSelectTemplate, onClose }: TemplateSelectorProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const allTags = Array.from(new Set(PROJECT_TEMPLATES.flatMap(t => t.tags))).sort();

  const filteredTemplates = PROJECT_TEMPLATES.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => template.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <Dialog isOpen={true} onClose={onClose}>
      <div className="w-[90vw] max-w-6xl max-h-[85vh] flex flex-col bg-bolt-elements-background-depth-2 rounded-xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-bolt-elements-borderColor">
          <div>
            <h2 className="text-2xl font-bold text-bolt-elements-textPrimary mb-1">
              Choose a Template
            </h2>
            <p className="text-sm text-bolt-elements-textSecondary">
              Start your project with a pre-configured template
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-bolt-elements-item-backgroundActive rounded-lg transition-colors"
          >
            <div className="i-ph:x text-xl text-bolt-elements-textSecondary" />
          </button>
        </div>

        {/* Search and Filters */}
        <div className="p-6 border-b border-bolt-elements-borderColor space-y-4">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 i-ph:magnifying-glass text-bolt-elements-textTertiary" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-bolt-elements-background-depth-3 border border-bolt-elements-borderColor rounded-lg text-bolt-elements-textPrimary placeholder-bolt-elements-textTertiary focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={classNames(
                  'px-3 py-1 rounded-full text-sm font-medium transition-all duration-200',
                  {
                    'bg-accent-500 text-white': selectedTags.includes(tag),
                    'bg-bolt-elements-background-depth-3 text-bolt-elements-textSecondary hover:bg-bolt-elements-item-backgroundActive': !selectedTags.includes(tag),
                  }
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onSelect={() => {
                  onSelectTemplate(template.prompt);
                  onClose();
                }}
              />
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <div className="i-ph:folder-notch-open-duotone text-6xl text-bolt-elements-textTertiary mb-4 mx-auto" />
              <p className="text-bolt-elements-textSecondary">No templates found</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-bolt-elements-borderColor">
          <button
            onClick={onClose}
            className="w-full py-2 px-4 bg-bolt-elements-background-depth-3 hover:bg-bolt-elements-item-backgroundActive text-bolt-elements-textPrimary rounded-lg transition-colors"
          >
            Start from Scratch
          </button>
        </div>
      </div>
    </Dialog>
  );
});

interface TemplateCardProps {
  template: ProjectTemplate;
  onSelect: () => void;
}

const TemplateCard = memo(({ template, onSelect }: TemplateCardProps) => {
  return (
    <button
      onClick={onSelect}
      className="group relative p-6 bg-bolt-elements-background-depth-3 hover:bg-bolt-elements-item-backgroundActive border border-bolt-elements-borderColor rounded-xl text-left transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-accent-500"
    >
      <div className={`${template.icon} text-4xl text-accent-500 mb-4`} />
      
      <h3 className="text-lg font-semibold text-bolt-elements-textPrimary mb-2 group-hover:text-accent-500 transition-colors">
        {template.name}
      </h3>
      
      <p className="text-sm text-bolt-elements-textSecondary mb-4 line-clamp-2">
        {template.description}
      </p>
      
      <div className="flex flex-wrap gap-1">
        {template.tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs bg-bolt-elements-background-depth-1 text-bolt-elements-textTertiary rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="i-ph:arrow-right text-accent-500" />
      </div>
    </button>
  );
});
