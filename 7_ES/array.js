var user1 = {
    nome: 'DEmetrio',
    empresa: 'LOB',
    salario: 8000,
    idade: 23
}
var user2 = {
    nome: 'Carolina',
    empresa: 'IND',
    salario: 8000,
    idade: 24
}
var user3 = {
    nome: 'Leo',
    empresa: 'CAS',
    salario: 8000,
    idade: 14
}
var users = [user1, user2, user3]

// FIND - Acha a primeira ocorrência de acordo com a condição
var ganhador = users.find(user => user.nome == 'DEmetrio')
var ganhador2 = users.find(user => user.salario >= 8000 && user.idade > 23)

// ---------------------------------------------------------------

console.log(ganhador, ganhador2)