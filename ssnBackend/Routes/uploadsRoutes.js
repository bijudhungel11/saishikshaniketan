import express from "express";
/* for storing the images */
import multer from "multer";

/* creating the multer storage */
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single("image");

const router = express.Router();
router.post("/", (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.send({ success: false, err });
    return res.send({
      success: true,
      image: req.file.path,
      fileName: req.file.filename,
    });
  });
  /*  res.send(`/${req.file.path}`); */
});

export default router;
