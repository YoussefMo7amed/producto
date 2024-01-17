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

fileSize = 1024 * 1024 * 5; // 5MB

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize },
    fileFilter: fileFilter,
}).array("attachments", 5);

module.exports = { upload };
