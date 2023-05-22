
const user = require("../model/user");

// create users
exports.createUser = async (req, res) => {
  try {
    let User = await req.body;
    let created = await user.create(User);
    if (!created) {
      return res.status(400).json({
        sucess: false,
        mesaage: "User not created",
        error: error.message,
      });
    }
   return res.status(201).json({
      sucessful: true,
      message: "User created succesfully",
      User: created,

    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      mesaage: "Internal Server error",
      error: error.message,
    });
  }
};



// get all users
exports.getAllUsers = async (req, res) => {
  try {
    let users = await user.find();
    if (users.length === 0) {
      return res.status(404).json({
        sucess: false,
        message: "No Users were found",
      });
    }
    res.status(200).json({
      sucess: true,
      message: "Users found",
      users,
      counts: users.length,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// get single user
exports.getUser = async (req, res) => {
  try {
    let id = { _id: req.params.id }; // this is referncing mongodb id and it has a {}
    let singleUser = await user.findOne(id);
    if (!singleUser) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      sucess: true,
      mesaage: "User found",
      singleUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal Server error",
      error: error.message,
    });
  }
};



// update users
exports.updateUser = async (req, res) => {
  try {
    let User = await req.body
    let id = { _id: req.params.id };
    let updated = await user.findOneAndUpdate(id, User);
    if (!updated) {
      return res.status(404).json({
        sucesss: false,
        message: "User not updated",
        error: error.message,
      });
    }
     res.status(201).json({
      sucess: true,
      message: "User updated Sucesssfully",
      User: updated
  
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server error",
      error: error.message,
    });
  }
};
// delete users
exports.deleteUser = async (req, res) => {
  try {
    let id = {_id: req.params.id };
    let deleted = await user.findOneAndRemove(id);
    if(!deleted) {
      return res.status(400).json({
        success: false,
        mesaage: "User not deleted",
       
      })
    };
    res.status(201).json({
      success: true,
      message: "User deleted successfully",
    
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}
