const LessonsRepository = require('../repositories/LessonsRepository');

class LessonController {
  async index(request, response) {
    const { orderBy } = request.query;

    const lessons = await LessonsRepository.findAll(orderBy);
    response.json(lessons);
  }

  async show(request, response) {
    const { id } = request.params;

    const lesson = await LessonsRepository.findById(id);

    if (!lesson) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(lesson);
  }

  async store(request, response) {
    const { title, video_url, module_id } = request.body;

    if (!title || !video_url) {
      return response.status(400).json({ error: 'You have to register a video and create a title' });
    }

    const lessonExists = await LessonsRepository.findByTitle(title);
    if (lessonExists) {
      return response.status(400).json({ error: 'This Title is already in use' });
    }

    const lesson = await LessonsRepository.create({
      title, video_url, module_id,
    });
    response.json(lesson);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      title, video_url, module_id,
    } = request.body;

    const lessonExists = await LessonsRepository.findById(id);

    if (!lessonExists) {
      return response.status(404).json({ error: 'lesson not found' });
    }

    if (!title || !video_url) {
      return response.status(400).json({ error: 'You have to register a video and create a title' });
    }

    const lessonByTitle = await LessonsRepository.findByTitle(title);
    if (lessonByTitle && lessonByTitle.id !== id) {
      return response.status(400).json({ error: 'This title is already in use' });
    }

    const lesson = await LessonsRepository.update(id, {
      title, video_url, module_id,
    });

    response.json(lesson);
  }

  async delete(request, response) {
    const { id } = request.params;

    await LessonsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new LessonController();
