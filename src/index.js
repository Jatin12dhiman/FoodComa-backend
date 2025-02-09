const express = require('express');
// const bodyParser = require('body-parser')

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
// const User = require('./schema/userSchema');

const app = express();
/**Jis bhi format ki tumahar body request aa rha h tumhe us format ka converter chiye (decoder type ka chiye)  
// They are middle ware iske baad ki jo bhi request hog unpe ye middle ware apply ho jayega
app.use(bodyParser.json()) //KOI bhi http request collect hui  uss request ko(agr wo request json format m h ) to usko kaise read krna h , kaise parshe krna h
app.use(bodyParser.text())
app.use(bodyParser.urlencoded());Url encoded format**/
 app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.post('/ping', (req, res) => {
    console.log(req.body);
    return res.json({message: "pong"});
})

app.listen(ServerConfig.PORT, async () => {
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}...!!`);

    // const newUser = await User.create({
    //     email: 'a@b.com',
    //     password: '123456',
    //     firstName: 'Jonathan',
    //     lastName: 'Majors',
    //     mobileNumber: '1231231230'
    // });

    // console.log("Created new user");
    // console.log(newUser);
});
//  Server start krna h yha se
// dhimanjatin003  11@dhiman    