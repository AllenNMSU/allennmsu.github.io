// Product search on the products page
let productSearch = document.getElementById("productSearch");
let products = document.querySelectorAll(".product");

if (productSearch) {
   productSearch.addEventListener("keyup", function() {
      let searchText = productSearch.value.toLowerCase();

      products.forEach(function(product) {
         let productText = product.textContent.toLowerCase();

         if (productText.includes(searchText)) {
            product.style.display = "block";
         } else {
            product.style.display = "none";
         }
      });
   });
}

// Contact form check on the contact page
let contactForm = document.getElementById("contactForm");
let formMessage = document.getElementById("formMessage");

if (contactForm) {
   contactForm.addEventListener("submit", function(event) {
      event.preventDefault();

      let fullName = document.getElementById("fullName").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;

      if (fullName === "" || email === "" || message === "") {
         formMessage.textContent = "Please fill out your name, email, and message.";
      } else {
         formMessage.textContent = "Thank you. We will get back to you soon!";
         contactForm.reset();
      }
   });
}