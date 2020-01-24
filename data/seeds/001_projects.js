
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: "Portfolio Website", description: 'build new portfolio site', completed: false},
        {id: 2, project_name: "Lambda Labs", description: "finish 8 weeks of labs", completed: false},
        {id: 3, project_name: "Backend Sprint 1", description: "first node sprint challenge", completed: true}
      ]);
    });
};
