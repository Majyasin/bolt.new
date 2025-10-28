import { memo, useState } from 'react';
import { classNames } from '~/utils/classNames';

export interface AIModel {
  id: string;
  name: string;
  provider: string;
  icon: string;
  description: string;
  color: string;
  maxTokens?: number;
  costPer1k?: number;
}

export const AI_MODELS: AIModel[] = [
  {
    id: 'claude-3.5-sonnet',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    icon: 'i-ph:brain-duotone',
    description: 'Best for coding and analysis',
    color: 'from-purple-500 to-pink-600',
    maxTokens: 200000,
    costPer1k: 0.003,
  },
  {
    id: 'gpt-4-turbo',
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    icon: 'i-ph:lightning-duotone',
    description: 'Faster responses, great performance',
    color: 'from-blue-500 to-cyan-600',
    maxTokens: 128000,
    costPer1k: 0.01,
  },
  {
    id: 'gpt-4',
    name: 'GPT-4',
    provider: 'OpenAI',
    icon: 'i-ph:robot-duotone',
    description: 'Most capable for complex tasks',
    color: 'from-green-500 to-emerald-600',
    maxTokens: 8192,
    costPer1k: 0.03,
  },
  {
    id: 'claude-3-opus',
    name: 'Claude 3 Opus',
    provider: 'Anthropic',
    icon: 'i-ph:crown-duotone',
    description: 'Top-tier intelligence',
    color: 'from-purple-600 to-purple-800',
    maxTokens: 200000,
    costPer1k: 0.015,
  },
  {
    id: 'gemini-pro',
    name: 'Gemini Pro',
    provider: 'Google',
    icon: 'i-ph:sparkle-duotone',
    description: 'Excellent multimodal capabilities',
    color: 'from-orange-500 to-red-600',
    maxTokens: 32000,
    costPer1k: 0.00025,
  },
  {
    id: 'claude-3-haiku',
    name: 'Claude 3 Haiku',
    provider: 'Anthropic',
    icon: 'i-ph:rocket-duotone',
    description: 'Fast and efficient',
    color: 'from-cyan-500 to-blue-600',
    maxTokens: 200000,
    costPer1k: 0.00025,
  },
];

interface ModelSelectorProps {
  selectedModel: string;
  onModelChange: (modelId: string) => void;
  compact?: boolean;
}

export const ModelSelector = memo(({ selectedModel, onModelChange, compact = false }: ModelSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const currentModel = AI_MODELS.find(m => m.id === selectedModel) || AI_MODELS[0];

  if (compact) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 glass hover:bg-white/10 rounded-lg transition-all duration-200 text-sm"
        >
          <div className={`w-6 h-6 rounded bg-gradient-to-br ${currentModel.color} flex items-center justify-center`}>
            <div className={`${currentModel.icon} text-white text-xs`}></div>
          </div>
          <span className="text-bolt-elements-textPrimary font-medium">{currentModel.name}</span>
          <div className={classNames('i-ph:caret-down transition-transform', {
            'rotate-180': isOpen
          })}></div>
        </button>

        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute top-full mt-2 right-0 w-80 glass-light rounded-xl shadow-2xl border border-bolt-elements-borderColor overflow-hidden z-50 animated fadeInScale">
              <div className="p-4 border-b border-bolt-elements-borderColor">
                <h3 className="font-semibold text-bolt-elements-textPrimary">Select AI Model</h3>
              </div>
              <div className="max-h-96 overflow-y-auto p-2">
                {AI_MODELS.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => {
                      onModelChange(model.id);
                      setIsOpen(false);
                    }}
                    className={classNames(
                      'w-full p-3 rounded-lg transition-all duration-200 flex items-start gap-3 text-left',
                      {
                        'bg-accent-500/20 border border-accent-500': selectedModel === model.id,
                        'hover:bg-bolt-elements-item-backgroundActive': selectedModel !== model.id,
                      }
                    )}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${model.color} flex items-center justify-center flex-shrink-0`}>
                      <div className={`${model.icon} text-white text-lg`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-bolt-elements-textPrimary">{model.name}</span>
                        {selectedModel === model.id && (
                          <div className="i-ph:check-circle-fill text-accent-500"></div>
                        )}
                      </div>
                      <p className="text-xs text-bolt-elements-textSecondary mb-1">{model.provider}</p>
                      <p className="text-xs text-bolt-elements-textTertiary">{model.description}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-bolt-elements-textTertiary">
                        <span>{(model.maxTokens! / 1000).toFixed(0)}K tokens</span>
                        <span>•</span>
                        <span>${model.costPer1k}/1K</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {AI_MODELS.map((model) => (
        <button
          key={model.id}
          onClick={() => onModelChange(model.id)}
          className={classNames(
            'relative p-6 rounded-xl transition-all duration-300 text-left border-2',
            {
              'glass-light border-accent-500 shadow-lg shadow-accent-500/25': selectedModel === model.id,
              'glass border-transparent hover:border-white/20': selectedModel !== model.id,
            }
          )}
        >
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${model.color} flex items-center justify-center mb-4`}>
            <div className={`${model.icon} text-2xl text-white`}></div>
          </div>
          
          <h4 className="font-bold text-bolt-elements-textPrimary mb-1">{model.name}</h4>
          <p className="text-xs text-bolt-elements-textSecondary mb-2">{model.provider}</p>
          <p className="text-sm text-bolt-elements-textTertiary mb-3">{model.description}</p>
          
          <div className="flex items-center gap-3 text-xs text-bolt-elements-textTertiary">
            <span className="flex items-center gap-1">
              <div className="i-ph:database-duotone"></div>
              {(model.maxTokens! / 1000).toFixed(0)}K
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <div className="i-ph:currency-dollar-duotone"></div>
              {model.costPer1k}/1K
            </span>
          </div>

          {selectedModel === model.id && (
            <div className="absolute top-4 right-4">
              <div className="i-ph:check-circle-fill text-2xl text-accent-500"></div>
            </div>
          )}
        </button>
      ))}
    </div>
  );
});
