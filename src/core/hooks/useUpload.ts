import { useState } from "react";

const useUpload = (onChange: (file: File | null) => void) => {
  const [drag, setDrag] = useState<boolean>(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(true);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDrag(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onChange(e.dataTransfer.files[0]);
    }
  };

  const resetDrop = () => {
    onChange(null);
  };

  return {
    drag,
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    resetDrop,
  };
};

export default useUpload;
