describe('Desafio aula 03 - Testa informações de um usuário específico', () => {
  it('Verifica informações de usuário, como transações, saldo, nome, etc', () => {
    cy.fixture('dadosUsuario').then((usuario) => {
      cy.login(usuario.email, usuario.senha);
      cy.visit('/home');
      cy.url().should('include', '/home');

      // Verifica se o nome de usuário aparece na tela
      cy.contains(usuario.nome).should('be.visible');
      // Verifica se o valor da última transação corresponde ao valor esperado
      cy.getByData('lista-transacoes')
        .find('li')
        .last()
        .contains(usuario.transacoes[usuario.transacoes.length - 1].valor);
      // Verifica se o saldo corresponde ao saldo esperado
      cy.get('[data-testid="saldo"]').contains(usuario.saldo);
    });
  });
});

//   Primeiro eu carrego o arquivo de dados do meu teste com o uso do comando cy.fiture
//   Depois, com as informações de usuário e senha eu faço login na aplicação por meio do comando customizado de login()
//   Faço as asserções acerca da url e do path da url
//   Depois verifico se o nome do usuário está visível na aplicação
//   Em seguida, busco pela minha lista de transações com o comando getByData() e obtenho os elementos com o find()
//   Com a lista de elementos em mãos, ou seja, os li’s, eu busco pelo último <li/> da lista e comparo com o valor que está dentro do array de transações do meu arquivo de dados, isto é, da fixture dadosUsuario.json
//   Por último, eu faço uma asserção referente ao saldo também da mesma forma: obtenho o elemento, e comparo com o saldo que está na minha fixture.
