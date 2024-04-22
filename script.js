"use strict";

// Grab all elements and store them in variables
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

// Open form
btn.addEventListener("click", function () {
  // form.classList.toggle("hidden");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
