// Dữ liệu mẫu về sản phẩm

const productList = document.getElementById("productList");

function renderProduct() {
  var html = "";
  products.forEach(function (product) {
    html += `
         <div class="card m-3 col-lg-3 col-md-5 col-sm-12 product__card">
            <img class='mx-auto'src="${product.src}"/>
            <div class="card-body text-center mx-auto">
                <div>
                    <h5 class="card-title font-weight-bold">${product.name}</h5>
                    <p class="card-text">${product.price.toLocaleString()}VNĐ</p>
                    <a href="#" class="btn product__card-btn-details px-auto" onclick=viewProductDetail(${
                      product.id
                    })>view details</a><br />
                    <button class="btn product__card-btn-cart px-auto" onclick=addToCart(${
                      product.id
                    })>ADD TO CART</button>
                </div>
            </div>
        </div>
    `;
  });
  productList.innerHTML = html;
}
renderProduct();

// Thêm sản phẩm vào giỏ hàng (sử dụng Local Storage)
function addToCart(productId) {
  const product = products.find((productItem) => productItem.id === productId);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProductIndex = cart.findIndex((item) => item.id === productId);
  if (existingProductIndex == -1) {
    cart.push(product);
    product.quantity = 1;
    alert("Thêm sản phẩm " + product.name + " vào giỏ hàng thành công");
  } else {
    cart[existingProductIndex].quantity += 1;
    alert(
      "Thêm sản phẩm " +
        cart[existingProductIndex].name +
        " vào giỏ hàng thành công"
    );
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

function viewProductDetail(productId) {
  const product = products.find((p) => p.id === productId);
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product-detail.html";
}
