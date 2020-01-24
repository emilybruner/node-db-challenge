
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1, task_name: "css animations", description: 'work on css animations for site', notes: 'n/a', done: false},
        {id: 2, project_id: 2, task_name: "do authentication", description: 'research authentication with firebase', notes: 'n/a', done: false},
        {id: 3, project_id: 3, task_name: "set up redux", description: 'create redux set up for site', notes: 'n/a', done: false}
      ]);
    });
};
