// Cette fonction calcule et affiche le total du panier.
function updateTotal() {
  let total = 0;

  // On parcourt toutes les cartes encore présentes dans le panier.
  const products = document.querySelectorAll(".list-products > .card-body");

  products.forEach(function (product) {
    const priceText = product.querySelector(".unit-price").textContent;
    const price = parseInt(priceText);
    const quantity = parseInt(product.querySelector(".quantity").textContent);

    total = total + price * quantity;
  });

  document.querySelector(".total").textContent = total + " $";
}

// Boutons + : augmente la quantité de l'article concerné.
const plusButtons = document.querySelectorAll(".fa-plus-circle");

plusButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const product = button.closest(".list-products > .card-body");
    const quantity = product.querySelector(".quantity");

    quantity.textContent = parseInt(quantity.textContent) + 1;
    updateTotal();
  });
});

// Boutons - : la quantité ne peut pas devenir négative.
const minusButtons = document.querySelectorAll(".fa-minus-circle");

minusButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const product = button.closest(".list-products > .card-body");
    const quantity = product.querySelector(".quantity");

    if (parseInt(quantity.textContent) > 0) {
      quantity.textContent = parseInt(quantity.textContent) - 1;
      updateTotal();
    }
  });
});

// Boutons poubelle : supprime l'article du panier.
const deleteButtons = document.querySelectorAll(".fa-trash-alt");

deleteButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const product = button.closest(".list-products > .card-body");

    product.remove();
    updateTotal();
  });
});

// Boutons coeur : ajoute ou retire l'article des favoris.
const heartButtons = document.querySelectorAll(".fa-heart");

heartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.style.color === "red") {
      button.style.color = "black";
    } else {
      button.style.color = "red";
    }
  });
});

// Affiche le total initial.
updateTotal();
