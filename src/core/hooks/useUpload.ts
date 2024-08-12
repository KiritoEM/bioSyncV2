import { useState } from "react";

const useUpload = (onChange: (file: File) => void) => {
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
      console.log("File dropped:", e.dataTransfer.files[0]);
      onChange(e.dataTransfer.files[0]);
    }
  };

  return {
    drag,
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};

export default useUpload;
