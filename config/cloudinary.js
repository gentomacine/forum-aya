import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

//config cloudinary

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

//create instance of cloudinarystorage
const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ["jpg", "png"],
    params: {
        folder: "aya-forum",
        transformation: [{ width: 400, height: 400, crop: "limit" }]
    },
})

export default storage;