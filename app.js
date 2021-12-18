// USER STORY
// MOBILE DEVICE
// CLICK ON THE HAMBURGER MENU TO DISPLAY THE SIDE MENU BAR
// WORK ON THE IMAGE SLIDER, MAKE THE CLICK NEXT AND PREVIOUS ICON WORKS ALSO ADD INFINITE ANIMATION TO SHOW THE ITEMS AUTOMATICALLY
// MAKE THE COUNTER SECTION WORKS AS A USER I SHOULD BE ABLE TO INCREASE AND DECREASE ITEM TO BE PURCHASED
// ADD ITEMS TO CARTS
// THE NUMBER OF ITEM TO BE PURCHASED SHOULD DISPLAY AT THE TOP OF THE CART
// REMOVE FROM CART
// LIGHTBOX IMPLEMENTATION

// Declare Variables
const containerUi = document.querySelector(".container");
const menuUi = document.querySelector("#myMenu");
const navUi = document.querySelector(".hamburgerMenu");
const closeUi = document.querySelector(".close");
const substract = document.querySelector("#subtract");
const addition = document.querySelector("#addition");
const counterNumber = document.querySelector("#counterNumber");
const slides = document.querySelectorAll(".carouselSlide");
const previousKey = document.querySelector("#previousKey");
const nextKey = document.querySelector("#nextKey");
const openCartUI = document.querySelector("#productCart");
const closeCartUI = document.querySelector(".closeCart");
const addToCart = document.querySelector("#addToCart");
const emptySection = document.querySelector(".emptyCart");
const currentPrice = document.querySelector(".currentPrice").innerHTML;
const cartUI = document.querySelector(".cart");
const current = document.querySelector(".current");
const thumbNail1 = document.querySelectorAll(".thumbnailImg");
const lightBoxModal = document.querySelector(".lightBoxModal");
const removePopUp = document.querySelector(".removePopUp");
const auto = true;
const intervalTime = 5000;
let slideInterval;

// LOAD ALL EVENTS LISTENERS
LoadAllEventListeners();

function LoadAllEventListeners() {
  document.addEventListener("DOMContentLoaded", getItems);
  menuUi.addEventListener("click", menuOpen);
  closeUi.addEventListener("click", closeModal);
  substract.addEventListener("click", decreaseNumber);
  addition.addEventListener("click", increaseNumber);
  previousKey.addEventListener("click", prevSlides);
  nextKey.addEventListener("click", nextSlides);
  openCartUI.addEventListener("click", openCart);
  closeCartUI.addEventListener("click", closeCart);
  addToCart.addEventListener("click", addproduct);
  removePopUp.addEventListener("click", closeLightBox);
  // thumbNail1.addEventListener("click", openLightBox);
  cartUI.addEventListener("click", removeProduct);
}

function getItems(){
  let items;
  if (sessionStorage.getItem("items") === null) {
    items = [];  
  } else {
    items = JSON.parse(sessionStorage.getItem("items"));
  }

  items.forEach(function(item) {
    
    
    
  });

}

function menuOpen() {
  navUi.classList.add("active");
}
function closeModal() {
  navUi.classList.remove("active");
}

let counter = 1;

function decreaseNumber(e) {
  if (counterNumber.innerHTML === "0") {
    counterNumber.innerHTML = 0;
  } else {
    counter--;
    counterNumber.innerHTML = counter;
  }
  e.preventDefault();
}
function increaseNumber() {
  counter++;
  counterNumber.innerHTML = counter;
}

function nextSlides() {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
}

function prevSlides() {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
}
if (auto) {
  slideInterval = setInterval(nextSlides, intervalTime);
}

// OPEN CART
function openCart() {
  const cartBody = document.querySelector(".cartBody");
  cartUI.style.display = "block";

  //   EMPTY CART
  if (counterNumber.textContent === "0") {
    emptySection.classList.add("show");
  }
}

// CLOSE CART
function closeCart() {
  cartUI.style.display = "none";
}

