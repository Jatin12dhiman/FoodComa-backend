const dotenv  = require('dotenv');
dotenv.config();

//Here We are Exporting all the env variables that uses
module.exports = {
    PORT : process.env.PORT ||8008,
    DB_URL:process.env.DB_URL  
}
// Module ek gloabal variable jo node hme deta h, exports ek property h jo ek object h
// apne environment variable ko dotenv se manage krne ki responsibility bhi m yhi se de ra hu