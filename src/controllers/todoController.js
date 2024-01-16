const todoService = require("../services/todoService");

class TodoController {
  constructor() {}

  static async getAll(req, res) {
    try {
      const items = await todoService.getAll();

      if (!items || items.length === 0)
        return res.status(400).send({ message: "Nenhum item encontrado!" });

      return res.status(200).send(items);
    } catch (error) {
      return res.status(500).send({ error });
    }
  }

  static async getById(req, res) {
    const id = req.params.id;
    try {
      const item = await todoService.getById(id);

      if (item) return res.status(200).send(item);

      return res
        .status(400)
        .send({ message: "Item não encontrado ou inexistente!" });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }

  static async create(req, res) {
    const body = req.body;

    try {
      const result = await todoService.create(body);

      if (!result) return res.status(400).send({ message: "Item inválido!" });

      return res.status(201).send(result);
    } catch (error) {
      return res.status(500).send({ error });
    }
  }

  static async update(req, res) {
    const id = req.params.id;
    const body = req.body;

    try {
      const result = await todoService.update(id, body);

      if (result) return res.status(201).send(result);

      return res.status(400).send({ message: "Item inválido!" });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }

  static async delete(req, res) {
    const id = req.params.id;

    try {
      const result = await todoService.delete(id);

      if (result) return res.status(201).send({ message: "Item deletado!" });

      return res
        .status(400)
        .send({ message: "Item informado não encontrado ou inexistente!" });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }
}

module.exports = TodoController;
