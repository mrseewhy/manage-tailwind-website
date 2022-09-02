let menu = document.getElementById('menu');
let hamburger = document.getElementById('menu-btn');

console.log(menu, hamburger)

hamburger.addEventListener('click', function(){
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    } else{
        menu.classList.add('hidden')
    }
})