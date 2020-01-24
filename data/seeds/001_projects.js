
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: "Portfolio Website", project_description: 'build new portfolio site', completed: false},
        {id: 2, project_name: "Lambda Labs", project_description: "finish 8 weeks of labs", completed: false},
        {id: 3, project_name: "Backend Sprint 1", project_description: "first node sprint challenge", completed: true}
      ]);
    });
};
