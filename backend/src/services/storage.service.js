const ImageKit = require('@imagekit/nodejs')

const client = new ImageKit();


const imagekit = new ImageKit({
    publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint:process.env.IMAGE_KIT_URL_ENDPOINT,
})

async function uploadFile(file, fileName) {
    const result = await client.files.upload({
        file: file,
        fileName: 'fileName'
    })
    return result;
}


module.exports = {
    uploadFile
}