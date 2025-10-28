import { memo, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { classNames } from '~/utils/classNames';

interface FileUploadProps {
  onFilesUpload: (files: Array<{ path: string; content: string }>) => void;
}

export const FileUpload = memo(({ onFilesUpload }: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const items = Array.from(e.dataTransfer.items);
    const uploadedFiles: Array<{ path: string; content: string }> = [];

    for (const item of items) {
      if (item.kind === 'file') {
        const file = item.getAsFile();
        if (file) {
          const content = await file.text();
          uploadedFiles.push({
            path: file.name,
            content,
          });
        }
      }
    }

    if (uploadedFiles.length > 0) {
      onFilesUpload(uploadedFiles);
      toast.success(`Uploaded ${uploadedFiles.length} file(s)`);
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const uploadedFiles: Array<{ path: string; content: string }> = [];

    for (const file of files) {
      const content = await file.text();
      uploadedFiles.push({
        path: file.name,
        content,
      });
    }

    if (uploadedFiles.length > 0) {
      onFilesUpload(uploadedFiles);
      toast.success(`Uploaded ${uploadedFiles.length} file(s)`);
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={classNames(
        'border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200',
        {
          'border-accent-500 bg-accent-500/10': isDragging,
          'border-bolt-elements-borderColor hover:border-accent-500/50': !isDragging,
        }
      )}
    >
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileInput}
        className="hidden"
      />
      
      <div className="i-ph:upload-simple-duotone text-4xl text-bolt-elements-textTertiary mb-3 mx-auto" />
      
      <p className="text-sm text-bolt-elements-textPrimary mb-2">
        Drag and drop files here
      </p>
      
      <p className="text-xs text-bolt-elements-textSecondary mb-4">
        or
      </p>
      
      <button
        onClick={() => fileInputRef.current?.click()}
        className="px-4 py-2 bg-bolt-elements-button-primary-background hover:bg-bolt-elements-button-primary-backgroundHover text-bolt-elements-button-primary-text rounded-lg transition-colors"
      >
        Browse Files
      </button>
    </div>
  );
});
