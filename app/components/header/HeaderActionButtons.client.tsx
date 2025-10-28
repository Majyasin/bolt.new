import { useStore } from '@nanostores/react';
import { toast } from 'react-toastify';
import { chatStore } from '~/lib/stores/chat';
import { workbenchStore } from '~/lib/stores/workbench';
import { classNames } from '~/utils/classNames';
import { exportProjectAsZip } from '~/utils/projectExport';
import { ShareButton } from '../collaboration/ShareButton';

interface HeaderActionButtonsProps {}

export function HeaderActionButtons({}: HeaderActionButtonsProps) {
  const showWorkbench = useStore(workbenchStore.showWorkbench);
  const { showChat } = useStore(chatStore);
  const files = useStore(workbenchStore.files);

  const canHideChat = showWorkbench || !showChat;

  const handleExportProject = async () => {
    try {
      await exportProjectAsZip(files, 'toost-project');
      toast.success('Project exported successfully!');
    } catch (error) {
      console.error('Export failed:', error);
      toast.error('Failed to export project');
    }
  };

  return (
    <div className="flex gap-2">
      {/* Share Button */}
      <ShareButton />
      
      {/* Export Button */}
      <button
        onClick={handleExportProject}
        disabled={Object.keys(files).length === 0}
        className={classNames(
          'flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200',
          {
            'bg-bolt-elements-button-primary-background hover:bg-bolt-elements-button-primary-backgroundHover text-bolt-elements-button-primary-text':
              Object.keys(files).length > 0,
            'bg-bolt-elements-button-secondary-background text-bolt-elements-textTertiary cursor-not-allowed':
              Object.keys(files).length === 0,
          }
        )}
      >
        <div className="i-ph:download-simple-duotone" />
        Export
      </button>
      
      <div className="flex border border-bolt-elements-borderColor rounded-md overflow-hidden">
        <Button
          active={showChat}
          disabled={!canHideChat}
          onClick={() => {
            if (canHideChat) {
              chatStore.setKey('showChat', !showChat);
            }
          }}
        >
          <div className="i-bolt:chat text-sm" />
        </Button>
        <div className="w-[1px] bg-bolt-elements-borderColor" />
        <Button
          active={showWorkbench}
          onClick={() => {
            if (showWorkbench && !showChat) {
              chatStore.setKey('showChat', true);
            }

            workbenchStore.showWorkbench.set(!showWorkbench);
          }}
        >
          <div className="i-ph:code-bold" />
        </Button>
      </div>
    </div>
  );
}

interface ButtonProps {
  active?: boolean;
  disabled?: boolean;
  children?: any;
  onClick?: VoidFunction;
}

function Button({ active = false, disabled = false, children, onClick }: ButtonProps) {
  return (
    <button
      className={classNames('flex items-center p-1.5', {
        'bg-bolt-elements-item-backgroundDefault hover:bg-bolt-elements-item-backgroundActive text-bolt-elements-textTertiary hover:text-bolt-elements-textPrimary':
          !active,
        'bg-bolt-elements-item-backgroundAccent text-bolt-elements-item-contentAccent': active && !disabled,
        'bg-bolt-elements-item-backgroundDefault text-alpha-gray-20 dark:text-alpha-white-20 cursor-not-allowed':
          disabled,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
