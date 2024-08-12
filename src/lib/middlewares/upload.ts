import multer from "multer";
import path from "path";

interface MulterFile {
  originalname: string;
  mimetype: string;
}

const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];

const storage = multer.diskStorage({
  destination: function (
    req: any,
    file: MulterFile,
    cb: (error: any, destination: string) => void
  ) {
    const dir = path.resolve("public/uploads/");
    cb(null, dir);
  },
  filename: function (
    req: any,
    file: MulterFile,
    cb: (error: any, filename: string) => void
  ) {
    const ext = path.extname(file.originalname);
    const newFilename = `${file.originalname}-${Date.now()}${ext}`;
    cb(null, newFilename);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (
    req: any,
    file: MulterFile,
    cb: (error: any, acceptFile: boolean) => void
  ) {
    if (allowedImageTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Unsupported file type"), false);
    }
  },
});

export default upload;