// CREATE ITEMS FOR CART
function addproduct(e) {
  e.preventDefault();
  // ADD NUMBER OF PRODUCT TO CART
  const cartItemNo = document.getElementById("cartItemNo");
  const cartBody = document.querySelector(".cartBody");
  const productName = document.querySelector(".productName");
  const prices = document.querySelector("#priceTag");
  if (counterNumber.textContent === "0") {
    cartBody.style.display = "none";
    cartItemNo.style.display = "none";
    emptySection.style.display = "block";
  } else if (cartBody && counterNumber.textContent !== "0") {
    cartItemNo.innerHTML = counterNumber.textContent;
    cartItemNo.style.display = "flex";
    cartBody.style.display = "block";
    emptySection.style.display = "none";
    prices.textContent = `${currentPrice} * ${counter} $${
      125 * counterNumber.textContent
    }`;
  } else {
    emptySection.style.display = "none";
    cartItemNo.style.display = "block";
    cartItemNo.innerHTML = counterNumber.textContent;
    const section = document.createElement("section");
    section.className = "cartBody";
    cartUI.appendChild(section);
    const cartpara = document.createElement("div");
    cartpara.className = "cartParagraph";
    section.appendChild(cartpara);
    const img = document.createElement("img");
    img.id = "cartItemImg";
    img.src = "./images/image-product-1-thumbnail.jpg";
    cartpara.appendChild(img);
    const cartDetail = document.createElement("div");
    cartDetail.className = "cartDetails";
    cartpara.appendChild(cartDetail);
    const productType = document.createElement("p");
    productType.appendChild(document.createTextNode(productName.textContent));
    cartDetail.appendChild(productType);
    const prices = document.createElement("p");
    prices.id = "priceTag";
    prices.textContent = `${currentPrice} * ${counter}`;
    cartDetail.appendChild(prices);
    const span = document.createElement("span");
    span.id = "totalItem";
    span.textContent = `$${125 * counterNumber.textContent}`;
    prices.appendChild(span);
    const oimg = document.createElement("img");
    oimg.className = "deleteItem";
    oimg.src = "./images/icon-delete.svg";
    cartpara.appendChild(oimg);
    const checkOutButton = document.createElement("button");
    checkOutButton.className = "checkout";
    checkOutButton.innerHTML = "checkout";
    section.appendChild(checkOutButton);

    // STORE IN SESSION STORAGE
    storeItemInSessionStorage(section);
  }
}

function  storeItemInSessionStorage(item) {
  let items;
  if (sessionStorage.getItem("items") === null) {
    items = [];  
  } else {
    items = JSON.parse(sessionStorage.getItem("items"));
  }

  items.push(item);
  sessionStorage.setItem("items", JSON.stringify(items));
  
}

thumbNail1.forEach(function (item) {
  //  console.log(item);
  item.addEventListener("click", lightBoxOpen);
});
function lightBoxOpen() {
  lightBoxModal.style.display = "flex";
}

function closeLightBox() {
  lightBoxModal.style.display = "none";
}

function removeProduct(e) {
  if (e.target.classList.contains("deleteItem")) {
    if (confirm("Delete item from cart")) {
      e.target.parentElement.parentElement.remove();
      emptySection.style.display = "block";
      cartItemNo.style.display = "none";
      counterNumber.innerHTML = "0";
    }
  }
}

// // LIGHTBOX FUNCTIONALITY
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var lighBoxImg = document.getElementsByClassName("lighBoxImg");
  var lighBoxSelect = document.getElementsByClassName("demo");
  if (n > lighBoxImg.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = lighBoxImg.length;
  }
  for (i = 0; i < lighBoxImg.length; i++) {
    lighBoxImg[i].style.display = "none";
  }
  for (i = 0; i < lighBoxSelect.length; i++) {
    lighBoxSelect[i].className = lighBoxSelect[i].className.replace(
      " light", "");
  }
  lighBoxImg[slideIndex - 1].style.display = "block";
  lighBoxSelect[slideIndex - 1].className += " light";
}
