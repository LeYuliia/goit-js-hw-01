let input;
let total = 0;


while (true) {
    input = prompt ('Введите числа');

    if (input === null){
        break;
    }

input = Number(input);
total += input;
}

alert (`Общая сумма чисел равна ${total}`);
