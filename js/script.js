let mainImg = document.getElementById("mainImg");
let smallImg = document.getElementsByClassName("smallImg");
let inner = document.getElementsByClassName("iner")
let icon = document.getElementById("icon")
let cancel = document.getElementById("cancel")
let fav = document.getElementById("fav")
let productInfo = document.getElementById("productInfo")
let addBtn = document.getElementById("addBtn")
var select = document.getElementById("select");
var number = document.getElementById('number')
var add = document.getElementById('alert')
var home = document.getElementById("home")
var shop = document.getElementById("shop")
var blog = document.getElementById("blog")


for (i = 0; i < smallImg.length; i++) {
    smallImg[i].addEventListener("click", function (e) {
        imgsrc = e.target.getAttribute("src")
        mainImg.src = imgsrc


    })

}

// changeImage
let local = []
let currentUrl = window.location.pathname;
console.log(currentUrl);

if (currentUrl === "/products.html") {
    change();
}


function change() {
    mainImg.src = localStorage.getItem("img")
}


for (i = 0; i < inner.length; i++) {
    inner[i].addEventListener("click", function (e) {
        window.location.href = "products.html"
        source = e.target.getAttribute("src")
        local = localStorage.setItem("img", source)

    })

}
// >>>>>>>>>>>>>>>>>>>>>>>

// sidebar

icon.addEventListener("click", function() {
    fav.style.width = "300px"


})

cancel.addEventListener("click", function() {
    fav.style.width = "0px"
})
// ..........................


// add Product details 
addBtn.addEventListener("click", function displayproduct() {
    var text = select.options[select.selectedIndex].text;
    var num = number.value

    x = 
        `
        <div class="inner bg-white  mt-3">
        <img class="w-50" src="${localStorage.getItem("img")}" alt="">
        <h5>Size: ${text}</h5>
        <h5>Quantity: ${num}</h5>
         <button onclick="delet_fav()" class="btn btn-danger">delete</button> 
        </div>
        `
    productInfo.innerHTML+= x
    add.classList.remove("d-none")
    setProducts();
})

function setProducts() {
    localStorage.setItem("display", x)
}
function checkData() {
    productInfo.innerHTML =localStorage.getItem("display")
}
checkData()



