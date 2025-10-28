import { memo, useState, useEffect } from 'react';
import { classNames } from '~/utils/classNames';

interface Command {
  id: string;
  title: string;
  description: string;
  icon: string;
  shortcut?: string;
  category: string;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette = memo(({ isOpen, onClose }: CommandPaletteProps) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const COMMANDS: Command[] = [
    // File Operations
    { id: 'new-file', title: 'New File', description: 'Create a new file', icon: 'i-ph:file-plus-duotone', shortcut: 'Ctrl+N', category: 'File', action: () => {} },
    { id: 'save', title: 'Save File', description: 'Save current file', icon: 'i-ph:floppy-disk-duotone', shortcut: 'Ctrl+S', category: 'File', action: () => {} },
    { id: 'search-files', title: 'Search Files', description: 'Quick file finder', icon: 'i-ph:magnifying-glass-duotone', shortcut: 'Ctrl+P', category: 'File', action: () => {} },
    
    // View
    { id: 'toggle-terminal', title: 'Toggle Terminal', description: 'Show/hide terminal', icon: 'i-ph:terminal-duotone', shortcut: 'Ctrl+J', category: 'View', action: () => {} },
    { id: 'toggle-sidebar', title: 'Toggle Sidebar', description: 'Show/hide sidebar', icon: 'i-ph:sidebar-duotone', shortcut: 'Ctrl+B', category: 'View', action: () => {} },
    { id: 'zen-mode', title: 'Zen Mode', description: 'Distraction-free coding', icon: 'i-ph:eye-closed-duotone', shortcut: 'Ctrl+K Z', category: 'View', action: () => {} },
    
    // AI
    { id: 'ai-explain', title: 'AI: Explain Code', description: 'Get code explanation', icon: 'i-ph:lightbulb-duotone', category: 'AI', action: () => {} },
    { id: 'ai-fix', title: 'AI: Fix Bugs', description: 'Auto-detect and fix bugs', icon: 'i-ph:bug-droid-duotone', category: 'AI', action: () => {} },
    { id: 'ai-refactor', title: 'AI: Refactor', description: 'Improve code structure', icon: 'i-ph:arrows-clockwise-duotone', category: 'AI', action: () => {} },
    
    // Git
    { id: 'git-commit', title: 'Git: Commit', description: 'Commit changes', icon: 'i-ph:git-commit-duotone', category: 'Git', action: () => {} },
    { id: 'git-push', title: 'Git: Push', description: 'Push to remote', icon: 'i-ph:arrow-up-duotone', category: 'Git', action: () => {} },
    { id: 'git-pull', title: 'Git: Pull', description: 'Pull from remote', icon: 'i-ph:arrow-down-duotone', category: 'Git', action: () => {} },
    
    // Tools
    { id: 'snippets', title: 'Code Snippets', description: 'Browse code snippets', icon: 'i-ph:code-block-duotone', category: 'Tools', action: () => {} },
    { id: 'components', title: 'Component Library', description: 'UI component browser', icon: 'i-ph:package-duotone', category: 'Tools', action: () => {} },
    { id: 'keyboard', title: 'Keyboard Shortcuts', description: 'View all shortcuts', icon: 'i-ph:keyboard-duotone', category: 'Tools', action: () => {} },
  ];

  const filteredCommands = query 
    ? COMMANDS.filter(cmd => 
        cmd.title.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.category.toLowerCase().includes(query.toLowerCase())
      )
    : COMMANDS;

  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, Command[]>);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(i => Math.min(i + 1, filteredCommands.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(i => Math.max(i - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        filteredCommands[selectedIndex]?.action();
        onClose();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh] bg-black/60 backdrop-blur-sm animated fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-bolt-elements-background-depth-2 rounded-2xl shadow-2xl border border-bolt-elements-borderColor overflow-hidden animated fadeInScale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="p-4 border-b border-bolt-elements-borderColor">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 i-ph:magnifying-glass text-2xl text-bolt-elements-textTertiary"></div>
            <input
              type="text"
              placeholder="Type a command or search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="w-full pl-12 pr-4 py-4 bg-transparent text-lg text-bolt-elements-textPrimary placeholder-bolt-elements-textTertiary focus:outline-none"
            />
          </div>
        </div>

        {/* Commands List */}
        <div className="max-h-[500px] overflow-y-auto">
          {Object.entries(groupedCommands).map(([category, commands]) => (
            <div key={category}>
              <div className="px-4 py-2 text-xs font-semibold text-bolt-elements-textTertiary uppercase tracking-wider bg-bolt-elements-background-depth-3">
                {category}
              </div>
              {commands.map((command, idx) => {
                const globalIndex = filteredCommands.indexOf(command);
                return (
                  <button
                    key={command.id}
                    onClick={() => {
                      command.action();
                      onClose();
                    }}
                    className={classNames(
                      'w-full px-4 py-3 flex items-center gap-3 transition-all duration-150',
                      {
                        'bg-accent-500/20 border-l-2 border-accent-500': globalIndex === selectedIndex,
                        'hover:bg-bolt-elements-item-backgroundActive': globalIndex !== selectedIndex,
                      }
                    )}
                  >
                    <div className={`${command.icon} text-2xl text-bolt-elements-textSecondary`}></div>
                    <div className="flex-1 text-left">
                      <div className="font-medium text-bolt-elements-textPrimary">{command.title}</div>
                      <div className="text-xs text-bolt-elements-textSecondary">{command.description}</div>
                    </div>
                    {command.shortcut && (
                      <kbd className="px-2 py-1 bg-bolt-elements-code-background text-bolt-elements-code-text rounded text-xs font-mono">
                        {command.shortcut}
                      </kbd>
                    )}
                  </button>
                );
              })}
            </div>
          ))}

          {filteredCommands.length === 0 && (
            <div className="text-center py-12">
              <div className="i-ph:magnifying-glass-duotone text-6xl text-bolt-elements-textTertiary mb-4 mx-auto"></div>
              <p className="text-bolt-elements-textSecondary">No commands found</p>
              <p className="text-sm text-bolt-elements-textTertiary mt-2">Try searching for something else</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-bolt-elements-borderColor bg-bolt-elements-background-depth-3 flex items-center justify-between text-xs text-bolt-elements-textTertiary">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="kdb">↑↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="kdb">Enter</kbd> Execute
            </span>
            <span className="flex items-center gap-1">
              <kbd className="kdb">Esc</kbd> Close
            </span>
          </div>
          <span>{filteredCommands.length} commands</span>
        </div>
      </div>
    </div>
  );
});
