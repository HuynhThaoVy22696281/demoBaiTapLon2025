function start() {
  signIn();
}

var elFormLogin = document.getElementById("formLogin");
var btnLogin = document.getElementById("btnLogin");

function signIn() {
  btnLogin.addEventListener("click", function (e) {

    e.preventDefault();
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = {
      email: email,
      password: password,
    };

    var userData = JSON.parse(localStorage.getItem("userData")) || [];
    var isCorrect = userData.some((item) => {
      console.log(item);
      console.log(user);
      
      return item.email === user.email && item.password === user.password;
    });
    
    console.log(isCorrect);
    
    if (isCorrect) {
      alert("Đăng nhập thành công!");
      localStorage.setItem("isLogin", true);
      window.location.href = "index.html";
    } else {
      alert("Sai email hoặc mật khẩu!");
    }
  });
}

start();
