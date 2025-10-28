import { memo, useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { classNames } from '~/utils/classNames';

interface Asset {
  id: string;
  name: string;
  type: 'image' | 'icon' | 'font' | 'video';
  size: string;
  url: string;
  preview?: string;
}

interface AssetManagerProps {
  onClose: () => void;
}

export const AssetManager = memo(({ onClose }: AssetManagerProps) => {
  const [assets] = useState<Asset[]>([
    {
      id: '1',
      name: 'hero-image.png',
      type: 'image',
      size: '2.4 MB',
      url: '/hero.png',
      preview: '🖼️',
    },
    {
      id: '2',
      name: 'logo.svg',
      type: 'icon',
      size: '12 KB',
      url: '/logo.svg',
      preview: '🎨',
    },
  ]);
  
  const [selectedType, setSelectedType] = useState<'all' | 'image' | 'icon' | 'font' | 'video'>('all');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredAssets = selectedType === 'all' 
    ? assets 
    : assets.filter(asset => asset.type === selectedType);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    toast.success('Files uploaded successfully!');
  };

  const copyAssetUrl = (url: string, name: string) => {
    navigator.clipboard.writeText(url);
    toast.success(`Copied URL for "${name}"`);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animated fadeIn">
      <div className="w-full max-w-6xl h-[85vh] bg-bolt-elements-background-depth-2 rounded-2xl shadow-2xl border border-bolt-elements-borderColor flex flex-col overflow-hidden animated fadeInScale">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-bolt-elements-borderColor bg-gradient-to-r from-green-500/10 to-emerald-500/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <div className="i-ph:images-duotone text-2xl text-white"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-bolt-elements-textPrimary">Asset Manager</h2>
              <p className="text-sm text-bolt-elements-textSecondary">Manage images, icons, and media</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
            >
              <div className="i-ph:upload-simple"></div>
              Upload
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-bolt-elements-item-backgroundActive rounded-lg transition-colors"
            >
              <div className="i-ph:x text-xl text-bolt-elements-textSecondary"></div>
            </button>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,video/*,.svg,.ico"
          className="hidden"
          onChange={() => toast.success('Files uploaded!')}
        />

        {/* Toolbar */}
        <div className="flex items-center gap-2 p-4 border-b border-bolt-elements-borderColor">
          {(['all', 'image', 'icon', 'font', 'video'] as const).map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={classNames(
                'px-4 py-2 rounded-lg font-medium capitalize transition-all duration-200',
                {
                  'bg-gradient-to-r from-green-500 to-emerald-600 text-white': selectedType === type,
                  'bg-bolt-elements-background-depth-3 text-bolt-elements-textSecondary hover:bg-bolt-elements-item-backgroundActive': selectedType !== type,
                }
              )}
            >
              {type}
            </button>
          ))}
          
          <div className="flex-1"></div>
          
          <div className="flex items-center gap-2 text-sm text-bolt-elements-textSecondary">
            <span>{filteredAssets.length} assets</span>
            <span>•</span>
            <span>12.6 MB total</span>
          </div>
        </div>

        {/* Drop Zone / Assets Grid */}
        <div 
          className={classNames(
            'flex-1 p-6 overflow-y-auto',
            {
              'border-4 border-dashed border-green-500 bg-green-500/10': isDragging,
            }
          )}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
        >
          {isDragging ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="i-ph:upload-simple-duotone text-6xl text-green-500 mb-4 mx-auto"></div>
                <p className="text-xl text-bolt-elements-textPrimary font-semibold">Drop files here</p>
                <p className="text-bolt-elements-textSecondary mt-2">Support for images, videos, icons, and fonts</p>
              </div>
            </div>
          ) : (
            <>
              {filteredAssets.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {filteredAssets.map(asset => (
                    <div
                      key={asset.id}
                      className="group glass-light rounded-xl p-4 border border-bolt-elements-borderColor hover:border-green-500/50 transition-all duration-300"
                    >
                      <div className="aspect-square bg-bolt-elements-background-depth-3 rounded-lg mb-3 flex items-center justify-center text-4xl">
                        {asset.preview}
                      </div>
                      
                      <h3 className="font-medium text-sm text-bolt-elements-textPrimary truncate mb-1">
                        {asset.name}
                      </h3>
                      
                      <div className="flex items-center justify-between text-xs text-bolt-elements-textTertiary mb-3">
                        <span>{asset.size}</span>
                        <span className="px-2 py-0.5 bg-bolt-elements-background-depth-3 rounded capitalize">
                          {asset.type}
                        </span>
                      </div>

                      <div className="flex gap-1">
                        <button
                          onClick={() => copyAssetUrl(asset.url, asset.name)}
                          className="flex-1 py-1.5 bg-bolt-elements-background-depth-3 hover:bg-bolt-elements-item-backgroundActive rounded text-xs font-medium transition-colors"
                          title="Copy URL"
                        >
                          <div className="i-ph:copy mx-auto"></div>
                        </button>
                        <button
                          className="flex-1 py-1.5 bg-bolt-elements-background-depth-3 hover:bg-bolt-elements-item-backgroundActive rounded text-xs font-medium transition-colors"
                          title="Download"
                        >
                          <div className="i-ph:download-simple mx-auto"></div>
                        </button>
                        <button
                          className="flex-1 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-500 rounded text-xs font-medium transition-colors"
                          title="Delete"
                        >
                          <div className="i-ph:trash mx-auto"></div>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="i-ph:images-duotone text-6xl text-bolt-elements-textTertiary mb-4 mx-auto"></div>
                    <p className="text-bolt-elements-textSecondary mb-4">No assets yet</p>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg font-medium transition-all duration-200"
                    >
                      Upload Your First Asset
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
});
