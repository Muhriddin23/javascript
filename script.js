var name = prompt('как вас зовут?');
console.log('меня зовут ' + name);

var age = prompt('Вам сколько лет ?');
console.log('Мне ' + age + ' годика!');

var first = prompt('Решите задачу 6 + 3 = ?');
console.log('Пример:1 6+3=9 ваш ответ ' + first);

var second = prompt('Решите задачу 6 - 3 = ?');
console.log('Пример:2 6-3=3 ваш ответ ' + second);

var third = prompt('Решите задачу 6 * 3 = ?');
console.log('Пример:3 6*3=18 ваш ответ ' + third);

var final = prompt('Решите задачу 6 / 3 = ?');
console.log('Пример:4 6/3=2 ваш ответ ' + final);

var allInfo = name + age + first + second + third + final;
alert(allInfo); 