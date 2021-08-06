let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

// Vamos ter que percorrer todo o vetor, logo:
for (let i = 1; i < numbers.length; i +=1) {
    // Dentro de cada iteração
    // percorremos novamente o vetor
    // em busca dos pares
    for (let i2 = 0; i2 < numbers.length -i2; i2 += 1) {
        // Comparamos
        if (numbers[i2] > numbers[i2 +1]) {
            // swap (trocamos)
            let position = numbers[i2];
            numbers[i2] = numbers[i2 +1];
            numbers[i2 +1] = position;
            console.log(position);
        }
    }
}
