//1) Доделать задание: создать страницу на которой будет форма в которую вы 
//вводите цвет, после нажатия кнопки сохранить происходить смена цвета фона. 
//После перезагрузки страницы цвет фона должен остаться.

'use strict';

var color = localStorage.getItem('color');
document.body.style.background = color;

function addColor() {
    var value = document.forms['form'].elements['text'].value;
    
    if ('localStorage' in window && window['localStorage'] !== null) {
        localStorage.setItem('color', value);
    }
    
}

var button = document.getElementById('button');
button.addEventListener('click', addColor);