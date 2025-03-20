const User = require("../models/User");

// define getUser route handler
exports.getUser = async(req,res) => {
    try{

        // fetching all the User throough find method
        const user = await User.find({});

        // response
        res.status(200)
        .json({
            success: true,
            data: user,
            message: "All User Details fetched Successfully",
        });

    }
    catch(err){
        console.error(err);
        res.status(500) 
        .json({
            success:false,
            error:error.message,
            message : "Error while fetching User Details",
        });
    }
}

// define getUserById route handler
exports.getUserById = async(req,res) => {
    try{

        // extract user items basis on id
        console.log("jhjhfdh");
        const id=req.params.id;
        const user = await User.findById( {_id: id } )

        if(!user){
            return res.status(404).json({
                success:false,
                message:"No User data Found with Given Id",
            })
        }
        // data found for given id found
        res.status(200).json({
            success: true,
            data:user,
            message:`User ${id} data successfully fetched`,
        })
    }
    catch(err){
        console.error(err);
        res.status(500) 
        .json({
            success:false,
            error:err.message,
            message : "Error occurred while fetching User Details By Id",
        });
    }

}