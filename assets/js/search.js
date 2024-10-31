// Dữ liệu sản phẩm mẫu
const products = JSON.parse(localStorage.getItem('productList'));

// Lấy từ khóa từ URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Render sản phẩm dựa trên kết quả tìm kiếm
function renderProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    if (filteredProducts.length === 0) {
        productList.innerHTML = "<p class='text-center'>Không tìm thấy sản phẩm.</p>";
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-md-4", "mb-4");

        productCard.innerHTML = `
            <div class="card">
                <img src="${product.src}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price.toLocaleString()} VNĐ</p>
                </div>
            </div>
        `;

        productList.appendChild(productCard);
    });
}

// Tìm kiếm và hiển thị sản phẩm phù hợp
function searchProducts(query) {
    query = query.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    renderProducts(filteredProducts);
}


// Lấy từ khóa và tìm kiếm sản phẩm
const query = getQueryParam("query");
if (query) {
    searchProducts(query);
} else {
    renderProducts(products);  // Hiển thị tất cả nếu không có từ khóa
}