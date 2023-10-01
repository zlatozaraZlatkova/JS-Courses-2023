function solve() {
   const output = document.getElementsByTagName("textarea")[0];
   const shoppingCart = document.getElementsByClassName("shopping-cart")[0];
   const checkoutBtn = document.getElementsByClassName("checkout")[0];

   shoppingCart.addEventListener("click", addProductInCart);
   checkoutBtn.addEventListener("click", cartCheckout);

   const cart = { products: new Set(), totalPrice: 0};


   function addProductInCart(event) {
      if (event.target.tagName === "BUTTON" && event.target.classList.contains("add-product")) {
         const product = event.target.parentElement.parentElement;
         const productTitle = product.querySelector(".product-title").textContent;

         const productPrice = Number(product.querySelector(".product-line-price").textContent);

         cart.products.add(productTitle);
         cart.totalPrice += productPrice;

         output.value += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`;
      }
   }

   function cartCheckout(event) {
      const listOfProducts =  [...cart.products].join(", ");

      output.value += `You bought ${listOfProducts} for ${cart.totalPrice.toFixed(2)}.\n`;

      shoppingCart.removeEventListener("click", addProductInCart);
      checkoutBtn.removeEventListener("click", cartCheckout);
      
   }

}

