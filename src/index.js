const express = require('express');
// const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const userRouter = require('./Routes/userRoute');
const cartRouter = require('./Routes/cartRoute');
const authRouter = require('./Routes/authRoute');
const { isLoggedIn } = require('./validation/authValidator');
const uploader = require('./middlewares/multerMiddleware');
const cloudinary = require('./config/cloudinaryConfig')
const fs = require('fs/promises');
const productRouter = require('./Routes/productRoute');
// const User = require('./schema/userSchema');

const app = express();
/**Jis bhi format ki tumahar body request aa rha h tumhe us format ka converter chiye (decoder type ka chiye)  
// They are middle ware iske baad ki jo bhi request hog unpe ye middle ware apply ho jayega
app.use(bodyParser.json()) //KOI bhi http request collect hui  uss request ko(agr wo request json format m h ) to usko kaise read krna h , kaise parshe krna h
app.use(bodyParser.text())
app.use(bodyParser.urlencoded());Url encoded format**/
app.use(cookieParser())
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// Routing middleware
// If your request route starts with/users then handle it using userRouter
app.use('/users', userRouter) //Connects the router to the server 
app.use('/carts', cartRouter)
app.use('/auth', authRouter);
app.use('/products',productRouter)

app.get('/ping', isLoggedIn, (req, res) => {
    // controller
    console.log(req.body);
    console.log(req.cookies);
    return res.json({message: "pong"});
})

app.post('/photo',uploader.single('incomingFile'), async(req, res)=>{
    console.log(req.file)
    const result = await cloudinary.uploader.upload(req.file.path)
    console.log("result from cloudinary", result)
    await fs.unlink(req.file.path)
    return res.json({message:'OK'})
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

// localhost:3000/users - GET
// localhost:3000/carts/67890877 -GET 