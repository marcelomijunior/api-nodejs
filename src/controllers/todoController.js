class TodoController {
  constructor() {}

  static create(req, res) {
    res.send("create Ok!")
  }

  static get(req, res) {
    res.send("get Ok!");
  }

  static getAll(req, res) {
    res.send("getAll Ok!");
  }

  static update(req, res) {
    res.send("update Ok!");
  }

  static delete(req, res) {
    res.send("delete Ok!");
  }
}

module.exports = TodoController;
