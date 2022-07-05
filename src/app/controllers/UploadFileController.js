const uploadFileController = {
    storeFile: (req, res) => {
        const {filename} = req.file

        res.json({ arquivo: filename })
    }
}

module.exports = uploadFileController