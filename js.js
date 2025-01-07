// select
const form = document.getElementById("userForm");
const cardsContainer = document.querySelector(".cardsContainer");

// addeventlister
form.addEventListener("submit", function (event) {
  event.preventDefault();
  //   // Collect form data

  const fullname = document.getElementById("fullname").value;
  const password = document.getElementById("password").value;
  const gender = document.getElementById("gender").value; //by ID
  const phonenumber = document.getElementById("phone").value;
  const dateofbirth = document.getElementById("dateofbirth").value;

  // orderType

  const orderType = Array.from(
    document.querySelectorAll("input[name='orderType']:checked")
  ).map((checkbox) => checkbox.value);
  // orderOptions

  const orderOptions = document.querySelector(
    'input[name="orderOptions"]:checked'
  ).value;

  // Create new customer
  const newCustomer = new Customer(
    fullname,
    password,
    dateofbirth,
    gender,
    orderType,
    orderOptions,
    "user.jpg",
    phonenumber
  );
  // call function
  renderCards(newCustomer);

  // Retrieve existing orders or initialize
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(newCustomer);

  // Save orders back to localStorage
  localStorage.setItem("orders", JSON.stringify(orders));

  // Render the new customer card
  renderCards(newCustomer);

  if (/\s/.test(fullname)) {
    window.alert("UserName should be without whitespaces");
    return;
  }

  if (
    !/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
      password
    )
  ) {
    window.alert(
      "Password should be at least [8 digits][1 uppercase][1 special characters]"
    );
    return;
  }

  if (!/^07\d{8}$/.test(phonenumber)) {
    window.alert("Phone number must be 10 digits long and start with '07'.");
    return;
  }

  localStorage.setItem();
});

// Customer Constructor

function Customer(
  fullname,
  password,
  dateofbirth,
  gender,
  orderType,
  orderOption,
  imageURL,
  phonenumber
) {
  this.fullname = fullname;
  this.password = password;
  this.dateofbirth = dateofbirth;
  this.gender = gender;
  this.orderType = orderType;
  this.orderOption = orderOption;
  this.imageURL = imageURL;
  this.phonenumber = phonenumber;
}
let orders = [];

function renderCards(customer) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<img src="${customer.imageURL}">
<p>FullName: ${customer.fullname}</p>
<p>Password: ${customer.password}</p>
<p>Date Of Birth: ${customer.dateofbirth}</p>
<p>gender: ${customer.gender}</p>
<p>orderType: ${customer.orderType}</p>
<p>orderOption: ${customer.orderOption}</p>
<p>phonenumber: ${customer.phonenumber}</p>


`;
  cardsContainer.appendChild(card);
}
