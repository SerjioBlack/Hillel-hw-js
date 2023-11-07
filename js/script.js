'use strict';

function counter(initialValue = 0) {
    let count = initialValue;
    let increaseCount = 0;
    let decreaseCount = 0;
    let getCount = 0;

    function increase() {
        count++;
        increaseCount++;
    }

    function decrease() {
        count--;
        decreaseCount++;
    }

    function value() {
        getCount++;
        return count;
    }

    function getStatistic() {
        return {
            increaseCount,
            decreaseCount,
            getCount,
        };
    }

    function reset() {
        count = initialValue;
        increaseCount = 0;
        decreaseCount = 0;
        getCount = 0;
    }

    return {
        increase,
        decrease,
        value,
        getStatistic,
        reset,
    };
}

const counter1 = counter(0);
const counter2 = counter(10);

counter1.increase();
counter1.increase();
counter1.decrease();
counter2.decrease();
counter2.increase();
counter2.decrease();

counter1.getStatistic();
counter2.getStatistic();

counter1.reset();
counter2.reset();



