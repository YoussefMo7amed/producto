const { upload } = require("./multerMiddleware");
require("dotenv").config();

const {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} = require("firebase/storage");
const { signInWithEmailAndPassword } = require("firebase/auth");
const { auth } = require("./firebase.config");

let storage;

function sanitizeFileName(fileName) {
    const sanitizedFileName = fileName.replace(/[/\\?%*:|"<>]/g, "_").trim();
    return sanitizedFileName;
}

async function filesUploading(files, productId, directoryName) {
    let attachments = [];
    for (let i = 0; i < files.length; i++) {
        let file = files[0];
        const uploadPath = `${directoryName}/${productId}/`;
        const fileName =
            uploadPath +
            sanitizeFileName(
                new Date().toISOString() + "-" + file.originalname
            );
        const storageRef = ref(storage, fileName);
        const metadata = {
            contentType: file.mimetype,
        };
        await uploadBytesResumable(storageRef, file.buffer, metadata);
        const downloadURL = await getDownloadURL(storageRef);
        attachments.push(downloadURL);
    }
    return attachments;
}

const firebaseMiddleware = async (req, res, next) => {
    const { productId } = req.body;

    console.log(productId);

    storage = getStorage();
    await signInWithEmailAndPassword(
        auth,
        process.env.FIREBASE_USER,
        process.env.FIREBASE_AUTH
    );

    try {
        req.body.attachments = await filesUploading(
            req.files,
            productId,
            "videos"
        );
    } catch (error) {
        console.log(err);
    }
    console.log("attachments body", req.body.attachments);
    next();
};

module.exports = { firebaseMiddleware };
