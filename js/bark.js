window.addEventListener('load', function() {
      
    /* open cart */
    const buttonCart = document.querySelector('.bark-block__btn') // Get element from DOM
    const bagCart = document.querySelector('.header-cart') // Get element from DOM
    bagCart.addEventListener('click', function() {
        console.log('test');
        document.querySelector(".bark-loading").classList.remove("is-hidden"); 
        setTimeout(function(){ 
        document.querySelector(".bark-cart.is-hidden").classList.remove("is-hidden"); 
        document.querySelector(".bark-loading").classList.add("is-hidden"); 
    }, 1000);
    });

    buttonCart.addEventListener('click', function() {
        console.log('test');
        document.querySelector(".bark-loading").classList.remove("is-hidden"); 
        setTimeout(function(){ 
        document.querySelector(".bark-cart.is-hidden").classList.remove("is-hidden"); 
        document.querySelector(".bark-loading").classList.add("is-hidden"); 
    }, 1000);
    });


    /* close cart*/
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
    
    