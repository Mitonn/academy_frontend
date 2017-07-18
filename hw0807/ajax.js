var form = document.forms.upload;
var filenameElem = document.forms.upload.elements.filename;
var clearButton = document.forms.upload.elements['clear'];
var logElem = document.getElementById('log');

filenameElem.addEventListener('change', function () {
    console.log('change');
    
    var previewDiv = document.createElement('div');
    previewDiv.setAttribute('name', 'preview');
    document.body.appendChild(previewDiv);
    
    var previewImg = document.createElement('img');
    previewImg.setAttribute('src', 'files_to_load/' + filenameElem.files[0].name);
    previewImg.setAttribute('alt', 'img');
    previewDiv.appendChild(previewImg);
    
    clearButton.removeAttribute('disabled');
    clearButton.addEventListener('click', clear);
    
    function clear() {
        form.reset();
        document.body.removeChild(previewDiv);
        clearButton.setAttribute('disabled', 'disabled');
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    var file = new FormData();
    file.append('img', this.elements.filename.files[0]);
    
    if (file) {
        upload(file);
    }
});

function upload(file) {
    var xhr = new XMLHttpRequest();
    var cancelButton = document.forms.upload.elements.cancel;
    
    function abort_xhr(e) {
        e.preventDefault();
        xhr.abort();
        log('loading canceled');
        cancelButton.setAttribute('disabled', 'disabled');
        cancelButton.removeEventListener('click', abort_xhr);
    }
    
    cancelButton.removeAttribute('disabled');
    cancelButton.addEventListener('click', abort_xhr);
    
    xhr.onload = function () {
        log('all loaded success');
        cancelButton.setAttribute('disabled', 'disabled');
        cancelButton.addEventListener('click', abort_xhr);
    };
    xhr.onerror = function () {
        log('erorr!' + xhr.status + ' ' + xhr.statusText);
    };
    xhr.upload.onprogress = function (e) {
        log('loaded: ' + e.loaded + ' from ' + e.total);
    };
    
    xhr.open('POST', 'post.php', true);
    xhr.send(file);
}

function log(text) {
    logElem.innerHTML = text;
}