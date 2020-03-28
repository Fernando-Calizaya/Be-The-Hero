
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();// a cada caso criado teremos um incremento (1,2,3...) - chave primaria incrementada
        
        table.string('title').notNullable() // o valor da string não pode ser vazio ou nulo
        table.string('description').notNullable()
        table.decimal('value').notNullable() // valor primitivo floate/decimal

        //Relacionamentos de dados BD
        table.string('ong_id').notNullable() // esta vai armazena o id da ONG nesta linha. (não deve ter valor nulo)
        table.foreign('ong_id').references('id').inTable('ongs') // chave estrangeira da entidade "ONGs"
    }) 
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};
