var under_sign_in = document.querySelector(".sign_in");
const sign_in_button = document.querySelector(".person");
sign_in_button.addEventListener("click", () => {
  under_sign_in.style.display =
    under_sign_in.style.display === "block" ? "block" : "none";
});
