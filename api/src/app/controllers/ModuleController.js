const ModulesRepository = require('../repositories/ModulesRepository');

class ModuleController {
  async index(request, response) {
    const modules = await ModulesRepository.findAll();
    response.json(modules);
  }

  async show(request, response) {
    const { id } = request.params;

    const module = await ModulesRepository.findById(id);

    if (!module) {
      return response.status(404).json({ error: 'Module not found' });
    }

    response.json(module);
  }

  async store(request, response) {
    const { title } = request.body;

    if (!title) {
      return response.status(400).json({ error: 'Title is required' });
    }

    const module = await ModulesRepository.create({ title });

    response.json(module);
  }

  async update(request, response) {
    const { id } = request.params;
    const { title } = request.body;

    const moduleExists = await ModulesRepository.findById(id);

    if (!moduleExists) {
      return response.status(404).json({ error: 'Module not found' });
    }

    if (!title) {
      return response.status(400).json({ error: 'Title is required' });
    }

    const category = await ModulesRepository.update(id, { title });

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await ModulesRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ModuleController();
