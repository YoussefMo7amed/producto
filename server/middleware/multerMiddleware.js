const multer = require("multer");
const fs = require("fs");

// TODO
//    - Handle video duration
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("video/")) {
        cb(null, true);
    } else {
        cb(new Error("File must be a video."));
    }
};

function sanitizeFileName(fileName) {
    const sanitizedFileName = fileName.replace(/[/\\?%*:|"<>]/g, "_").trim();
    return sanitizedFileName;
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const productId = req.params.productId;
        const uploadPath = `./server/uploads/${productId}/`;

        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }

        callback(null, uploadPath);
    },
    filename: (req, file, callback) => {
        callback(
            null,
            sanitizeFileName(new Date().toISOString() + " " + file.originalname)
        );
    },
});

fileSize = 1024 * 1024 * 5; // 5MB

const upload = multer({
    storage: storage,
    limits: { fileSize },
    fileFilter: fileFilter,
}).array("attachments", 5);

module.exports = { upload };
