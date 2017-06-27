'use strict';

//Домашнее задание от 23.06.2017

/*1) Написать функцию next(element) которая возвращала бы соседний элемент.
Фунцкия не должна возвращать текстовые узлы и узлы-комментарии. Если
следующего соседнего элемента нет, то нужно возвращать последний элемент.
2) Написать функцию hasClass(node, className) которая проверяет у элемента 
наличие класса.
Пример:
hasClass(document.body, 'main') // false
hasClass(document.body, '') // true*/


function next(elementId)
{
    var element = document.getElementById(elementId);
    
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else if (element.nextElementSibling === null) {
        return element;
    }
}

next('d1');
next('d3');


function hasClass(node, className)
{
    var element = document.getElementById(node);
    
    if (element.classList.contains(className)) {
        return true;
    } else {
        return false;
    }
}

hasClass('h1', 'h1-class');
hasClass('h1', 'h1-cl');