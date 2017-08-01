//2) Создать список дел: на страницу должна быть форма для добавления нового
// пункта в списке,  должна быть возможность удалять пункт. Так же необходимо
// добавить возможность очистить все пункты сразу. Данные необходимо хранить в 
// localStorgae, после перезагрузки страницы список дел должен остаться.

function checkLocalStorage() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    } else {
        return false;
    }
}

function addItem() {
    var key = document.forms['list'].elements['key'].value;
    var value = document.forms['list'].elements['value'].value;
    
    if (checkLocalStorage()) {
        localStorage.setItem(key, value);
    }
    
    document.forms['list'].reset();
    showList();
}

function deleteItem() {
    var key = document.forms['delete'].elements['key'].value;
    if (checkLocalStorage()) {
        localStorage.removeItem(key);
    }
    
    document.forms['delete'].reset();
    showList();
}

function clearStorage() {
    if (checkLocalStorage()) {
        localStorage.clear();
    }
    showList();
}

function showList() {
    var checkTable = document.getElementById('list_table')
    if (checkTable) {
        document.body.removeChild(checkTable);
    }
    
    if (checkLocalStorage()) {
        var table = document.createElement('table');
        table.setAttribute('id', 'list_table');
        table.innerHTML += ("<tr>"+
            "<th>"+"Key"+"</th>"+
            "<th>"+"Value"+"</th>"+
            "</tr>");
            
        var key, values = window.localStorage;
        for(key in values) {
            table.innerHTML += ("<tr><td>" + key + "</td>" +
                "<td>" + values[key] + "</td>" +
                "</tr>");
        }
        document.body.appendChild(table);
    }
};

var addBtn = document.getElementById('add');
var delBtn = document.getElementById('del');
var clearStorageBtn = document.getElementById('clearStorage');
addBtn.addEventListener('click', addItem);
delBtn.addEventListener('click', deleteItem);
clearStorageBtn.addEventListener('click', clearStorage);
showList();