function calculateWins(victory = 0, defeat = 0) {
    let result = victory - defeat;
    let level;
    switch (true) {
        case result >= 0 && result <= 10:
            level = "Ferro";
            break;
        case result >= 11 && result <= 20:
            level = "Bronze";
            break;
        case result >= 21 && result <= 50:
            level = "Prata";
            break;
        case result >= 51 && result <= 80:
            level = "Ouro";
            break;
        case result >= 81 && result <= 90:
            level = "Diamante";
            break;
        case result >= 91 && result <= 100:
            level = "Lendário";
            break;
        case result >= 101:
            level = "Imortal";
            break;
        default:
            level = "Sem classificação"
            break;
    }
    console.log("Seu saldo de vitórias é " + result + " e sua classificação é " + level);
}

calculateWins(141, 47);