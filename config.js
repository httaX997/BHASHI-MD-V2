const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "BHASHI-MD~HZVDjDwa#B4SVZUtkUyFh47U52sSNIRB-LSofy0G5t1nm_brR5Cw",
// For extra thing : BHASHI-MD~(megafileid)
  MONGODB: process.env.MONGODB || "mongodb+srv://chethmina:Chetha123@cluster0.3vzso.mongodb.net/",

    
 
};
