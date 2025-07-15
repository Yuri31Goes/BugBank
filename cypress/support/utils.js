 export function gerarNome() {
  const primeirosNomes = [
    'Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda',
    'Gabriel', 'Helena', 'Igor', 'João', 'Karina', 'Lucas',
    'Mariana', 'Natália', 'Otávio', 'Paula', 'Rafael', 'Simone',
    'Tiago', 'Vanessa'
  ]

  const sobrenomes = [
    'Almeida', 'Barbosa', 'Cardoso', 'Dias', 'Ferreira', 'Gomes',
    'Lima', 'Macedo', 'Nascimento', 'Oliveira', 'Pereira', 'Ramos',
    'Silva', 'Souza', 'Teixeira', 'Vieira', 'Costa', 'Rocha'
  ]

  const primeiro = primeirosNomes[Math.floor(Math.random() * primeirosNomes.length)]
  const sobrenome1 = sobrenomes[Math.floor(Math.random() * sobrenomes.length)]
  const sobrenome2 = sobrenomes[Math.floor(Math.random() * sobrenomes.length)]

  return `${primeiro} ${sobrenome1} ${sobrenome2}`
}
