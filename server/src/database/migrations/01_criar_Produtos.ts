import Knex from 'knex';

export async function up (knex: Knex) { 
    return knex.schema.createTable('Produtos', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
		table.string('marca').notNullable();
		table.string('modelo').notNullable();
		table.float('preço').notNullable();
        table.integer('idCategoriasDeProduto')
        .notNullable()
        .references('id')
        .inTable('categoria');

    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('Produtos');
}