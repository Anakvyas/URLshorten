
const generateurl = require('../utils/generateurl.js')
const Url = require('../model/url.js');


const shortener = async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({ message : "url is required"})
        }
        const short = generateurl();

        const response = await Url.create({
            shorturl: short,
            longurl: url
        })

        return res.status(200).json({
            message:"successfully shorten",
            shorturl:`http:localhost:3000/${short}`,
            longurl:url
        })


    }catch(e){
        res.status(500).json({message: e.message})
    }
}

module.exports = shortener