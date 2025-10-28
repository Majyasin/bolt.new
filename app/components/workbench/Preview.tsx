import { useStore } from '@nanostores/react';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { IconButton } from '~/components/ui/IconButton';
import { workbenchStore } from '~/lib/stores/workbench';
import { PortDropdown } from './PortDropdown';

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

interface DeviceConfig {
  width: string;
  height: string;
  label: string;
  icon: string;
}

const DEVICE_MODES: Record<DeviceMode, DeviceConfig> = {
  desktop: { width: '100%', height: '100%', label: 'Desktop', icon: 'i-ph:desktop-duotone' },
  tablet: { width: '768px', height: '1024px', label: 'Tablet', icon: 'i-ph:device-tablet-duotone' },
  mobile: { width: '375px', height: '667px', label: 'Mobile', icon: 'i-ph:device-mobile-duotone' },
};

export const Preview = memo(() => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const [isPortDropdownOpen, setIsPortDropdownOpen] = useState(false);
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const hasSelectedPreview = useRef(false);
  const previews = useStore(workbenchStore.previews);
  const activePreview = previews[activePreviewIndex];

  const [url, setUrl] = useState('');
  const [iframeUrl, setIframeUrl] = useState<string | undefined>();

  useEffect(() => {
    if (!activePreview) {
      setUrl('');
      setIframeUrl(undefined);

      return;
    }

    const { baseUrl } = activePreview;

    setUrl(baseUrl);
    setIframeUrl(baseUrl);
  }, [activePreview, iframeUrl]);

  const validateUrl = useCallback(
    (value: string) => {
      if (!activePreview) {
        return false;
      }

      const { baseUrl } = activePreview;

      if (value === baseUrl) {
        return true;
      } else if (value.startsWith(baseUrl)) {
        return ['/', '?', '#'].includes(value.charAt(baseUrl.length));
      }

      return false;
    },
    [activePreview],
  );

  const findMinPortIndex = useCallback(
    (minIndex: number, preview: { port: number }, index: number, array: { port: number }[]) => {
      return preview.port < array[minIndex].port ? index : minIndex;
    },
    [],
  );

  // when previews change, display the lowest port if user hasn't selected a preview
  useEffect(() => {
    if (previews.length > 1 && !hasSelectedPreview.current) {
      const minPortIndex = previews.reduce(findMinPortIndex, 0);

      setActivePreviewIndex(minPortIndex);
    }
  }, [previews]);

  const reloadPreview = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  const currentDevice = DEVICE_MODES[deviceMode];

  return (
    <div className="w-full h-full flex flex-col">
      {isPortDropdownOpen && (
        <div className="z-iframe-overlay w-full h-full absolute" onClick={() => setIsPortDropdownOpen(false)} />
      )}
      <div className="bg-bolt-elements-background-depth-2 p-2 flex items-center gap-1.5">
        <IconButton icon="i-ph:arrow-clockwise" onClick={reloadPreview} />
        
        {/* Device Mode Selector */}
        <div className="flex gap-1 border-r border-bolt-elements-borderColor pr-2 mr-1">
          {(Object.keys(DEVICE_MODES) as DeviceMode[]).map((mode) => {
            const device = DEVICE_MODES[mode];
            return (
              <IconButton
                key={mode}
                icon={device.icon}
                title={device.label}
                onClick={() => setDeviceMode(mode)}
                className={deviceMode === mode ? 'bg-bolt-elements-item-backgroundActive text-accent-500' : ''}
              />
            );
          })}
        </div>
        <div
          className="flex items-center gap-1 flex-grow bg-bolt-elements-preview-addressBar-background border border-bolt-elements-borderColor text-bolt-elements-preview-addressBar-text rounded-full px-3 py-1 text-sm hover:bg-bolt-elements-preview-addressBar-backgroundHover hover:focus-within:bg-bolt-elements-preview-addressBar-backgroundActive focus-within:bg-bolt-elements-preview-addressBar-backgroundActive
        focus-within-border-bolt-elements-borderColorActive focus-within:text-bolt-elements-preview-addressBar-textActive"
        >
          <input
            ref={inputRef}
            className="w-full bg-transparent outline-none"
            type="text"
            value={url}
            onChange={(event) => {
              setUrl(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && validateUrl(url)) {
                setIframeUrl(url);

                if (inputRef.current) {
                  inputRef.current.blur();
                }
              }
            }}
          />
        </div>
        {previews.length > 1 && (
          <PortDropdown
            activePreviewIndex={activePreviewIndex}
            setActivePreviewIndex={setActivePreviewIndex}
            isDropdownOpen={isPortDropdownOpen}
            setHasSelectedPreview={(value) => (hasSelectedPreview.current = value)}
            setIsDropdownOpen={setIsPortDropdownOpen}
            previews={previews}
          />
        )}
      </div>
      <div className="flex-1 border-t border-bolt-elements-borderColor bg-gray-100 flex items-center justify-center p-4">
        {activePreview ? (
          <div
            className="bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-300"
            style={{
              width: currentDevice.width,
              height: currentDevice.height,
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          >
            <iframe
              ref={iframeRef}
              className="border-none w-full h-full"
              src={iframeUrl}
              title="Preview"
            />
          </div>
        ) : (
          <div className="flex w-full h-full justify-center items-center">
            <div className="text-center">
              <div className="i-ph:browser-duotone text-6xl text-bolt-elements-textTertiary mb-4 mx-auto" />
              <p className="text-bolt-elements-textSecondary">No preview available</p>
              <p className="text-sm text-bolt-elements-textTertiary mt-2">
                Start a development server to see the preview
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
