window.addEventListener('load', function() {
      
const addClick = document.querySelector('.bark-product__product-btn') // Get element from DOM
addClick.addEventListener('click', function() {
    console.log('test');
    document.querySelector(".bark-cart.is-hidden").classList.remove("is-hidden"); 
});

})

