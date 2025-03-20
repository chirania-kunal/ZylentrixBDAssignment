// import the model 
const User = require("../models/User");


// createUser business logic
exports.createUser = async(req,res) => {
    try{
        // extract data from request body
        const {firstName,lastName,email,age} =req.body;

        // input validation
        if(!firstName || !lastName || !email || !age){
            return res.status(400).json({
                success : false,
                message : "Fill details Properly",
            })
        }
        
        // create a new Todo Obj and insert in DB
        const response = await User.create({firstName,lastName,email,age});

        // send a json response with a success flag
        res.status(200).json(
            {
                success : true,
                data:response,
                message : 'User Entry Created Successfully'
            }
        )
    }catch(err){
        console.error(err);
        console.log(err);
        res.status(500) 
        .json({
            success:false,
            data : "Error occurred while creating User Entry",
            message : err.message,
        })
    }
}

