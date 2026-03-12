import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadonCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("File is uploaded on Cloudinary",response.url);
        return response;
        //When a file uploads successfully, Cloudinary returns a JSON response with details about the uploaded asset. 
        /*
            -Typical fields you’ll get include:
            -public_id (the asset’s ID)
            -version
            -url and secure_url (HTTP and HTTPS delivery URLs)
            -format, width, height (for images), duration (for videos)
            -bytes (file size)
            -signature (to verify the response)
        */
    } catch (error) {
        fs.unlinkSync(localFilePath); // remove the locally temporary file as the upload operation got failed
        return null;

    }
}

return {uploadonCloudinary}





// cloudinary.uploader.upload("./path/to/your/file", {
//   resource_type: "auto"
// })
//   .then(result => console.log(result.secure_url));