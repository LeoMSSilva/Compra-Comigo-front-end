import Knex from 'knex';

export async function up (knex: Knex) { 
    return knex.schema.createTable('Enderecos', table => {
        table.increments('id').primary();
	  	table.string('regiao').notNullable();
	  	table.string('uf').notNullable();
  		table.string('cidade').notNullable();
  		table.string('bairro').notNullable();
		table.string('rua').notNullable();
		table.string('numero', 5).notNullable();
		table.string('complemento').notNullable();
        table.string('cep').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('Enderecos');
}