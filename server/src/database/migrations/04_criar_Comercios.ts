import Knex from 'knex';

export async function up (knex: Knex) { 
    return knex.schema.createTable('Comercios', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('whatsapp').notNullable();
        table.string('cnpj', 14).notNullable();
        table.integer('CategoriasDeProduto')
        .notNullable()
        .references('id')
        .inTable('CategoriasDeProduto');
        table.integer('idEnderecos')
        .notNullable()
        .references('id')
        .inTable('endereco');
        table.integer('idLogins')
        .notNullable()
        .references('id')
        .inTable('login');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('Comercios');
}