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
const auto = true;
const intervalTime = 5000;
let slideInterval;

console.log(addToCart);


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

    
    
}

function menuOpen() {
        navUi.classList.add("active");       
}
function closeModal() {
    navUi.classList.remove("active");   
}

let counter = 0;

function decreaseNumber(e) {
    if (counterNumber.innerHTML === "0") {
        counterNumber.innerHTML = 0;        
    } else{
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
        slides[slides.length -1].classList.add("current");
    }
    
}
if (auto) {
    slideInterval = setInterval(nextSlides, intervalTime);   
}

// OPEN CART
function openCart() {
    const cartUI = document.querySelector(".cart");
    cartUI.style.display = "block";  
}

// CLOSE CART
function closeCart() {
    const cartUI = document.querySelector(".cart");
    cartUI.style.display = "none";   
}

// CREATE ITEMS FOR CART
function addproduct(e) {
    if (taskInput.value === "") {
        alert("Add a task");
      }
    console.log("add Item");

    e.preventDefault();  
}











