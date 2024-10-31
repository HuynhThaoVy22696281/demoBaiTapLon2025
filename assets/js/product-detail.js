// Lấy thông tin sản phẩm từ Local Storage
const product = JSON.parse(localStorage.getItem("selectedProduct"));

// Hiển thị chi tiết sản phẩm
function displayProductDetail() {
  const productDetail = document.getElementById("productDetail");
  if (!product) {
    productDetail.innerHTML =
      "<p class='text-muted'>Sản phẩm không tồn tại.</p>";
    return;
  }

  productDetail.innerHTML = `
    <div class="col-lg-6 col-md-6 me-lg-5 mb-md-5 mb-sm-5">
        <img src="${product.src}" alt="${
    product.name
  }" class="product-img w-100 ">
    </div>
    <div class="col-lg-4 col-md-6 product-info">
      <h2 class="text-uppercase">${product.name}</h2>
      <h4 class="text-secondary my-lg-3">${product.price.toLocaleString()} VNĐ</h4>
      <p class="text-muted mb-lg-5">Mô tả: Đây là sản phẩm ${
        product.name
      } ${product.desc}.</p>
      <button class="btn btn-dark mr-2 px-4" onclick="addToCart(${product.id})">
        <i class="bi bi-cart-plus me-2"></i> Thêm vào giỏ hàng
      </button>
    </div>
  `;
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProductIndex = cart.findIndex((item) => item.id === productId);

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += 1;
  } else {
    cart.push(product);
    product.quantity = 1;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm sản phẩm vào giỏ hàng!");
}

// Gọi hàm hiển thị chi tiết sản phẩm khi trang được tải
displayProductDetail();
