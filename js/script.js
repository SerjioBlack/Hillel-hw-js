'use strict';

//1. Вивести на сторінку в один рядок через кому числа від 10 до 20.

let str = '';
let i=10;
while (i <= 20) {
    i++;
    console.log(str +=i + ',');
}

//2.Вивести квадрати чисел від 10 до 20.

for (let i=10; i <= 20; i++) {
    console.log(Math.pow(i, 2));

//3. Вивести таблицю множення на 7.

    for (let i=0; i <= 10; i++) {
        console.log(i*7);
    }

//4. Знайти суму всіх цілих чисел від 1 до 15.

    let result = 0;
    for (let i=1; i <= 15; i++) {
        result += i;
    }
    console.log(result);


//5.Знайти добуток усіх цілих чисел від 15 до 35.

    let result = 1;
    for (let i=15; i <= 35; i++) {
        result *= i;
    }
    console.log(result);

//6.//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

    let result = 0;
    for (let i=1; i <= 500; i++) {
        result += i/500;
    }
    console.log(result);

//7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

    let result = 0;
    for (let i=30; i <= 80; i++) {
        if (i % 2 === 0)
            result += i;
    }
    console.log(result);

//8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.

    for (let i=100; i <= 200; i++) {
        if (i % 3 === 0)
            console.log(i);
    }

//9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

        let n = 10;

        outer: for (let i=2; i <= n; i++) {
            for (let k = 2; k < i; k++) {
                if (i % k === 0) continue outer}
            console.log(i);

//10 Визначити кількість його парних дільників. 11.Знайти суму його парних дільників.
            let naturalNum = 8;
            let count = 0;
            let summ =0;
            for (let i = 2; i * 2 <= naturalNum; i++) {
                if (naturalNum % 2 === 0) {
                    console.log(i);
                    if (i % 2 === 0) {
                        count++;
                        summ += i;
                    }
                }
            }
            console.log(count);
            console.log(summ);

//12 Надрукувати повну таблицю множення від 1 до 10.

            for (i = 1; i <= 9; i++) {
                for (k = 1; k <= 9; k++) {
                    let number = i * k;
                    console.log(number)
                }
            }