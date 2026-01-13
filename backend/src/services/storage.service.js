const ImageKit = require('@imagekit/nodejs')


const imagekit = new ImageKit({
    publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint:process.env.IMAGE_KIT_URL_ENDPOINT,
})

async function uploadFile(buffer, fileName) {
    const base64File = buffer.toString("base64")

    const result = await imagekit.files.upload({
        file: base64File,
        fileName: fileName
    })
    return result;
}


module.exports = {
    uploadFile
}