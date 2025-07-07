const Url = require('../model/url.js');
const Client = require('../client.js')
const geturl = async (req,res)=>{
    try{
        const url  = req.params.url;

        const cachedvalue =  await Client.get(url);
        if(cachedvalue){
            return res.redirect(cachedvalue);
        }

        const val = await Url.findOne({shorturl:url});
        
        val.accessLogs.push(new Date())
        await val.save();

        await Client.set(url,val.longurl);
        await Client.expire(url,5*60) // 5min

        return res.redirect(val.longurl);

    }catch(e){
        res.status(500).json({message:e.message})
    }
}

module.exports = geturl;