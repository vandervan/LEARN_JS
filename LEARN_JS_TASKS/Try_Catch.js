// Завернуть в try catch 1/0 и вывести на ноль делить нельзя
function evaluation(a, b) {
    if (b === 0) {
        throw new Error('Na null delit nelzia, bratan');
    }
    return a / b;
}

try {
    evaluation(1, 0);
} catch(error) {
    alert(error.message);
}
