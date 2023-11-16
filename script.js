var plusbtns = document.querySelectorAll(".fa-circle-plus");
var minusbtns = document.querySelectorAll(".fa-circle-minus");
var heartbtns = document.querySelectorAll(".fa-heart");
var trashbtns = Array.from(document.querySelectorAll(".fa-trash"));
var cards = Array.from(document.querySelectorAll(".card"));
var totalprice = document.getElementById("payT");
var clear = document.querySelector(".reset");
var cartshopping = document.querySelector(".fa-cart-shopping")
document.addEventListener("DOMContentLoaded", function () {
  updateCartShoppingColor(); // Check total price on page load
});

// +
for (let plusbtn of plusbtns) {
  plusbtn.addEventListener("click", function () {
    plusbtn.nextElementSibling.innerHTML++;
    payment()
    updateCartShoppingColor();
  });
}
//-
for (let minusbtn of minusbtns) {
  minusbtn.addEventListener("click", function () {
    if(minusbtn.previousElementSibling.innerHTML >0){
        minusbtn.previousElementSibling.innerHTML --;
        
    }
    payment()
    updateCartShoppingColor();
  });
}
//heart btn
for (let heartbtn of heartbtns) {
  heartbtn.addEventListener("click", function () {
    if (heartbtn.style.color != "red") {
      heartbtn.style.color = "red";
    } else {
      heartbtn.style.color = "black";
    }
  });
}
//trash
for (let i in trashbtns) {
  trashbtns[i].addEventListener("click", function () {
    cards[i].remove();
    payment()
  });
}
//payment
function payment(){
  let quantity = Array.from(document.querySelectorAll(".quantity"))
  let priceU = Array.from(document.querySelectorAll(".priceU"))
  let totalprice  = document.getElementById("payT")  
  let s = 0;
  for(let i in priceU){
    s = s +  quantity[i].innerHTML * priceU[i].innerHTML 
  }
  totalprice.innerHTML = s
}

//reset
clear.addEventListener("click", clearTotal);
function clearTotal() {
  totalprice.innerHTML = 0;
}




//cart shopping
function updateCartShoppingColor() {
  if (parseInt(totalprice.innerHTML) > 0) {
    cartshopping.style.color = "orange";
  } else {
    cartshopping.style.color = "#b20101"; 
  }}
  




//basket
/*for(let basket of baskets){
  basket.addEventListener("click",function(){
    if(basket.style.color!="yellow"){
      basket.style.color="yellow";
    } else{
      basket.style.color="bleu";
    }
  });
}*/