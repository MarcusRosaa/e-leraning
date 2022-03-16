const db = require('../../database');

class ModulesRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM modules ORDER BY title');
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
    SELECT * FROM modules
    WHERE modules.id = $1
    `, [id]);
    return row;
  }

  async create({ title }) {
    const [row] = await db.query(`
      INSERT INTO modules(title)
      VALUES($1)
      RETURNING *
    `, [title]);
    return row;
  }

  async update(id, { title }) {
    const [row] = await db.query(`
      UPDATE modules
      SET title = $1
      WHERE id = $2
      RETURNING *
    `, [title, id]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM modules WHERE id = $1', [id]);
    return deleteOp;
  }
}

module.exports = new ModulesRepository();
