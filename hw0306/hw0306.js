"use strict";

function Calc(arg1, arg2)
{
    this.arg1 = arg1;
    this.arg2 = arg2;
    var res = 0;
    
    this.sum = function()
    {
        res = this.arg1 + this.arg2;
        return this;
    };
    
    this.sub = function()
    {
        res = this.arg1 - this.arg2;
        return this;
    };
    
    this.mult = function()
    {
        res = this.arg1 * this.arg2;
        return this;
    };
    
    this.div = function()
    {
        if (this.arg2 === 0) {
            res = false;
        } else {
            res = this.arg1 / this.arg2;
        }
        return this;
    };
    
    this.result = function()
    {
        return res;
    };
}


/*function mult(arg1)
{
    return function(arg2) {
        return arg1 * arg2;
    };
}*/

function Logger(f, log)
{
    return function()
    {
        log.push(f + ", ");
        return f.call(this);
    };
}

var calc = new Calc(2, 3);
var log = [];

calc.sum = Logger(calc.sum, log);
calc.sum();

calc.div = Logger(calc.div, log);
calc.div();
calc.div();
calc.div();

for (var i = 0; i < log.length; i++) {
  console.log('Log:' + log[i]);
};
