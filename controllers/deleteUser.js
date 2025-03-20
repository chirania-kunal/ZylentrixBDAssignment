// import the model using require function
const User = require("../models/User");

// deleteUser controller function 
exports.deleteUser = async(req,res) => {
    try{
      // fetching the id from the request body
      const {id} = req.params;
        
      // find By Id and delete it in database
      await User.findByIdAndDelete(id);

      // returning the success json
      res.json({
        success:true,
        message:`User with ${id} Deleted Successfully`,
      })
    }catch(err){
        console.error(err);
        res.status(500) 
        .json({
            success:false,
            error:err.message,
            message : "Error occurred while deleting the user",
        });
    }
}