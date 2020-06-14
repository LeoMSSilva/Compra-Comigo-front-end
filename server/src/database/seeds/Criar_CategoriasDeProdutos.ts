import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('CategoriasDeProduto').insert([
        { nome: 'Alimentos'},
        { nome: 'Confeitaria'},
        { nome: 'Sorveteria'},
        { nome: 'Açougue'}
        { nome: 'Vestuário'},
        { nome: 'Sapataria'},
        { nome: 'Beleza'},
        { nome: 'Joalheria'},
        { nome: 'Saúde'},
        { nome: 'Construção'},
        { nome: 'Informática'},
        { nome: 'Papelaria'},
        { nome: 'Aviamentos'},
        { nome: 'Floricultura'},
        { nome: 'Pet Shop'},
        { nome: 'Eletrodomésticos'},
    ])
}