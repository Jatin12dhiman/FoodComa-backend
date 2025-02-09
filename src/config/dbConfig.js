// const mongoose = require('mongoose');
// const serverConfig = require('./serverConfig');

// /**
//  * the below Function to connect to the MongoDB server
//  */
// async function connectDB() {
//     try {
//         await mongoose.connect(serverConfig.DB_URL); // ✅ Removed deprecated options
//         console.log('✅ Successfully connected to the MongoDB server...');
//     } catch (error) {
//         console.error('❌ Failed to connect to MongoDB:', error);
//         process.exit(1); // Exit the process on failure
//     }
// }

// module.exports = connectDB;
const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');

/**
 * The below function helps us to connect to a mongodb server
 */
async function connectDB() {
    try {
        await mongoose.connect(serverConfig.DB_URL);
        console.log("Successfully connected to the mongo db server .....");
    } catch (error) {
        console.log("Not able to connect to the mongodb server");
        console.log(error);
    }
}

module.exports = connectDB;