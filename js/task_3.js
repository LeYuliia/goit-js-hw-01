const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let enterPassword = prompt ('Введите пароль:');

if ( enterPassword === null){
   message = 'Отменено пользователем!';
  }

else if (enterPassword === ADMIN_PASSWORD){
 message = 'Доро пожаловать!';
 }

else {
   message = 'Доступ запрещен, неверный пароль!';
}

alert(message);