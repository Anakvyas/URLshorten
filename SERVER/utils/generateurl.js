const generateurl =  () =>{
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let url = "";
    const len = Math.floor(Math.random() * 3) + 6; // 6 to 8 chars
    for(let i = 0 ; i < len ; i++){
        const index = Math.floor(Math.random() * letters.length);
        url+=letters[index];
    }
    return url;
}


module.exports = generateurl;