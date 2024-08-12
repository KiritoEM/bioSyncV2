const verifyTypePicture = (file: File): boolean => {
  if (file.type.startsWith("image/")) {
    return true;
  }
  return false;
};

export { verifyTypePicture };
