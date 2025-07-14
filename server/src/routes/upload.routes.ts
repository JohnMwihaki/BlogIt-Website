import express from 'express';
import multer from 'multer';
import cloudinaryModule from 'cloudinary';

const router = express.Router();
const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'No file' });

    const base64 = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;

    const uploaded = await cloudinary.uploader.upload(base64, {
      folder: 'blogit',
    });

    res.status(200).json({ url: uploaded.secure_url });
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Upload failed' });
  }
});

export default router;
