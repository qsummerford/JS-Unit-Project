const under_sign_in = document.querySelector("#sign_in");
const sign_in_button = document.querySelector(".person");
under_sign_in.style.display = "none";
sign_in_button.addEventListener("click", () => {
  if (under_sign_in.style.display == "none") {
    under_sign_in.style.display = "block";
  } else {
    under_sign_in.style.display = "none";
  }
  under_sign_in.style.position = "relative";
  under_sign_in.style.float = "right";
  under_sign_in.style.marginRight = "10px";
  under_sign_in.style.backgroundColor = "black";
  under_sign_in.style.color = "white";
  under_sign_in.style.padding = "5px";
});

var hidden_cars = document.querySelector("#next");
hidden_cars.style.display = "none";
const next_arrow = document.querySelector("#next_arrow");
const prev_cars = document.querySelector("#prev");
const prev_arrow = document.querySelector("#prev_arrow");
prev_arrow.style.display = "none";

const next_cars = document.querySelector("#next2");
next_cars.style.display = "none";

const next_arrow2 = document.querySelector("#next_arrow2");
next_arrow2.style.display = "none";

const prev_arrow2 = document.querySelector("#prev_arrow2");
prev_arrow2.style.display = "none";

next_arrow.addEventListener("click", () => {
  if (hidden_cars.style.display == "none") {
    hidden_cars.style.display = "flex";
    prev_arrow.style.display = "block";
    next_arrow2.style.display = "block";
  } else {
    hidden_cars.style.display = "none";
  }
  prev_cars.style.display = "none";
  next_arrow.style.display = "none";
});

prev_arrow.addEventListener("click", () => {
  if (prev_cars.style.display == "none") {
    prev_cars.style.display = "flex";
    next_arrow.style.display = "block";
  } else {
    prev_cars.style.display = "none";
  }

  hidden_cars.style.display = "none";
  prev_arrow.style.display = "none";
  next_arrow2.style.display = "none";
});

next_arrow2.addEventListener("click", () => {
  if (next_cars.style.display == "none") {
    next_cars.style.display = "flex";
    prev_arrow2.style.display = "block";
  } else {
    next_cars.style.display = "none";
  }
  hidden_cars.style.display = "none";
  next_arrow2.style.display = "none";
  prev_arrow.style.display = "none";
  next_arrow.style.display = "none";
});

prev_arrow2.addEventListener("click", () => {
  if (hidden_cars.style.display == "none") {
    hidden_cars.style.display = "flex";
    next_arrow2.style.display = "block";
    prev_arrow.style.display = "block";
  } else {
    hidden_cars.style.display = "none";
  }
  prev_arrow2.style.display = "none";
  next_cars.style.display = "none";
});

const brand_button = document.querySelector("#brand_dropdown");
const brand_dropdown = document.querySelector("#all_brands");
brand_dropdown.style.display = "none";

brand_button.addEventListener("click", () => {
  if (brand_dropdown.style.display == "none") {
    brand_dropdown.style.display = "flex";
    brand_button.textContent = "See Fewer Brands";
    brand_button.style.padding = "21.2px";
  } else {
    brand_dropdown.style.display = "none";
    brand_button.textContent = "See All Brands";
  }
});

var vehicle_budget = document.querySelector("#budget");
var down_payement = document.querySelector("#down_payment");
var est_button = document.querySelector("#button");

// est_button.addEventListener('click', () => {
//   var begin = vehicle_budget.value - (down_payement.value + 1500);
//   var total = begin / 36;
//   return total;
// })
