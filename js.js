function Customer(
  fullname,
  password,
  dateofbirth,
  gender,
  ordertype,
  orderoption,
  image,
  phonenumber
) {
  this.fullname = fullname;
  this.password = password;
  this.dateofbirth = dateofbirth;
  this.gender = gender;
  this.ordertype = ordertype;
  this.orderoption = orderoption;
  this.image = image;
  this.phonenumber = phonenumber;
}

var user = new Customer(
  "ahmad",
  "***",
  "1/1/200",
  "male",
  "zinger",
  "box",
  "/img.jpg",
  "0785956180"
);

// select
const form = document.getElementById("userForm");
const output = document.getElementById("output");

// addeventlister
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // select
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const gender = document.getElementById("gender").value; //by ID
  const phone = document.getElementById("phone").value;
  const dateofbirth = document.getElementById("dateofbirth").value;
  const age = document.getElementById("age").value;

  var ele2 = document.getElementsByName("orderOptions");
  var ele = document.getElementsByName("orderType"); // by name

  // orderOptions
  for (i = 0; i < ele2.length; i++) {
    if (ele2[i].checked);

    var elee2 = ele2[i].value;
  }

  // orderType
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) var elee = ele[i].value;
  }

  // output
  output.innerHTML = `Name: ${name} <br><br> Age: ${age} <br><br> Gender: ${gender} <br><br>  
  
  password: ${password} <br><br>  dateofbirth: ${dateofbirth}   <br><br>   phone: ${phone}   <br><br>
  
  Order Type: ${elee} <br><br>
  
  Order Option: ${elee2} `;
});
