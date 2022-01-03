let searchForm = document.querySelector('.search-form-container');
document.querySelector('#search-btn').onclick=() => {
    searchForm.classList.toggle('active');
    cartShopping.classList.remove('active');
    userForm.classList.remove('active');
    navbar.classList.remove('active');
};
let cartShopping = document.querySelector('.shopping-cart-container');
document.querySelector('#cart-btn').onclick=() => {
    cartShopping.classList.toggle('active');
    navbar.classList.remove('active');
    userForm.classList.remove('active');
    searchForm.classList.remove('active');
};
let userForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () => {
    userForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartShopping.classList.remove('active');
}
let navbar = document.querySelector('.header .navbar');
let menuClick = document.querySelector('#menu-btn');
menuClick.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartShopping.classList.remove('active');
    userForm.classList.remove('active');
});
window.onscroll = () => {
    navbar.classList.remove('active')
};
document.querySelector('.home').onmousemove = (e) => {  let x =(window.innerWidth-e.pageX *2)/90;
    let y =(window.innerHeight-e.pageY*2)/90;
    document.querySelector('.home .home-parallax-img').style.transform=`translateX(${y}px) translateY(${x}px)`;
};
document.querySelector('.home').onmouseleave = () => {
    document.querySelector('.home .home-parallax-img').style.transform=`translate(0px)`
}