"use strict";

function calc(arg1, arg2)
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


function mult(arg1)
{
    return function(arg2) {
        return arg1 * arg2;
    };
}