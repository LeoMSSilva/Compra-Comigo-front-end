import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('Produtos').insert([
        { nome: 'Maizena', marca: 'Piraque', modelo: 'n/a', preço: '3.69', idCategoriasDeProduto:'1', idSubCategoriasDeProduto: '1'},
        { nome: 'Maria', marca: 'Richester', modelo: 'n/a', preço: '5.30', idCategoriasDeProduto:'1', idSubCategoriasDeProduto: '1'},
        { nome: 'Leite', marca: 'Elegê', modelo: 'n/a', preço: '3.49', idCategoriasDeProduto:'1', idSubCategoriasDeProduto: '1'},
    ])
}