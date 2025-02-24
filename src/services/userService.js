const {findUser, createUser} = require("../repositories/userRepository");

    async function registerUser(userDetails){
        console.log("Hitting Service Layer")
        // It will create a brand new user in the db

        // 1.We need to check if the user with this email and mobile number already exists or not
        const user = await findUser({
            email: userDetails.email,
            mobileNumber:userDetails.mobileNumber
        })

        if(user){
            // we found a user
            throw {reason :'User with the given email and mobile number already exist', statusCode: 400 }
        }
        
        // 2.IF not then create the user in the database 
        const newUser = await createUser({
            email:userDetails.email,
            password:userDetails.password,
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            mobileNumber: userDetails.mobileNumber
        });
        
        if(!newUser){
            throw{reason:'Something Went Wrong , cannot create user', statusCode: 500}
        }

        // 3. return the details of create user
        return newUser;
    }


module.exports = {
    registerUser
}