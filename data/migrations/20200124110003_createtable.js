
exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
      table.increments()
      table.string('project_name').notNullable()
      table.string('description')
      table.boolean('completed')
      .notNullable()
      .defaultTo(false)
  })

  .createTable('tasks', table => {
      table.increments()
      table.integer('project_id')
      .notNullable()
      .references('id').inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('task_name').notNullable()
      table.string('description').notNullable()
      table.string('notes')
      table.boolean('done')
      .notNullable()
      .defaultTo(false)
  })

  .createTable('resources', table => {
      table.increments()
      table.string('name')
      .notNullable()
      .unique()
      table.string('description')
  })

  .createTable('project_resources', table => {
      table.increments()
      table.integer('project_id')
      .notNullable()
      .references('id').inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.integer('resource_id')
      .notNullable()
      .references('id').inTable('resources')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
