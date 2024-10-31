var statusLogin = document.getElementById("user");

const products = [
  {
    id: 1,
    name: "Bàn ăn 8 chỗ Coastal",
    price: 1650000,
    desc: "Bàn ăn Coastal được làm từ gỗ, theo phong cách truyền thống mang kết cấu vững chãi. Mặt bàn bằng phẳng với các đường vân tự nhiên, bốn cạnh được bo tròn mềm mại để tránh va chạm trong lúc sử dụng. Sản phẩm có 2 kích thước là bàn ăn 6 chỗ và 8 chỗ cho người dùng những lựa chọn linh hoạt, phù hợp với nhiều không gian và nhu cầu sử dụng.",
    src: "./assets/imgs/product-1.jpg",
  },
  {
    id: 2,
    name: "Giường ngủ Coastal",
    price: 28900000,
    desc: "Giường ngủ Coastal mang đến cảm giác như đang nằm trên bãi biển dài bình yên, với đường cong êm ái ở đầu giường, các cạnh cùng phần vạt hở duyên dáng hình chữ V, gợi nhớ đến hình ảnh chim hải âu bay trên biển. BST Coastal ban đầu được thiết kế cho căn hộ nghỉ dưỡng ở vùng duyên hải. Nhưng với sự sáng tạo và phá cách, Coastal trở nên năng động và phù hợp với nhiều không gian sống, mang thiên nhiên vào mọi không gian.",
    src: "./assets/imgs/product-2.jpg",
  },
  {
    id: 3,
    name: "Bàn ăn 6 chỗ Coastal",
    price: 1390000,
    desc: "Bàn ăn Coastal được làm từ gỗ Ash, theo phong cách truyền thống và mang kết cấu vững chãi. Mặt bàn bằng phẳng với các đường vân tự nhiên, bốn cạnh được bo tròn mềm mại để tránh va chạm trong lúc sử dụng. Sản phẩm có 2 kích thước là 6 chỗ và 8 chỗ cho người dùng những lựa chọn linh hoạt, phù hợp với nhiều không gian và nhu cầu sử dụng.",
    src: "./assets/imgs/product-3.jpg",
  },
  {
    id: 4,
    name: "Kệ sách Cabo PMA732007",
    price: 16700000,
    desc: "Kệ sách Cabo được cấu tạo từ khung kim loại màu gold sang trọng, sự kết hợp giữa gỗ,và kim loại vàng bóng. Đặc biệt những nét bo viền trong từng chi tiết tỉ mỉ khéo léo tạo ra điểm nhấn riêng biệt độc đáo tạo không gian trưng bày đậm chất văn học cho những ai yêu thích đọc sách là điểm nhấn sáng giá cho không gian làm việc của bạn.",
    src: "./assets/imgs/product-4.jpg",
  },
  {
    id: 5,
    name: "Bàn ngoài trời Fermob Opera Poppy",
    price: 3815000,
    desc: "Bàn Opera là sản phẩm thuộc thương hiệu nổi tiếng về hàng ngoài trời Fermob. Sản phẩm có 24 màu sắc nổi bật để lựa chọn với kiểu dáng thanh tao. Bàn Opera được sơn tĩnh điện cao cấp, bề mặt sơn phù hợp để sử dụng ngoài trời với cấu trúc khung bàn chắn chắn.",
    src: "./assets/imgs/product-5.jpg",
  },
  {
    id: 6,
    name: "Tủ trưng bày So Chic",
    price: 22130000,
    desc: "Tủ trưng bày So Chic với thiết kế hiện đại tinh tế, màu gỗ Walnut điểm sắc cam cá tính mạnh mẽ sẽ thổi một làn gió mới lạ vào phòng khách nhà bạn.",
    src: "./assets/imgs/product-6.jpg",
  },
  {
    id: 7,
    name: "Ghế thư giãn Lazboy Rialto 2C+CS T39505 - Claret",
    price: 48410000,
    desc: "Ghế thư giãn thương hiệu nối tiếng Lazboy của Mỹ được làm bằng khung gỗ bọc da, cấu trúc ghế chắc chắn nâng đỡ cơ thể. Khi ngồi tạo cảm giác êm ái thoải mái lắc lư theo nhịp ghế, phần nâng đỡ chân được bật ra, chỉ cần một động tác nhẹ phần tựa lưng sẽ tự động xuôi theo dáng nằm cho bạn cảm giác thoải mái nhất. Ghế thư giãn Lazboy là sự lựa chọn tuyệt vời nhất cho những phút giây thư giãn sau một ngày dài hoạt động.",
    src: "./assets/imgs/product-7.jpg",
  },
  {
    id: 8,
    name: "Armchair Bridge Gỗ Tự nhiên Da đen",
    price: 69000000,
    desc: "Sự gần gũi, sang trọng của chất liệu gỗ sồi và da tự nhiên Ý giúp armchair Bridge xứng đáng là sản phẩm được lựa chọn cho không gian hiện đại. Kết cấu thiết kế được tính toán khoa học từ tỉ lệ lưng tựa cho đến phần tay vịn mang lại cảm giác thoải mái cho bạn. Bridge – Tình yêu thiên nhiên và sức quyến rũ của gỗ. Bộ sưu tập Bridge mang hơi thở Scandinavian là sự kết hợp hoàn hảo của nhà thiết kế nổi tiếng Đan Mạch Hans Sandgren Jakobsen cùng công nghệ sản xuất thủ công của Nhật Bản. Mang thiết kế vượt thời gian, sử dụng chất liệu gỗ sồi và da bò tự nhiên, Bridge mang đến cảm giác sang trọng, gần gũi và thoải mái cho gia chủ. Điểm nổi bật của Bridge là sự tinh xảo trong hoàn thiện, từng chi tiết, những đường cong, bề mặt gỗ sồi được thực hiện và chọn lựa vô cùng kỹ càng, để tạo ra một Bridge hoàn hảo, chạm đến tâm hồn đầy cảm xúc và yêu quý những giá trị lâu bền của gia chủ Việt.",
    src: "./assets/imgs/product-8.jpg",
  },
  {
    id: 9,
    name: "Sofa Bridge 3 chỗ hiện đại da đen",
    price: 115000000,
    desc: "Sofa Bridge 3 chỗ với phần khung ghế được làm từ gỗ sồi tự nhiên nhập khẩu từ Mỹ mang đến một thiết kế chắc chắn, bền vững theo thời gian. Điểm nhấn là phần tay vịn được gọt dũa tinh xảo với các đường vân gỗ cách điệu độc đáo. Những xúc chạm tinh tế sẽ được khơi nguồn khi chạm tay nhẹ lên bề mặt sản phẩm, vì chất liệu da tự nhiên cao cấp sẽ đem lại cảm giác mềm mại và chân thực. Sản phẩm có đa dạng lựa chọn với 3 màu sắc khác nhau: màu beige, màu cognac và màu đen. Sofa Bridge 3 chỗ là sản phẩm phù hợp cho không gian phòng khách sang trọng và tao nhã.",
    src: "./assets/imgs/product-9.jpg",
  },
  {
    id: 10,
    name: "Tủ tivi Bridge Gỗ 1m8- Màu gỗ tự nhiên",
    price: 17500000,
    desc: "Từng đường nét bo tròn và xử lý tinh tế tạo nên một sản phẩm hoàn hảo cho không gian phòng khách. Tủ tivi Bridge chứa ngăn kéo đóng và mở để phù hợp để đáp ứng công năng cất trữ. Sản phẩm sử dụng gỗ sồi đặc tự nhiên với 2 màu hoàn thiện sáng và trầm. Bridge – Tình yêu thiên nhiên và sức quyến rũ của gỗ. Bộ sưu tập Bridge mang hơi thở Scandinavian là sự kết hợp hoàn hảo của nhà thiết kế nổi tiếng Đan Mạch Hans Sandgren Jakobsen cùng công nghệ sản xuất thủ công của Nhật Bản. Mang thiết kế vượt thời gian, sử dụng chất liệu gỗ sồi và da bò tự nhiên, Bridge mang đến cảm giác sang trọng, gần gũi và thoải mái cho gia chủ. Điểm nổi bật của Bridge là sự tinh xảo trong hoàn thiện, từng chi tiết, những đường cong, bề mặt gỗ sồi được thực hiện và chọn lựa vô cùng kỹ càng, để tạo ra một Bridge hoàn hảo, chạm đến tâm hồn đầy cảm xúc và yêu quý những giá trị lâu bền của gia chủ Việt.",
    src: "./assets/imgs/product-10.jpg",
  },
  {
    id: 11,
    name: "Tủ giày Chio sơn trắng",
    price: 11500000,
    desc: "Với thiết kế gọn gàng, sang trọng, tủ giày Chio sẽ góp phần làm cho gian ngôi nhà của bạn trở nên ngăn nắp và gọn gàng nhưng không thiếu phần hiện đại hơn. Tủ có 2 màu, màu gỗ và màu sơn trắng.",
    src: "./assets/imgs/product-11.jpg",
  },
  {
    id: 12,
    name: "Ghế Aida da coffee",
    price: 8200000,
    desc: "Ghế ăn Aida là một chiếc ghế thời trang bọc da cao cấp và chân kim loại sơn mài với nhiều màu sắc khác nhau cùng tone với màu da. Ghế Aida phù hợp cho phòng ăn hiện đại và sang trọng.",
    src: "./assets/imgs/product-12.jpg",
  },
];
localStorage.setItem("productList", JSON.stringify(products));



checkLogin();

function checkLogin() {
  var isLogin = localStorage.getItem("isLogin");
  if (isLogin === "true") {
    statusLogin.style.display = "none";
    JSON.parse(localStorage.getItem("userData"));
  }
}




