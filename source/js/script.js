//Поведение модалки//
var cart_btn = document.querySelector(".promotion-product__order");
var cart_modal = document.querySelector(".modal-cart");
var overlay = document.querySelector(".overlay");
cart_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  cart_modal.classList.add("modal-cart--on");
  overlay.classList.add("overlay--on");
})

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay--on");
  cart_modal.classList.remove("modal-cart--on");
})

//поведение выпадашки
var navigation = document.querySelector(".navigation");
var navigation__switch = document.querySelector(".navigation__switch");
navigation.classList.remove("navigation--nojs");
navigation__switch.addEventListener("click", function (evt) {
  evt.preventDefault();
  if(navigation.classList.contains("navigation--closed")) {
    navigation.classList.remove("navigation--closed");
    navigation.classList.add("navigation--opened");
  }
  else {
    navigation.classList.remove("navigation--opened");
    navigation.classList.add("navigation--closed");
  }
})
