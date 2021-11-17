window.addEventListener('load', function() {
      
    const openCart = document.querySelector('.bark-block__btn') // Get element from DOM
    openCart.addEventListener('click', function() {
        console.log('test');
        document.querySelector(".bark-cart.is-hidden").classList.remove("is-hidden"); 
    });

    const closeCart = document.querySelector('.bark-cart__close')// Get element from DOM
    const overlayCart = document.querySelector('.bark-cart__overlay ')    
    closeCart.addEventListener('click', function() {
        console.log('test');
        document.querySelector(".bark-cart").classList.add("is-hidden"); 
    });
    overlayCart.addEventListener('click', function() {
        console.log('test');
        document.querySelector(".bark-cart").classList.add("is-hidden"); 
    });
    
    })
    
    