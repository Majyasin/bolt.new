import { memo, useState } from 'react';
import { toast } from 'react-toastify';
import { classNames } from '~/utils/classNames';

interface AIAssistantProps {
  selectedCode?: string;
  filePath?: string;
  onClose: () => void;
}

const AI_ACTIONS = [
  { id: 'explain', label: 'Explain Code', icon: 'i-ph:lightbulb-duotone', prompt: 'Explain this code:' },
  { id: 'improve', label: 'Improve Code', icon: 'i-ph:magic-wand-duotone', prompt: 'Improve this code:' },
  { id: 'fix', label: 'Fix Bugs', icon: 'i-ph:bug-droid-duotone', prompt: 'Find and fix bugs in this code:' },
  { id: 'refactor', label: 'Refactor', icon: 'i-ph:arrows-clockwise-duotone', prompt: 'Refactor this code:' },
  { id: 'document', label: 'Add Comments', icon: 'i-ph:file-text-duotone', prompt: 'Add documentation comments to this code:' },
  { id: 'test', label: 'Write Tests', icon: 'i-ph:test-tube-duotone', prompt: 'Write unit tests for this code:' },
];

export const AIAssistant = memo(({ selectedCode, filePath, onClose }: AIAssistantProps) => {
  const [customPrompt, setCustomPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAction = async (action: typeof AI_ACTIONS[0]) => {
    if (!selectedCode) {
      toast.error('No code selected');
      return;
    }

    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      toast.info(`Processing: ${action.label}...`);
      setIsProcessing(false);
      onClose();
    }, 1000);
  };

  const handleCustomPrompt = () => {
    if (!customPrompt.trim()) {
      toast.error('Please enter a prompt');
      return;
    }

    setIsProcessing(true);
    
    setTimeout(() => {
      toast.info('Processing your request...');
      setIsProcessing(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-bolt-elements-background-depth-2 rounded-xl shadow-2xl border border-bolt-elements-borderColor overflow-hidden animated fadeInScale z-[9999]">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-bolt-elements-borderColor bg-gradient-to-r from-accent-500/10 to-accent-700/10">
        <div className="flex items-center gap-2">
          <div className="i-ph:sparkle-duotone text-xl text-accent-500" />
          <h3 className="font-semibold text-bolt-elements-textPrimary">AI Assistant</h3>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-bolt-elements-item-backgroundActive rounded transition-colors"
        >
          <div className="i-ph:x text-bolt-elements-textSecondary" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4 max-h-[500px] overflow-y-auto">
        {selectedCode && (
          <div className="text-xs text-bolt-elements-textSecondary">
            <div className="flex items-center gap-2 mb-2">
              <div className="i-ph:selection-duotone" />
              <span>Code selected from: {filePath?.split('/').pop()}</span>
            </div>
            <div className="bg-bolt-elements-code-background p-2 rounded max-h-24 overflow-auto">
              <code className="text-xs">{selectedCode.substring(0, 200)}...</code>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div>
          <h4 className="text-sm font-medium text-bolt-elements-textPrimary mb-2">Quick Actions</h4>
          <div className="grid grid-cols-2 gap-2">
            {AI_ACTIONS.map((action) => (
              <button
                key={action.id}
                onClick={() => handleAction(action)}
                disabled={!selectedCode || isProcessing}
                className={classNames(
                  'flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-200',
                  {
                    'bg-bolt-elements-background-depth-3 hover:bg-bolt-elements-item-backgroundActive text-bolt-elements-textPrimary':
                      selectedCode && !isProcessing,
                    'bg-bolt-elements-background-depth-3 text-bolt-elements-textTertiary cursor-not-allowed':
                      !selectedCode || isProcessing,
                  }
                )}
              >
                <div className={`${action.icon} text-2xl`} />
                <span className="text-xs text-center">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Prompt */}
        <div>
          <h4 className="text-sm font-medium text-bolt-elements-textPrimary mb-2">Custom Request</h4>
          <div className="space-y-2">
            <textarea
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="Ask AI anything about your code..."
              className="w-full px-3 py-2 bg-bolt-elements-background-depth-3 border border-bolt-elements-borderColor rounded-lg text-sm text-bolt-elements-textPrimary placeholder-bolt-elements-textTertiary focus:outline-none focus:ring-2 focus:ring-accent-500 resize-none"
              rows={3}
            />
            <button
              onClick={handleCustomPrompt}
              disabled={isProcessing}
              className={classNames(
                'w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors',
                {
                  'bg-gradient-to-r from-accent-500 to-accent-700 hover:from-accent-600 hover:to-accent-800 text-white':
                    !isProcessing,
                  'bg-bolt-elements-background-depth-3 text-bolt-elements-textTertiary cursor-not-allowed':
                    isProcessing,
                }
              )}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="i-svg-spinners:90-ring-with-bg" />
                  Processing...
                </div>
              ) : (
                'Ask AI'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-bolt-elements-borderColor bg-bolt-elements-background-depth-3">
        <p className="text-xs text-bolt-elements-textTertiary text-center">
          Select code in the editor to enable AI actions
        </p>
      </div>
    </div>
  );
});
