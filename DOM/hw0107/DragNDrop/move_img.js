//1) Поместить картинку в html и сделать возможно перетаскивать ее по 
//всему документу (Drag'n'Drop).

var img = document.getElementById('img-js');

document.body.style.overflow = 'hidden';

img.ondragstart = function() {
  return false;
};

img.onmousedown = function() {
    img.style.position = 'absolute';
    img.style.cursor = 'move';
   
    document.onmousemove = function(e) {
        img.style.left = e.pageX - img.offsetWidth / 2 + 'px';
        img.style.top = e.pageY - img.offsetWidth / 2 + 'px';
    };
    
    img.onmouseup = function() {
        img.style.cursor = 'auto';
        document.onmousemove = null;
    };
}