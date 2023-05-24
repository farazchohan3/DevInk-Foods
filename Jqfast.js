// Loader

window.onload=function(){
               document.getElementById('loader').style.display="none";
               document.getElementById('content').style.display="block"
          };

$(document).ready(function(){

// Loader Script

     window.onload=function(){
               document.getElementById('loader').style.display="none";
               document.getElementById('content').style.display="block"
          };

// ScrollUp Script

     $(function () {
            $.scrollUp({
                    topDistance: '300',
                    scrollImg:true,
                    animation: 'slide',
                    topspeed:1000
                });
            });
// 

     $('#ssms').click(function(){
          alert("Your Request Recived");
     });

// card 7's 
          $('#crd1').mouseenter(function(){
               $('#crd11').fadeIn(500);
          });

          $('#crd1').mouseleave(function(){
               $('#crd11').hide(500);
          });

          $('#crd2').mouseenter(function(){
               $('#crd22').fadeIn(500);
          });

          $('#crd2').mouseleave(function(){
               $('#crd22').hide(500);
          });

          $('#crd3').mouseenter(function(){
               $('#crd33').fadeIn(500);
          });

          $('#crd3').mouseleave(function(){
               $('#crd33').hide(500);
          });

          $('#crd4').mouseenter(function(){
               $('#crd44').fadeIn(500);
          });

          $('#crd4').mouseleave(function(){
               $('#crd44').hide(500);
          });

          $('#crd5').mouseenter(function(){
               $('#crd55').fadeIn(500);
          });

          $('#crd5').mouseleave(function(){
               $('#crd55').hide(500);
          });

          $('#crd6').mouseenter(function(){
               $('#crd66').fadeIn(500);
          });

          $('#crd6').mouseleave(function(){
               $('#crd66').hide(500);
          });

          $('#crd7').mouseenter(function(){
               $('#crd77').fadeIn(500);
          });

          $('#crd7').mouseleave(function(){
               $('#crd77').hide(500);
          });

// Brand Logo Carasoul

$('#owl1').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        567:{
            items:2
        },
        768:{
            items:2
        },
        991:{
            items:3
        },
        1199:{
            items:4
        },
    },
});

// Owl Carasoul Cards

$("#owl2").owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    center: true,
    navText: [
        "<i class='fa-solid fa-arrow-left'></i>",
        "<i class='fa-solid fa-arrow-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
     
});

// js file

let carticon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closecart = document.querySelector("#close-cart");

// cart open
carticon.onclick = () =>{
     cart.classList.add("active");
};

// cart close
closecart.onclick = () =>{
     cart.classList.remove("active");
};

// cart working js

if(document.readyState == "loading"){
     document.addEventListener("DOMContentLoaded", ready);
}else{
     ready();
}

// making function
function ready(){

// Remove item from cart
     var removecartbuttons = document.getElementsByClassName("cart-remove");
     for(var i = 0; i < removecartbuttons.length; i++){
          var button = removecartbuttons[i];
          button.addEventListener("click", removecartitem)
     }

// Quantity Changes
     var quantityinputs = document.getElementsByClassName("cart-quantity");
     for(var i = 0; i < quantityinputs.length; i++){
          var input = quantityinputs[i];
          input.addEventListener("change", quantitychanged);
     }

// Add to Cart
     var addcart = document.getElementsByClassName("add-cart");
     for(var i = 0; i < addcart.length; i++){
          var button = addcart[i];
          button.addEventListener("click", addcartclicked);
     }

// Buy Button
   document.getElementsByClassName("btn-buy")[0].addEventListener("click", buybuttonclicked);

}

// Buy Button working

function buybuttonclicked() {
     alert("Thanks! Your 0rder is Replaced")
     var cartcontent = document.getElementsByClassName("cart-content")[0];
     while(cartcontent.hasChildNodes()){
          cartcontent.removeChild(cartcontent.firstChild);
     }
     updatetotal();
}

// Remove item from cart
function removecartitem(event) {
     var buttonclicked = event.target;
     buttonclicked.parentElement.parentElement.remove();
     updatetotal();
}

// Quantity Changes
function quantitychanged (event) {
     var input = event.target;

     if(isNaN(input.value) || input.value <= 0){
          input.value = 1;
     }
     updatetotal();
}

// Add to Cart
function addcartclicked(event){
     var button = event.target;
     var shopproducts = button.parentElement;
     var title = shopproducts.getElementsByClassName("product-title")[0].innerText;
     var price = shopproducts.getElementsByClassName("price")[0].innerText;
     var productimg = shopproducts.getElementsByClassName("product-img")[0].src;
     addproductstocart(title, price, productimg);
     updatetotal();
}

// Add to Cart
function addproductstocart(title, price, productimg){
     var cartshopbox = document.createElement("div");
     cartshopbox.classList.add("cart-box");
     var cartitems = document.getElementsByClassName("cart-content")[0];
     var cartitemsnames = cartitems.getElementsByClassName("cart-product-title");

     for(var i = 0; i < cartitemsnames.length; i++){
          if(cartitemsnames[i].innerText == title){
          alert("You have already buy this Product.");
          return;
     }
}

var cartboxcontent = `
                        <div class="row cart-margin">
                             <img class="col-sm-3 col-2 img-fluid cart-img" src="${productimg}">
                    
                             <div class="col-8 detail-box">
                                  <div class="cart-product-title">${title}</div>
                                  <div class="cart-price">${price}</div>
                                  <input type="number" value="1" class="cart-quantity">
                            </div>
                        
                            
                            <i class="col-1-sm-1 col-2 fa-solid fa-trash cart-remove"></i>
                        </div>
                    </div>`;


     cartshopbox.innerHTML = cartboxcontent;
     cartitems.append(cartshopbox);
     cartshopbox.getElementsByClassName("cart-remove")[0].addEventListener('click', removecartitem);
     cartshopbox.getElementsByClassName("cart-quantity")[0].addEventListener('change', quantitychanged);
}
// Update Total

function updatetotal() {
     var cartcontent = document.getElementsByClassName("cart-content")[0];
     var cartboxes = cartcontent.getElementsByClassName("cart-box");

     var total = 0;
     for(var i = 0; i < cartboxes.length; i++){
          var cartbox = cartboxes[i];

          var priceelement = cartbox.getElementsByClassName("cart-price")[0];
          var quantityelement = cartbox.getElementsByClassName("cart-quantity")[0];
          var price = parseFloat(priceelement.innerText.replace("$" , ""));
          var quantity = quantityelement.value;
          total = total + (price * quantity);
     }

          document.getElementsByClassName("total-price")[0].innerText = "$" + total;
          document.getElementsByClassName('count')[0].textContent = i;
    
}