// Lấy giỏ hàng từ local Storage

let cart = JSON.parse(localStorage.getItem("cart")) || [];
start();

function renderCart() {
  const cartList = document.querySelector("#cartList");
  const cartTotal = document.querySelector("#cartTotal");
  const thead = document.querySelector(".thead");
  let html = "";

  if (cart.length > 0) {
    cart.forEach((item, index) => {
      html += ` <tr>
                <td>${item.name}</td>
                <td>${item.price.toLocaleString()} VNĐ</td>
                <td>
                  <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${index}, -1)">-</button>
                  ${item.quantity}
                  <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${index}, 1)">+</button>
                </td>
                <td class="w-25">
                  <img src="${item.src}" class="w-50">
                </td>
                <td>${(item.price * item.quantity).toLocaleString()} VNĐ</td>
                <td>
                  <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Xóa</button>
                </td>
              </tr>`;
    });
    cartList.innerHTML = html;
    var btnCheckOut = document.getElementById("btnCheckOut");
    var total = cart.reduce((a, b) => {
      return a + b.price * b.quantity;
    }, 0);
    
    btnCheckOut.addEventListener("click", function (e) {
      e.preventDefault();
      var goToCheckOut = confirm("Bạn muốn thanh toán giỏ hàng ?");
      if (goToCheckOut) {
        if (total !== 0) {
          localStorage.setItem("total", total);
          window.location.href = "checkout.html";
        } 
      }
    });
    cartTotal.innerHTML = `<h4>Tổng tiền: ${total.toLocaleString()} VNĐ</h4>`;
    
  } else {
    cartList.innerHTML =
      "<p class='text-muted'>Giỏ Hàng của bạn đang trống</p>";
    thead.style.display = "none";
    cartTotal.innerHTML = "";
  }
}

function changeQuantity(index, change) {
  cart[index].quantity += change;

  // Nếu số lượng <= 0, xóa sản phẩm khỏi giỏ
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeFromCart(index) {
  var options = confirm("Bạn muốn xóa sản phẩm" + cart[index].name + " khỏi giỏ hàng");

  if (options) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Xóa sản phẩm " + cart[index].name + " thành công")
    renderCart();
  }
}

function start() {
  renderCart();
}
