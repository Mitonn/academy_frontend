//1) Получить все <p>.
//2) Поменять цвет фона для первого и последнего <div>
//3) Вывести все <div>, внутри которых есть <span>
//4) Вывести каждый четный <li> из списка <ul>
//5) Выберите элемент с классом .header и поменяйте текст на "Заголовок"
//6) Сделайте выборку по <div>, далее из результата выберите пустые элементы
//7) Сделайте выборку всех <h2> с классом .big
//8) Выбрать все ссылки с атрибутом href
//9) Выбрать все ссылки которые начинаются на https
//10) Добавте классы .main и .body для <body> и <header>

//1
$('p');

//2
$('div:first').css({
    backgroundColor: 'red'
});

$('div:last').css({
    backgroundColor: 'green'
});

//3
console.log($('div:has(span)'));

//4
console.log($('ul').children('li:odd'));

//5
$('.header').text('Заголовок');

//6
console.log($('div:empty'));

//7
console.log($('h2.big'));

//8
console.log($('a[href]'));

//9
console.log($('a[href^="https://"]'));

//10
$('body').addClass('main');
$('header').addClass('body');