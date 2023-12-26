document.addEventListener("DOMContentLoaded", function () {
    updateTotal();
});

function adjustQuantity(button, change) {
    const quantityElement = button.parentElement.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent) + change;

    if (quantity < 0) {
        quantity = 0;
    }

    quantityElement.textContent = quantity;
    updateTotal();
}

function deleteItem(button) {
    const quantityElement = button.parentElement.querySelector(".quantity");
    quantityElement.textContent = "0";
    updateTotal();
}



//First heart button color change when clicked on
var likeBtn1 = document.getElementById("like-btn1");
function toggleLike1() {
    if (likeBtn1.style.color == "red") {
        likeBtn1.style.color = "black"
    }
    else {
        likeBtn1.style.color = "red"
    }
}

//Second heart button color changed when clicked on
var likeBtn2 = document.getElementById("like-btn2");
function toggleLike2() {
    if (likeBtn2.style.color == "red") {
        likeBtn2.style.color = "black"
    }
    else {
        likeBtn2.style.color = "red"
    }
}

function updateTotal() {
    const items = document.querySelectorAll(".item");
    let total = 0;

    items.forEach(item => {
        const price = parseFloat(item.getAttribute("data-price"));
        const quantity = parseInt(item.querySelector(".quantity").textContent);
        const itemTotal = price * quantity;

        item.querySelector(".item-total").textContent = itemTotal.toFixed(2);
        total += itemTotal;
    });

    const cartTotalElement = document.getElementById("cart-total");
    if (cartTotalElement) {
        cartTotalElement.textContent = total.toFixed(2);
    } else {
        console.error("Cart total element not found.");
    }
}
