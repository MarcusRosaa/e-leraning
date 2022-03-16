const db = require('../../database');

class LessonsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
      SELECT lessons.*, modules.title AS module_name
      FROM lessons
      JOIN modules ON modules.id = lessons.module_id
      ORDER BY lessons.title ${direction}
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT lessons.*, modules.title AS module_name
      FROM lessons
      JOIN modules ON modules.id = lessons.module_id
      WHERE lessons.id = $1
    `, [id]);
    return row;
  }

  async findByTitle(title) {
    const [row] = await db.query(`
      SELECT * FROM lessons WHERE title = $1
    `, [title]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE FROM lessons
      WHERE id = $1
    `, [id]);
    return deleteOp;
  }

  async create({
    title, video_url, module_id,
  }) {
    const [row] = await db.query(`
      INSERT INTO lessons(title, video_url, module_id)
      VALUES($1, $2, $3)
      RETURNING *
    `, [title, video_url, module_id]);

    return row;
  }

  async update(id, {
    title, video_url, module_id,
  }) {
    const [row] = await db.query(`
      UPDATE lessons
      SET title = $1, video_url = $2, module_id = $3
      WHERE id = $4
      RETURNING *
    `, [title, video_url, module_id, id]);
    return row;
  }
}

module.exports = new LessonsRepository();
