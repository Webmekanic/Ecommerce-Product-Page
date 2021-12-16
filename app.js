// USER STORY
// MOBILE DEVICE
// CLICK ON THE HAMBURGER MENU TO DISPLAY THE SIDE MENU BAR
// WORK ON THE IMAGE SLIDER, MAKE THE CLICK NEXT AND PREVIOUS ICON WORKS ALSO ADD INFINITE ANIMATION TO SHOW THE ITEMS AUTOMATICALLY
// MAKE THE COUNTER SECTION WORKS AS A USER I SHOULD BE ABLE TO INCREASE AND DECREASE ITEM TO BE PURCHASED
// ADD ITEMS TO CARTS
// THE NUMBER OF ITEM TO BE PURCHASED SHOULD DISPLAY AT THE TOP OF THE CART

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
// const prices = document.querySelector("#priceTag");
// console.log(prices);
// const cartBody = document.querySelectorAll(".cartBody");


const auto = true;
const intervalTime = 5000;
let slideInterval;

// console.log(addToCart);

// LOAD ALL EVENTS LISTENERS
LoadAllEventListeners();

function LoadAllEventListeners() {
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
  // cartUI.addEventListener("click", removeProduct);
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
    // console.log(counter);
    counterNumber.innerHTML = counter;
  }
  e.preventDefault();
}
function increaseNumber() {
  counter++;
  // console.log(counter);
  counterNumber.innerHTML = counter;
}

function nextSlides() {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
    // console.log(slides[0]);
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
  // const cartUI = document.querySelector(".cart");
  const cartBody = document.querySelector(".cartBody");
  cartUI.style.display = "block";

  //   EMPTY CART
  if (counterNumber.textContent === "0") {
    emptySection.classList.add("show");
    // console.log(emptySection);
  } else {
    // emptySection.classList.remove("show");
      // cartBody.classList.add("cartBody");
      // console.log(cartBody);
  }

  // const emptySection = document.createElement("p");
  // emptySection.className = "emptyCart";
  // emptySection.appendChild(document.createTextNode("Your cart is empty"));
  // cartUI.appendChild(emptySection);
}

// CLOSE CART
function closeCart() {
  // const cartUI = document.querySelector(".cart");
  cartUI.style.display = "none";
}

// CREATE ITEMS FOR CART
function addproduct(e) {
  e.preventDefault()
  // ADD NUMBER OF PRODUCT TO CART
//   let currentPrice = 125;
// let number = counterNumber;
  const cartItemNo = document.getElementById("cartItemNo");
  // const cartUI = document.querySelector(".cart");
  const cartBody = document.querySelector(".cartBody");
  // const section = document.querySelectort("section");
  // console.log(cartBody);
  const productName = document.querySelector(".productName");
  const prices = document.querySelector("#priceTag");
  // console.log(prices);
  // const create = document.querySelector("#totalItem");
  // console.log(create);
  // const countDown = document.querySelector("#counterNumber").innerHTML;
  // console.log(cartBody);
  //   console.log("emptyCart");
  if (counterNumber.textContent === "0") {
    // const cartBody = document.querySelector(".cartBody");
    cartBody.style.display = "none";
    // console.log(cartBody);
    cartItemNo.style.display = "none";
    // cartBody.classList.remove("cartBody");
    // console.log(cartBody);
    emptySection.style.display = "block";
    // emptySection.classList.add("show");
    // console.log(emptySection);
  } else if (cartBody && counterNumber.textContent !== "0") {
    cartItemNo.innerHTML = counterNumber.textContent;
    // console.log( cartItemNo.innerHTML);
    cartItemNo.style.display = "flex";
    // console.log( cartItemNo);
    cartBody.style.display = "block";
    emptySection.style.display = "none";
    // emptySection.classList.remove("show")
  

    
      prices.textContent = `${currentPrice} * ${counter} $${125 * counterNumber.textContent}`;
  }else {
    // emptySection.classList.remove("show");
    emptySection.style.display = "none";
    // console.log(emptySection);
      cartItemNo.style.display = "block";
      cartItemNo.innerHTML = counterNumber.textContent;
      // emptySection.classList.remove("show");
      const section = document.createElement("section");
      section.className = "cartBody";
      //   section.style.border = "1px solid red";
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
      // console.log(span);
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
    } 


  }

  // console.log(thumbNail1);


  // function li(params) {
    
  // }
  
    thumbNail1.forEach(function (item) {
    //  console.log(item);
     item.addEventListener("click", lightBoxOpen);

       });
       function lightBoxOpen (){
        lightBoxModal.style.display = "flex";
       }

       function closeLightBox() {
        lightBoxModal.style.display = "none";




         
       }
    
  
 

//   function removeProduct(e) {
//     if (e.target.parentElement.classList.contains("deleteItem")) {
//       console.log("dkjdkdkdk");
      
//     }
    
  
 
// }

 
