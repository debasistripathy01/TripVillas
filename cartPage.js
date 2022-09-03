// import {cartButton} from "./components/deba.js";


// document.getElementById("CartSection").innerHTML = cartButton();

// document.getElementById("CartSection").addEventListener("click", clickedCart);

// console.log(cartButton())
// cartButton();



// /_-----------------------__Caart PAge JS _----------------///

var CartloginBtn = document.querySelector("#CartPage");

CartloginBtn.addEventListener("click", cartpageopne);
function cartpageopne() {
  var CloseCartBtn = document.querySelector("#CloseCartBtn");
  var CartPartArea = document.querySelector("#mainCartContantPagr");
  CartPartArea.classList.add("DisplayTheactivnessFrocart");
  // var CloseCartBtn = document.querySelector("#clogin")
  CloseCartBtn.style.display = "block";
}
var CloseCartBtn = document.querySelector("#CloseCartBtn");
CloseCartBtn.addEventListener("click", CartPartClose);
function CartPartClose() {
  var CartPartArea = document.querySelector("#mainCartContantPagr");
  CartPartArea.classList.remove("DisplayTheactivnessFrocart");
  CloseCartBtn.style.display = "none";
}

        // let query=document.querySelector("#MobleNoInput").value;

        // document.getElementById("confirmLogin").addEventListener("click",function(){
        //   alert("clcied")
        // })

        // let query =document.getElementById("MobleNoInput").value;
        // console.log(query);

        // var nameInput = document.getElementById('name');

        // document.querySelector('form.pure-form').addEventListener('submit', function (e) {
        // alert("submit")
        //     //prevent the normal submission of the form
        //     e.preventDefault();

        //     console.log(nameInput.value);
        // });

        // let searchquery = document.querySelector("#MobleNoInput");

        // searchquery.addEventListener("keypress", () => {
        //   if (event.key == "Enter") {
        //     getMobileNo();
        //   }
        // });

        // let getMobileNo = () => {
        //   let query = document.querySelector("#MobleNoInput").value;
        //   console.log(query);
        //   if (query.length == 10) {
        //     alert("123456 is the OTP ");
        //   } else if (query.length > 10) {
        //     alert("Please!! Enter a Valid Mobile 📱 Number");
        //   }
        // };

        // let searchquery2 = document.querySelector("#OneTimePassword");
        // searchquery2.addEventListener("keypress", () => {
        //   if (event.key == "Enter") {
        //     otpvalid();
        //   }
        // });

        // let otpvalid = () => {
        //   let query2 = document.querySelector("#MobleNoInput").value;
        //   console.log(typeof query2);
        //   console.log(query2.map(Number));
        //   if (query2 == "12345") {
        //     alert("Sucessfully log in ");
        //   } else {
        //     alert("Please!! Enter a Valid Mobile 📱 Number");
        //   }
        // };



// Cart-------------COMPLETED---------------------------items-------------------------


// var cartLic = JSON.parse(localStorage.getItem("CartDetails"))||[];

var cont = document.querySelector("#lef");
var total = document.querySelector("#total");
var tItem = document.querySelector("#tItem");
var promo = document.querySelector("#promo");
var form = document.querySelector("#apply");
var checkout = document.querySelector("#dd");

var sum = 0;
var n = cartLic.length;
var c = 0;

// displayData(cartLic);

function displayData(data) {
  data.forEach(function (el, index) {
    var count = 1;

    var candy = document.createElement("div");
    candy.setAttribute("id", "candy");
    candy.id = "candy";

    var imgDiv = document.createElement("div");
    var about = document.createElement("div");
    about.id = "about";

    var img = document.createElement("img");
    img.id = "pic";
    img.src = el.imgUrl;
    imgDiv.append(img);

    var brand = document.createElement("p");
    brand.innerText = el.name;

    var des = document.createElement("p");
    des.innerText = el.des;

    var price = document.createElement("p");
    price.innerText = "₹" + el.price;
    sum += +2000;
    price.id = "price";

    about.append(brand, price);

    var remove = document.createElement("button");
    remove.innerText = "REMOVE";
    remove.id = "remove";
    remove.addEventListener("click", function () {
      event.target.parentNode.remove();
      data.splice(index, 1);
      sum -= +el.price;
      localStorage.setItem("CartDetails", JSON.stringify(cartLic));
      //  window.location.reload();
    });

    var inc = document.createElement("button");
    inc.innerText = "+";
    inc.id = "inc";
    inc.addEventListener("click", function () {
      n++;
      count++;
      sum += +el.price;
      tItem.innerText = n;
      qty.innerText = count;
      total.innerText = sum;
    });

    var qty = document.createElement("div");
    qty.innerText = count;
    qty.id = "count";

    var dec = document.createElement("button");
    dec.innerText = "-";
    dec.id = "dec";
    dec.addEventListener("click", function () {
      if (count > 1) {
        n--;
        count--;
        sum -= +2000;
        tItem.innerText = n;
        qty.innerText = count;
        total.innerText = sum;
      }
    });

    total.innerText = `₹${sum}`;
    tItem.innerText = n;

    candy.append(imgDiv, about, inc, qty, dec, remove);
    cont.append(candy);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  c++;
  if (promo.value == "Debasis" && c == 1) {
    sum -= sum * 0.3;
    total.innerText = sum;
  }
});
document.getElementById("btn123").addEventListener("click", ()=>{
    // alert("have some alret off")
    window.location.href = "./paymentPage.html";
});


