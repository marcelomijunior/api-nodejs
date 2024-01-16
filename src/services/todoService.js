const Todo = require("../models/todoModel");

class TodoService {
  constructor() {}

  static async getById(id) {
    try {
      return await Todo.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  static async getAll() {
    try {
      return await Todo.find();
    } catch (error) {
      console.log(error);
    }
  }

  static async create(model) {
    try {
      return (
        await Todo.create({
          title: model.title,
          description: model.description,
          finished: model.finished,
          date: model.date,
        })
      ).save();
    } catch (error) {
      console.log(error);
    }
  }

  static async update(id, model) {
    try {
      return (
        await Todo.findByIdAndUpdate(id, {
          title: model.title,
          description: model.description,
          finished: model.finished,
          date: model.date,
        })
      ).save();
    } catch (error) {
      console.log(error);
    }
  }

  static async delete(id) {
    try {
      const todo = await Todo.findById(id);

      if (todo) {
        await Todo.deleteOne(todo);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TodoService;
