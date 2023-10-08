const Todo = require("../models/todo");

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});

    //response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire todo data is fetched",
    });
  } catch (error) {
    console.error(error);
    console.log(error);

    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
    process.exit(1);
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.find({ _id: id });
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data found with given id",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: `${id} successfully fetched `,
        data: todo,
      });
    }
  } catch (error) {
    console.error(error);
    console.log(error);

    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
    process.exit(1);
  }
};
