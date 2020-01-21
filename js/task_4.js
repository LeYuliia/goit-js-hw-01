const credits = 23580;
const pricePerDroid =3000;
let totalPrice;
let creditsBalans;
let numberOfDroids;


numberOfDroids = prompt ('Какое количество дроидов Вы хотите купить?');
totalPrice = (numberOfDroids * pricePerDroid);
creditsBalans = (credits - totalPrice);

if (numberOfDroids === null){
    console.log ('Отменено пользователем!');
}

else if (totalPrice <= credits){
      let message = `Вы купили ${numberOfDroids} дроидов, на счету осталось ${creditsBalans} кредитов`;
      console.log (message);
    }

else if (totalPrice > credits) {
    console.log ('Недостаточно средств на счету!');
}

else{ 
    alert ('Неверное значение!');
}