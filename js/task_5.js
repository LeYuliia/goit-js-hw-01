

let deliveryCountry = prompt ('Укажите страну доставки');
let price;
let result;

switch (deliveryCountry.toLowerCase()) {

    case 'китай':
        price = 100;
        result = `Доставка в ${deliveryCountry} будет стоить ${price} кредитов`
      break;
  
    case 'чили':
      price = 250;
      result = `Доставка в ${deliveryCountry} будет стоить ${price} кредитов`
      break;
  
    case 'австралия':
      price = 170;
      result = `Доставка в ${deliveryCountry} будет стоить ${price} кредитов`
      break;
  
    case 'индия':
      price = 80;
      result = `Доставка в ${deliveryCountry} будет стоить ${price} кредитов`
      break;
  
    case 'ямайка':
      price = 120;
      result = `Доставка в ${deliveryCountry} будет стоить ${price} кредитов`
      break;


    default:
     result ='В вашей стране доставка не доступна';
}
  console.log (result);
  

  
  
