
let totalSalario = 0;
let totalFilhos = 0;
let numHabitantes = 0;
let maiorSalario = 0;
let salarioAbaixo150 = 0;

let salario = 1400;

while (salario >= 0) {
    let numFilhos = 3;

    // Atualizando dados
    totalSalario += salario;
    totalFilhos += numFilhos;
    numHabitantes++;

    maiorSalario = Math.max(maiorSalario, salario);
    salarioAbaixo150 += ((salario < 150 ? 1 : 0));

}

if (numHabitantes > 0) {
    // Cálculos
    let mediaSalario = totalSalario / numHabitantes;
    let mediaFilhos = totalFilhos / numHabitantes;
    let percentualSalarioAbaixo150 = (salarioAbaixo150 / numHabitantes) * 100;

    // Resultados
    console.log("Média de salário da população: R$ " + mediaSalario.toFixed(2));
    console.log("Média do número de filhos: " + mediaFilhos.toFixed(2));
    console.log("Maior salário dos habitantes: R$ " + maiorSalario.toFixed(2));
    console.log("Percentual de pessoas com salário menor que R$ 150,00: " + percentualSalarioAbaixo150.toFixed(2) + "%");
} else {
    console.log("Nenhum dado foi inserido.");
}