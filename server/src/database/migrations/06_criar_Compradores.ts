import Knex from 'knex';

export async function up (knex: Knex) { 
    return knex.schema.createTable('Compradores', table => {
        table.increments('id').primary();
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
    return knex.schema.dropTable('Compradores');
}