import * as JSZip from 'jszip';
import type { FileMap } from '~/lib/stores/files';

export async function exportProjectAsZip(files: FileMap, projectName: string = 'project'): Promise<void> {
  const zip = new JSZip.default();

  // Add files to zip
  for (const [filePath, file] of Object.entries(files)) {
    if (file?.type === 'file' && file.content) {
      // Remove leading slash and working directory prefix
      const cleanPath = filePath.replace(/^\//, '').replace(/^home\/project\//, '');
      zip.file(cleanPath, file.content);
    }
  }

  // Generate zip file
  const blob = await zip.generateAsync({ type: 'blob' });
  
  // Create download link
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${projectName}.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export async function importProjectFromZip(file: File): Promise<FileMap> {
  const zip = new JSZip.default();
  const contents = await zip.loadAsync(file);
  const files: FileMap = {};

  for (const [filePath, zipEntry] of Object.entries(contents.files)) {
    if (!zipEntry.dir) {
      const content = await zipEntry.async('text');
      files[`/home/project/${filePath}`] = {
        type: 'file',
        content,
      };
    } else {
      files[`/home/project/${filePath}`] = {
        type: 'directory',
      };
    }
  }

  return files;
}
