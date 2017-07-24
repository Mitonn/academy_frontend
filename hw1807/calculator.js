//1) Переписать домашнее задание от 27.05.2017 (Калькулятор) по стандартам ES6.

'use strict';

class Calculator
{
    constructor(arg1, arg2) {
        if (typeof arg1 == 'number' && typeof arg2 == 'number') {
            this.arg1 = arg1;
            this.arg2 = arg2;
            this.result = 0;
        } else {
            throw new Error('arg1 or arg2 is not a number');
        }
    }

    sum() {
        this.result = this.arg1 + this.arg2;
        return this;
    }

    sub() {
        this.result = this.arg1 - this.arg2;
        return this;
    }

    mult() {
        this.result = this.arg1 * this.arg2;
        return this;
    }

    div() {
        if (this.arg2 === 0) {
            this.result = Infinity;
            return this;
        } else {
            this.result = this.arg1 / this.arg2;
            return this;
        }
    }

    get res() {
        return this.result;
    }
}

let calc = new Calculator(2, 3);
//calc.sum().res;
//calc.sub().res;
//calc.mult().res;
//calc.div().res;