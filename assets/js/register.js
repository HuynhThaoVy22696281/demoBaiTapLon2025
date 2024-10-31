function start() {
  handleCreateForm();
}

function createUser(data, email) {
  let listUsers = JSON.parse(localStorage.getItem("userData")) || [];

  let isUserExist =
    listUsers.length && listUsers.some((user) => user.email === email);

  if (!isUserExist) {
    listUsers.push(data);
    localStorage.setItem("userData", JSON.stringify(listUsers));
  } else {
    alert("Email đã được sử dụng để đăng ký!!");
  }
}

function handleCreateForm() {
  var elForm = document.getElementById("formRegister");
  elForm.addEventListener("submit", function (e) {
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone").value;
    var password = document.querySelector("#password").value;
    var confirmPassword = document.querySelector("#confirmPassword").value;
    e.preventDefault();

    var userData = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };
    if (password !== confirmPassword) {
      alert("Xác nhận mật khẩu không trùng khớp");
    } else {
      createUser(userData, email);
      alert("Tạo tài khoản thành công");
      elForm.reset();
      window.location.href = "login.html";
    }
  });
}

start();
