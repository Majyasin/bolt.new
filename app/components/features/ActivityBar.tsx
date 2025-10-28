import { memo, useState } from 'react';
import { classNames } from '~/utils/classNames';

type Activity = 'files' | 'search' | 'git' | 'extensions' | 'ai' | 'assets';

interface ActivityBarProps {
  onActivityChange?: (activity: Activity) => void;
}

const ACTIVITIES = [
  { id: 'files' as Activity, icon: 'i-ph:files-duotone', label: 'Explorer', shortcut: 'Ctrl+Shift+E' },
  { id: 'search' as Activity, icon: 'i-ph:magnifying-glass-duotone', label: 'Search', shortcut: 'Ctrl+Shift+F' },
  { id: 'git' as Activity, icon: 'i-ph:git-branch-duotone', label: 'Source Control', shortcut: 'Ctrl+Shift+G' },
  { id: 'ai' as Activity, icon: 'i-ph:sparkle-duotone', label: 'AI Assistant', shortcut: 'Ctrl+Shift+A' },
  { id: 'assets' as Activity, icon: 'i-ph:images-duotone', label: 'Assets', shortcut: 'Ctrl+Shift+M' },
  { id: 'extensions' as Activity, icon: 'i-ph:puzzle-piece-duotone', label: 'Extensions', shortcut: 'Ctrl+Shift+X' },
];

export const ActivityBar = memo(({ onActivityChange }: ActivityBarProps) => {
  const [activeActivity, setActiveActivity] = useState<Activity>('files');
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  const handleActivityClick = (activity: Activity) => {
    if (activeActivity === activity) {
      setIsPanelOpen(!isPanelOpen);
    } else {
      setActiveActivity(activity);
      setIsPanelOpen(true);
      onActivityChange?.(activity);
    }
  };

  return (
    <div className="flex h-full">
      {/* Activity Bar */}
      <div className="w-14 bg-bolt-elements-background-depth-3 border-r border-bolt-elements-borderColor flex flex-col items-center py-2 gap-1">
        {ACTIVITIES.map((activity) => (
          <button
            key={activity.id}
            onClick={() => handleActivityClick(activity.id)}
            title={`${activity.label} (${activity.shortcut})`}
            className={classNames(
              'w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 relative group',
              {
                'bg-accent-500/20 text-accent-500': activeActivity === activity.id && isPanelOpen,
                'text-bolt-elements-textTertiary hover:bg-bolt-elements-item-backgroundActive hover:text-bolt-elements-textPrimary': 
                  activeActivity !== activity.id || !isPanelOpen,
              }
            )}
          >
            <div className={`${activity.icon} text-2xl`}></div>
            {activeActivity === activity.id && isPanelOpen && (
              <div className="absolute left-0 w-0.5 h-8 bg-accent-500 rounded-r"></div>
            )}
            
            {/* Tooltip */}
            <div className="absolute left-full ml-2 px-2 py-1 bg-bolt-elements-background-depth-2 border border-bolt-elements-borderColor rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-sm z-50">
              <div className="text-bolt-elements-textPrimary font-medium">{activity.label}</div>
              <div className="text-xs text-bolt-elements-textTertiary">{activity.shortcut}</div>
            </div>
          </button>
        ))}
        
        <div className="flex-1"></div>
        
        {/* Settings at bottom */}
        <button
          className="w-12 h-12 rounded-lg flex items-center justify-center text-bolt-elements-textTertiary hover:bg-bolt-elements-item-backgroundActive hover:text-bolt-elements-textPrimary transition-all duration-200"
          title="Settings"
        >
          <div className="i-ph:gear-duotone text-2xl"></div>
        </button>
      </div>

      {/* Activity Panel */}
      {isPanelOpen && (
        <div className="w-64 bg-bolt-elements-background-depth-2 border-r border-bolt-elements-borderColor flex flex-col animated fadeInRight">
          <div className="p-4 border-b border-bolt-elements-borderColor">
            <h3 className="font-semibold text-bolt-elements-textPrimary flex items-center gap-2">
              <div className={`${ACTIVITIES.find(a => a.id === activeActivity)?.icon} text-xl`}></div>
              {ACTIVITIES.find(a => a.id === activeActivity)?.label}
            </h3>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {activeActivity === 'files' && (
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 rounded hover:bg-bolt-elements-item-backgroundActive text-sm text-bolt-elements-textPrimary flex items-center gap-2">
                  <div className="i-ph:folder-duotone"></div>
                  src
                </button>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-bolt-elements-item-backgroundActive text-sm text-bolt-elements-textPrimary flex items-center gap-2">
                  <div className="i-ph:file-duotone"></div>
                  index.tsx
                </button>
              </div>
            )}

            {activeActivity === 'search' && (
              <div>
                <input
                  type="text"
                  placeholder="Search in files..."
                  className="w-full px-3 py-2 bg-bolt-elements-background-depth-3 border border-bolt-elements-borderColor rounded-lg text-sm text-bolt-elements-textPrimary placeholder-bolt-elements-textTertiary focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
                <p className="text-xs text-bolt-elements-textTertiary mt-4">No results found</p>
              </div>
            )}

            {activeActivity === 'git' && (
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium text-bolt-elements-textPrimary mb-2">Changes</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-bolt-elements-textSecondary">
                      <div className="i-ph:file-duotone text-green-500"></div>
                      <span className="text-xs">file1.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 text-bolt-elements-textSecondary">
                      <div className="i-ph:file-duotone text-orange-500"></div>
                      <span className="text-xs">file2.tsx</span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-lg text-sm font-medium transition-colors">
                  Commit Changes
                </button>
              </div>
            )}

            {activeActivity === 'ai' && (
              <div className="space-y-3">
                <div className="p-3 glass-light rounded-lg border border-bolt-elements-borderColor">
                  <div className="text-sm text-bolt-elements-textPrimary mb-2">💡 Quick Actions</div>
                  <div className="space-y-1 text-xs">
                    <button className="w-full text-left p-2 hover:bg-bolt-elements-item-backgroundActive rounded">
                      Explain Code
                    </button>
                    <button className="w-full text-left p-2 hover:bg-bolt-elements-item-backgroundActive rounded">
                      Fix Bugs
                    </button>
                    <button className="w-full text-left p-2 hover:bg-bolt-elements-item-backgroundActive rounded">
                      Refactor
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeActivity === 'assets' && (
              <div className="space-y-2">
                <button className="w-full p-3 glass-light rounded-lg border border-bolt-elements-borderColor hover:border-accent-500/50 transition-colors text-center">
                  <div className="i-ph:upload-simple-duotone text-3xl text-bolt-elements-textTertiary mb-1"></div>
                  <div className="text-sm text-bolt-elements-textPrimary">Upload Assets</div>
                </button>
              </div>
            )}

            {activeActivity === 'extensions' && (
              <div>
                <p className="text-sm text-bolt-elements-textSecondary">Browse and install extensions to enhance Toost</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
});
