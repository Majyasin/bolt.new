import { memo, useState } from 'react';
import { toast } from 'react-toastify';
import { classNames } from '~/utils/classNames';
import { Dialog } from '../ui/Dialog';

interface ShareButtonProps {
  projectId?: string;
}

export const ShareButton = memo(({ projectId }: ShareButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateShareUrl = () => {
    setIsGenerating(true);
    
    // Simulate URL generation
    setTimeout(() => {
      const url = `https://toost.dev/share/${Math.random().toString(36).substring(7)}`;
      setShareUrl(url);
      setIsGenerating(false);
    }, 1000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success('Link copied to clipboard!');
  };

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
          if (!shareUrl) generateShareUrl();
        }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-bolt-elements-button-primary-background hover:bg-bolt-elements-button-primary-backgroundHover text-bolt-elements-button-primary-text transition-all duration-200"
      >
        <div className="i-ph:share-network-duotone" />
        Share
      </button>

      {isOpen && (
        <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="w-full max-w-md bg-bolt-elements-background-depth-2 rounded-xl shadow-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-bolt-elements-textPrimary">Share Project</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-bolt-elements-item-backgroundActive rounded transition-colors"
              >
                <div className="i-ph:x text-bolt-elements-textSecondary" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-bolt-elements-textSecondary">
                Share this project with others. They'll be able to view and collaborate in real-time.
              </p>

              {isGenerating ? (
                <div className="flex items-center justify-center py-8">
                  <div className="i-svg-spinners:90-ring-with-bg text-4xl text-accent-500" />
                </div>
              ) : shareUrl ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-3 bg-bolt-elements-background-depth-3 rounded-lg border border-bolt-elements-borderColor">
                    <input
                      type="text"
                      value={shareUrl}
                      readOnly
                      className="flex-1 bg-transparent text-sm text-bolt-elements-textPrimary outline-none"
                    />
                    <button
                      onClick={copyToClipboard}
                      className="p-2 hover:bg-bolt-elements-item-backgroundActive rounded transition-colors"
                    >
                      <div className="i-ph:copy text-bolt-elements-textSecondary" />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <button className="flex flex-col items-center gap-2 p-3 bg-bolt-elements-background-depth-3 hover:bg-bolt-elements-item-backgroundActive rounded-lg transition-colors">
                      <div className="i-ph:link-duotone text-2xl text-accent-500" />
                      <span className="text-xs text-bolt-elements-textSecondary">Copy Link</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-3 bg-bolt-elements-background-depth-3 hover:bg-bolt-elements-item-backgroundActive rounded-lg transition-colors">
                      <div className="i-ph:envelope-duotone text-2xl text-accent-500" />
                      <span className="text-xs text-bolt-elements-textSecondary">Email</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-3 bg-bolt-elements-background-depth-3 hover:bg-bolt-elements-item-backgroundActive rounded-lg transition-colors">
                      <div className="i-ph:qr-code-duotone text-2xl text-accent-500" />
                      <span className="text-xs text-bolt-elements-textSecondary">QR Code</span>
                    </button>
                  </div>

                  <div className="p-3 bg-accent-500/10 border border-accent-500/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <div className="i-ph:info-duotone text-accent-500 mt-0.5" />
                      <p className="text-xs text-bolt-elements-textSecondary">
                        This link will expire in 7 days. Shared projects are read-only by default.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
});
