'use strict';

function loadTable() {
    
    var table = document.createElement('table');
    table.setAttribute('id', 'data_table');

    table.innerHTML += ("<tr>"+
            "<th>"+"extn"+"</th>"+
            "<th>"+"name"+"</th>"+
            "<th>"+"office"+"</th>"+
            "<th>"+"position"+"</th>"+
            "<th>"+"salary"+"</th>"+
            "<th>"+"start_date"+"</th>"+
            "</tr>");

    var xhr = new XMLHttpRequest();
    
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(this.responseText);
            var table = document.getElementById('data_table');
            for (var i = 0; i < response['data'].length; i++) {
                table.innerHTML += ("<tr><td>" + response['data'][i].extn + "</td>" +
                "<td>" + response['data'][i].name + "</td>" +
                "<td>" + response['data'][i].office + "</td>" +
                "<td>" + response['data'][i].position + "</td>" +
                "<td>" + response['data'][i].salary + "</td>" +
                "<td>" + response['data'][i].start_date + "</td>" +
                "</td></tr>");
            }
        }
    };
    
    xhr.open('POST', 'db.json', true);
    xhr.send();
    
    document.body.appendChild(table);

}

function refresh() {
    var table = document.getElementById('data_table');
    document.body.removeChild(table);
    loadTable();
}

var refreshButton = document.getElementById('refresh_button');
refreshButton.addEventListener('click', refresh);

loadTable();