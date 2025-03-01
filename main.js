let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value  + 'px';
    mountains3.style.top = value + 'px';
    river.style.top = value + 'px' ;
    boat.style.top = value + 'px' ;
    boat.style.left = `${value * 1.5}px` ;

}
