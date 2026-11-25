/*
  Dados do corretor. Para usar este site com outro corretor, copie a pasta /site,
  troque os valores abaixo e as fotos e vídeos de /media. O texto da página usa
  estes valores onde aparece o atributo data-bind.
*/
window.CORRETOR = {
  nome: 'Juciene Rodrigues',
  apelido: 'Juci',
  creci: 'CRECI-BA 38.153',
  regiao: 'Salvador e Região Metropolitana',
  construtora: 'MRV',

  // Só números, com DDI e DDD. Ex.: '5571999999999'.
  // Vazio: o botão abre o WhatsApp para a pessoa escolher o contato.
  whatsapp: '',

  instagram: 'juci.imoveis',

  // Empreendimento em destaque
  destaque: {
    nome: 'Parque dos Monarcas',
    status: 'Pré-lançamento',
    cidade: 'Salvador'
  },

  // Minha Casa Minha Vida 2026. Taxas de referência para o Nordeste.
  // Quando a regra mudar, atualize aqui.
  faixas: [
    { nome: 'Faixa 1', renda: 3200,  teto: 275000, taxa: 4.00,  subsidio: true  },
    { nome: 'Faixa 2', renda: 5000,  teto: 275000, taxa: 5.50,  subsidio: true  },
    { nome: 'Faixa 3', renda: 9600,  teto: 400000, taxa: 7.66,  subsidio: false },
    { nome: 'Faixa 4', renda: 13000, teto: 600000, taxa: 10.00, subsidio: false }
  ],
  sbpe: 11.50
};
