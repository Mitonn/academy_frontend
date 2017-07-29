//2) Создать список дел: на страницу должна быть форма для добавления нового
// пункта в списке,  должна быть возможность удалять пункт. Так же необходимо
// добавить возможность очистить все пункты сразу. Данные необходимо хранить в 
// localStorgae, после перезагрузки страницы список дел должен остаться.

function addItem() {
    var key = document.forms['list'].elements['key'].value;
    var value = document.forms['list'].elements['value'].value;
    
    if ('localStorage' in window && window['localStorage'] !== null) {
        localStorage.setItem(key, value);
    }
    
    document.forms['list'].reset();
}

function deleteItem() {
    var key = document.forms['delete'].elements['key'].value;
    if ('localStorage' in window && window['localStorage'] !== null) {
        localStorage.removeItem(key);
    }
    document.forms['delete'].reset();
}

function clearStorage() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        localStorage.clear();
    }
}

var addBtn = document.getElementById('add');
var delBtn = document.getElementById('del');
var clearStorageBtn = document.getElementById('clearStorage');
addBtn.addEventListener('click', addItem);
delBtn.addEventListener('click', deleteItem);
clearStorageBtn.addEventListener('click', clearStorage);