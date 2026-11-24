const burgerIcons = document.querySelector('.burger-icons');
const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenuList = document.querySelector('.mobile-menu-list');
burgerIcons.addEventListener('click', function(){
    openIcon.classList.toggle('hide');
    closeIcon.classList.toggle('hide');
    mobileMenuList.classList.toggle('show-mobile-menu');
}) 