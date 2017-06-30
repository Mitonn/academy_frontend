//1) Написать функцию addClass(className) которая выполняет добавление класса.
// Должна быть поддержка IE от 9 версии.
//2) Написать функцию removeClass(className) которая удаляет заданный класс.
// Должна быть поддержка IE от 9 версии.
//3) Создайте меню которое по клику разворачивается/сворачивается и выводится 
//информационное окошко, что действие пользователя успешно выполнено. Через 1 
//секунду окошко должно скрыватся.


var element = document.getElementById('div1');

function addClass(element, newClassName) {
    element.className = newClassName;
}

addClass(element, 'newclass');

function removeClass(element) {
    element.className = '';
}

removeClass(element);


var visible = false;
function menuShowHide() {
    if (visible) {
        document.getElementById('menu').style.display = 'none';
        visible = false;
    } else {
        document.getElementById('menu').style.display = 'block';
        visible = true;
    }
    document.getElementById('message').style.display = 'block';
    setTimeout(function(){
        document.getElementById('message').style.display = 'none';
    }, 1000);
}