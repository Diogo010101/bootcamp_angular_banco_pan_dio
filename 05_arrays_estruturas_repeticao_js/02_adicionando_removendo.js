let alunos = ['Diogo', 'Joyce', 'Peter', 'Harry'];

console.log(alunos)
console.log(alunos[0])

//Adiciona no índice indicado.
alunos[1] = 'Carolina';
console.log(alunos)

//Adiciona em último
alunos.push('Joyce');
console.log(alunos)

//remove o último
alunos.pop
console.log(alunos)

//Remove o primero
alunos.shift()
console.log(alunos)


//Remove apartir do indice 0, 1 elemento.
alunos.splice(0,1)
console.log(alunos)

//Remove apartir do indice 0, 2 elemento.
alunos.splice(0, 2)
console.log(alunos)