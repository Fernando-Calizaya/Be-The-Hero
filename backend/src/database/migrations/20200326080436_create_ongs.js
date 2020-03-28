// AQUI VAMOS DEFINIR AS PROPRIEDADES DA ENTIDADE "ONGs"
exports.up = function(knex) { //UP sempre responsavel pela criação da tabela.
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary() // chave primaria que eu criearei de forma particular 
        table.string('name').notNullable() // o valor da string não pode ser vazio ou nulo
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable() //podemos definir um parametro de 2 caractres ex:"SP"
    })
};

exports.down = function(knex) { //DOWN sempre que houver algum erro este verificara o que fazer!
    return knex.schema.dropTable('ongs')
}; // PARA FINALIZAR ESTAS DEFINIÇÕES VAMOS EXECUTAR poweshell O COMANDO:
    // "npx knex migrate:latest" APOS ISSO SERÁ CRIADO UM BANCO DE DADOS (.sqlite) NA
    //PASTA "database"
