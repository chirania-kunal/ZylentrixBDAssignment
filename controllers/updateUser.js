// import the model using require function
const User = require("../models/User");


// update User route handler
exports.updateUser = async(req,res) => {
    try{
       const {id} = req.params;
       const {firstName,lastName,email,age} = req.body;

       const user = await User.findByIdAndUpdate(
        {_id:id},
        {firstName,lastName,email,age, updatedAt : Date.now()},
        {new: true},
       )

       res.status(200).json(
        {
            success : true,
            data:user,
            message : `User Details with ${id} Updated Successfully`,
        })
    }catch(err){
        console.error(err);
        res.status(500) // 500 represent internal error
        .json({
            success:false,
            error:err.message,
            message : "Error occurred while updating the User details ",
        });
    }
}
