alert('Задание 1');

 var name = prompt('Введите свое имя');


 var age = +prompt('Здравствуйте ' + name + ', Введите свой возраст');


if(age <= 18 && age > 0){
     alert('Вы еще молоды. Вам нужно учиться')
 } else if(age > 18 && age <= 50) {
     alert('Вам нужно работать')
 } else if(age > 50 && age <= 59) {
     alert('Вам скоро на пенсию')
 } else if(age > 59 && age <= 150) {
     alert('Вы пенсионер')
 } else{
     alert('Что-то пошло не так')
 }





alert('Задание 2');




var name = prompt('Введите свое имя');

var time = +prompt('Здравствуйте ' + name + ', Введите время в часах от 1 до 24');



switch(time) {
    case 24: 
        alert('Сейчас 12:00-полночь');
        break;
    case 1:
        alert('Сейчас 1:00-ночь');
        break;
    case 2:
        alert('Сейчас 2:00-ночь');
        break;
    case 3:
        alert('Сейчас 3:00-ночь');
        break;
    case 4:
        alert('Сейчас 4:00-ночь');
        break;
    case 5:
        alert('Сейчас 5:00-ночь');
        break;
    case 6:
        alert('Сейчас 6:00-утро');
        break;
    case 7:
        alert('Сейчас 7:00-утро');
        break;
    case 8:
        alert('Сейчас 8:00-утро');
        break;
    case 9:
        alert('Сейчас 9:00-утро');
        break;
    case 10:
        alert('Сейчас 10:00-утро');
        break;
    case 11:
        alert('Сейчас 11:00-утро');
        break;
    case 12:
        alert('Сейчас 12:00-полдень');
        break;
    case 13:
        alert('Сейчас 1:00-день');
        break;
    case 14:
        alert('Сейчас 2:00-день');
        break;
    case 15:
        alert('Сейчас 3:00-день');
        break;
    case 16:
        alert('Сейчас 4:00-день');
        break;
    case 17:
        alert('Сейчас 5:00-день');
        break;
    case 18:
        alert('Сейчас 6:00-вечер');
        break;
    case 19:
        alert('Сейчас 7:00-вечер');
        break;
    case 20:
        alert('Сейчас 8:00-вечер');
        break;
    case 21:
        alert('Сейчас 9:00-вечер');
        break;
    case 22:
        alert('Сейчас 10:00-вечер');
        break;
    case 23:
        alert('Сейчас 11:00-вечер');
        break;
    default:
        alert('Такого времени не существует');
        break;
}




alert('Задание 3')



var num1 = +prompt('Введите первое число');

var num2 = +prompt('Введите второе число');

var num3 = +prompt('Введите третье число');


if((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)){
    alert('Среднее число из тех, что вы написали - ' + num1);
} else if((num2 > num1 && num2 < num3) || (num2 < num1 && num2 >num3)){
    alert('Среднее число из тех, что вы написали - ' + num2);
} else if((num3 > num1 && num3 < num2) || (num3 < num1 && num3 > num2)){
    alert('Среднее число из тех, что вы написали - ' + num3);
} else{
    alert('Вы указали 2-3 одинаковых числа или не указали числа');
}