import { memo } from 'react';
import { classNames } from '~/utils/classNames';
import { IconButton } from '../ui/IconButton';

export interface FileTab {
  filePath: string;
  isUnsaved: boolean;
}

interface FileTabsProps {
  tabs: FileTab[];
  selectedFile?: string;
  onFileSelect: (filePath: string) => void;
  onFileClose: (filePath: string) => void;
}

export const FileTabs = memo(({ tabs, selectedFile, onFileSelect, onFileClose }: FileTabsProps) => {
  if (tabs.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center overflow-x-auto bg-bolt-elements-background-depth-2 border-b border-bolt-elements-borderColor px-2 py-1 gap-1">
      {tabs.map((tab) => {
        const isActive = tab.filePath === selectedFile;
        const fileName = tab.filePath.split('/').pop() || tab.filePath;

        return (
          <div
            key={tab.filePath}
            className={classNames(
              'group flex items-center gap-2 px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200 min-w-fit max-w-[200px]',
              {
                'bg-bolt-elements-background-depth-3 text-bolt-elements-textPrimary shadow-sm': isActive,
                'bg-transparent text-bolt-elements-textSecondary hover:bg-bolt-elements-background-depth-3 hover:text-bolt-elements-textPrimary':
                  !isActive,
              },
            )}
            onClick={() => onFileSelect(tab.filePath)}
          >
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className={classNames('i-ph:file-duotone text-sm flex-shrink-0', {
                'text-accent-500': isActive,
              })} />
              <span className="text-sm truncate">{fileName}</span>
              {tab.isUnsaved && (
                <div className="w-2 h-2 rounded-full bg-accent-500 flex-shrink-0" title="Unsaved changes" />
              )}
            </div>
            <button
              className={classNames(
                'flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity',
                {
                  'opacity-100': isActive,
                }
              )}
              onClick={(e) => {
                e.stopPropagation();
                onFileClose(tab.filePath);
              }}
            >
              <div className="i-ph:x text-sm hover:text-bolt-elements-textPrimary" />
            </button>
          </div>
        );
      })}
    </div>
  );
});
