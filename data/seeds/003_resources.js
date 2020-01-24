
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'computer', description: 'what you use to code'},
        {id: 2, name: 'google', description: 'how to research'},
        {id: 3, name: 'udemy', description: 'site with tutorials'}
      ]);
    });
};
