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

next_arrow.addEventListener("click", () => {
  if (hidden_cars.style.display == "none") {
    hidden_cars.style.display = "block";
  } else {
    hidden_cars.style.display = "none";
  }
  prev_cars.style.display = "none";
  next_arrow.style.display = "none";
});
