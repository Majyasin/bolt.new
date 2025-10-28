import { map } from 'nanostores';
import { workbenchStore } from './workbench';

export interface Shortcut {
  key: string;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  metaKey?: boolean;
  ctrlOrMetaKey?: boolean;
  action: () => void;
}

export interface Shortcuts {
  toggleTerminal: Shortcut;
  openFileSearch: Shortcut;
  openCommandPalette: Shortcut;
  openSnippets: Shortcut;
  openComponents: Shortcut;
  openAssets: Shortcut;
}

export interface Settings {
  shortcuts: Shortcuts;
}

export const shortcutsStore = map<Shortcuts>({
  toggleTerminal: {
    key: 'j',
    ctrlOrMetaKey: true,
    action: () => workbenchStore.toggleTerminal(),
  },
  openFileSearch: {
    key: 'p',
    ctrlOrMetaKey: true,
    action: () => workbenchStore.toggleFileSearch(),
  },
  openCommandPalette: {
    key: 'k',
    ctrlOrMetaKey: true,
    action: () => workbenchStore.toggleCommandPalette(),
  },
  openSnippets: {
    key: 's',
    ctrlOrMetaKey: true,
    shiftKey: true,
    action: () => workbenchStore.toggleSnippets(),
  },
  openComponents: {
    key: 'u',
    ctrlOrMetaKey: true,
    shiftKey: true,
    action: () => workbenchStore.toggleComponents(),
  },
  openAssets: {
    key: 'm',
    ctrlOrMetaKey: true,
    shiftKey: true,
    action: () => workbenchStore.toggleAssets(),
  },
});

export const settingsStore = map<Settings>({
  shortcuts: shortcutsStore.get(),
});

shortcutsStore.subscribe((shortcuts) => {
  settingsStore.set({
    ...settingsStore.get(),
    shortcuts,
  });
});
