// Lấy sản phẩm trong giỏ hàng

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = localStorage.getItem("total");
let checkoutForm = document.querySelector("#checkoutForm");
function renderCartItem() {
  let cartList = document.querySelector("#cartList");
  let totalAmount = document.querySelector("#totalAmount");

  let html = "";
  let cartQuantity = document.querySelector("#cartQuantity");

  cartQuantity.innerText = cart.length;

  cart.forEach((cartItem) => {
    html += `
        <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 class="my-0">${cartItem.name}</h6>
                <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">${cartItem.price} VND</span>
        </li>
        `;
  });

  cartList.innerHTML = html;
  totalAmount.value = total;
}

function handleCheckOut() {
  const fullName = document.getElementById("fullName").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;

  alert(
    `Cảm ơn ${fullName}! Đơn hàng của bạn đã được ghi nhận và sẽ được giao đến ${address}.`
  );

  localStorage.removeItem("cart");
  localStorage.removeItem("total");
}

checkoutForm.addEventListener("submit", handleCheckOut);

renderCartItem();
