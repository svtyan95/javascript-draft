//задача 1
//як вивести два числа щоб корисував їх сам увів а потім порахувало все через степінь і івивело значення в в консоль

// let base = prompt("Введи номер");
// base = Number(base);

// console.log(base);

// let power = prompt("Введи степінь")
// power = Number(power)

// console.log(power)

// const result = base ** power
// console.log(result)


//задача 2
// як вивести значення від max до min - будь яке де:
// (Math.random() - виводить будь яке число
// Math.round - заукруглює це число тобто в цьому випадку цілий вираз (Math.random() * (max - min) + min)

// const max = 1000
// const min = 1035
// const result = Math.round(Math.random() * (max - min) + min)

// console.log(result)



//задача 3
// рандомні кольори
// const colors = ['tomato', 'teal', 'orange', 'green', 'red'];

// const max = colors.length - 1;
// const min = 0 

// const index = Math.round(Math.random() * (max - min) + min)

// const color = colors[index]

// console.log(color)

// document.body.style.backgroundColor = color;


//задача 3
// const message = "В цьому рядку є 23 букв"
// console.log(message.length)


// let stars = 300

// switch (stars) {

//   case 1:
//     price = 100;
//     break
  
//    case 2:
//     price = 120;
//     break
  
//    case 3:
//     price = 140;
//     break
  
//    case 4:
//     price = 160;
//     break
  
//   default:
//     console.log('Не вірне значення')
// }

// console.log(price)

// for (let i = 500; i >= 0; i -=  10) { 
//   console.log(i)
// }

// console.log('Сюда Пішов')


// let totalSpend= 150;
// let payment = 500;
// let discount = 0;

// if (totalSpend >= 100 && totalSpend < 1000) {
//   console.log('Бронзовий партнер, знижка 2%');
//   discount = 0.02;
// }

// else if (totalSpend >= 1000 && totalSpend < 5000) {
//   console.log('Сріблий партнер, знижка 5%');
//   discount = 0.05;
// }
  
// else if (totalSpend >= 5000){
//   console.log('Золотий партнер, знижка 10%');
//   discount = 0.1;
// }
  
// else { 
//   console.log ('Не партрнер, ЗНИЖКА 0%')
// }

// payment = payment - payment * discount;

// console.log(
//   `Оформлюємо заказ на суму ${payment} зі знижкою ${discount * 100}%`
// )

// totalSpend += payment;

// console.log (`Загальна сума пространих грошей: ${totalSpend}`);


// const btnAdd = document.querySelector('button');
// btnAdd.addEventListener('click', function () {
//   console.log('click heheheh')

// });

