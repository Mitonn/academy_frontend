//2) Сделать галерею. Галерея должна содержать превью по клику на которые будут
// открыватся большие картинки. ИСпользовать только чистый js.

var pre_images_enum = ['js', 'php', 'html', 'css'];

for (var i = 0; i < pre_images_enum.length; i++) {
    var a = document.createElement('a');
    a.href = 'images/fullimages/' + pre_images_enum[i] + 'full.jpg';
    a.target = '_blank';
    document.body.appendChild(a);
    
    var img = document.createElement('img');
    img.src = 'images/previews/' + pre_images_enum[i] + 'pre.png';
    img.alt = 'image';
    a.innerHTML = img.outerHTML;
}