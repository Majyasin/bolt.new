import { memo, useState } from 'react';
import { classNames } from '~/utils/classNames';

interface GitStatusProps {
  className?: string;
}

export const GitStatus = memo(({ className }: GitStatusProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [branch] = useState('main');
  const [changes] = useState(5);
  const [commits] = useState([
    { hash: 'a1b2c3d', message: 'Add new features', author: 'You', time: '2 mins ago' },
    { hash: 'e4f5g6h', message: 'Fix bugs', author: 'You', time: '1 hour ago' },
    { hash: 'i7j8k9l', message: 'Update styles', author: 'You', time: '3 hours ago' },
  ]);

  return (
    <div className={classNames('relative', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-bolt-elements-background-depth-3 hover:bg-bolt-elements-item-backgroundActive rounded-lg transition-colors text-sm"
      >
        <div className="i-ph:git-branch-duotone text-accent-500" />
        <span className="text-bolt-elements-textPrimary">{branch}</span>
        {changes > 0 && (
          <span className="px-1.5 py-0.5 bg-accent-500 text-white text-xs rounded-full">
            {changes}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-80 bg-bolt-elements-background-depth-2 rounded-lg shadow-2xl border border-bolt-elements-borderColor overflow-hidden animated fadeInScale z-50">
          <div className="p-4 border-b border-bolt-elements-borderColor">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-bolt-elements-textPrimary">Git Status</h3>
              <button onClick={() => setIsOpen(false)}>
                <div className="i-ph:x text-bolt-elements-textSecondary" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-bolt-elements-textSecondary">
              <div className="i-ph:git-branch-duotone" />
              <span>Branch: <span className="text-bolt-elements-textPrimary">{branch}</span></span>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div>
              <h4 className="text-sm font-medium text-bolt-elements-textPrimary mb-2">Changes ({changes})</h4>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2 text-green-500">
                  <div className="i-ph:plus-circle" />
                  <span>3 files added</span>
                </div>
                <div className="flex items-center gap-2 text-orange-500">
                  <div className="i-ph:pencil-circle" />
                  <span>2 files modified</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-bolt-elements-textPrimary mb-2">Recent Commits</h4>
              <div className="space-y-2">
                {commits.map((commit) => (
                  <div
                    key={commit.hash}
                    className="p-2 bg-bolt-elements-background-depth-3 rounded text-xs"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <code className="text-accent-500">{commit.hash}</code>
                      <span className="text-bolt-elements-textTertiary">{commit.time}</span>
                    </div>
                    <div className="text-bolt-elements-textPrimary">{commit.message}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2 px-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg text-sm font-medium transition-colors">
                Commit
              </button>
              <button className="flex-1 py-2 px-3 bg-bolt-elements-background-depth-3 hover:bg-bolt-elements-item-backgroundActive text-bolt-elements-textPrimary rounded-lg text-sm font-medium transition-colors">
                Push
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
