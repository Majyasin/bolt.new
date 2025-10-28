import { memo, useState, useMemo } from 'react';
import { classNames } from '~/utils/classNames';
import type { FileMap } from '~/lib/stores/files';

interface FileSearchProps {
  files: FileMap;
  onFileSelect: (filePath: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const FileSearch = memo(({ files, onFileSelect, isOpen, onClose }: FileSearchProps) => {
  const [query, setQuery] = useState('');

  const fileList = useMemo(() => {
    return Object.entries(files)
      .filter(([_, file]) => file?.type === 'file')
      .map(([path]) => ({
        path,
        name: path.split('/').pop() || path,
        directory: path.split('/').slice(0, -1).join('/'),
      }));
  }, [files]);

  const filteredFiles = useMemo(() => {
    if (!query) return fileList.slice(0, 50); // Limit initial results
    
    const lowerQuery = query.toLowerCase();
    return fileList
      .filter(file => 
        file.name.toLowerCase().includes(lowerQuery) ||
        file.path.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 50);
  }, [fileList, query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-bolt-elements-background-depth-2 rounded-xl shadow-2xl overflow-hidden animated fadeInScale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="p-4 border-b border-bolt-elements-borderColor">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 i-ph:magnifying-glass text-bolt-elements-textTertiary" />
            <input
              type="text"
              placeholder="Search files..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="w-full pl-10 pr-4 py-2 bg-bolt-elements-background-depth-3 border border-bolt-elements-borderColor rounded-lg text-bolt-elements-textPrimary placeholder-bolt-elements-textTertiary focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
          </div>
          <div className="text-xs text-bolt-elements-textSecondary mt-2">
            {filteredFiles.length} file{filteredFiles.length !== 1 ? 's' : ''} found
          </div>
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {filteredFiles.length === 0 ? (
            <div className="p-8 text-center">
              <div className="i-ph:file-search-duotone text-4xl text-bolt-elements-textTertiary mb-2 mx-auto" />
              <p className="text-bolt-elements-textSecondary">No files found</p>
            </div>
          ) : (
            <div className="py-2">
              {filteredFiles.map((file, index) => (
                <button
                  key={file.path}
                  onClick={() => {
                    onFileSelect(file.path);
                    onClose();
                    setQuery('');
                  }}
                  className={classNames(
                    'w-full px-4 py-2 text-left hover:bg-bolt-elements-item-backgroundActive transition-colors group',
                    {
                      'border-t border-bolt-elements-borderColor': index > 0,
                    }
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="i-ph:file-duotone text-bolt-elements-textSecondary group-hover:text-accent-500" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-bolt-elements-textPrimary font-medium truncate">
                        {file.name}
                      </div>
                      <div className="text-xs text-bolt-elements-textTertiary truncate">
                        {file.directory}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-bolt-elements-borderColor bg-bolt-elements-background-depth-3">
          <div className="flex items-center justify-between text-xs text-bolt-elements-textSecondary">
            <span>Press ESC to close</span>
            <span>↑↓ to navigate, Enter to select</span>
          </div>
        </div>
      </div>
    </div>
  );
});
