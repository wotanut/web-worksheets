"use strict";
/**
 * Add your functions here...
 */

function targetTextToConsole(event) {
  console.log(event.target.textContent);
}

function tttcAttacher() {
  document
    .querySelector("#button0")
    .addEventListener("click", (e) => targetTextToConsole(e));
}

function lovelyParaAttacher() {
  document
    .querySelector("#thisisalovelyparagraph")
    .addEventListener("click", (e) => lovelyToggle(e));
}

function lovelyButtonAttacher() {
  document
    .querySelector("#button1")
    .addEventListener("click", (e) => lovelyToggle(e));
}

function concatAttacher() {
  let out = document.querySelector("#out1");
  document.querySelector("#in1").addEventListener("change", function (e) {
    out.textContent = e.target.value + document.querySelector("#in2").value;
  });
  document.querySelector("#in2").addEventListener("change", function (e) {
    out.textContent = document.querySelector("#in1").value + e.target.value;
  });
}

function snitchAttacher() {
  let paragrph = document.querySelector("#mousewatcher");
  paragrph.addEventListener("mouseover", function (e) {
    snitchUpdater(e);
  });
  paragrph.addEventListener("mouseout", function (e) {
    snitchUpdater(e);
  });
}

function reportAttacher() {
  let report = document.querySelector("#mousereporter");
  report.addEventListener("mousemove", function (e) {
    reportUpdater(e);
  });
}

function reportUpdater(event) {
  document.querySelector(
    "#report"
  ).textContent = `x: ${event.screenX} y: ${event.screenY}`;
}

function idValidationAttacher() {
  let newid = document.querySelector("#newid");
  newid.addEventListener("input", function (e) {
    /** @type {string} */
    let value = e.target.value;
    if (value.includes(" ")) {
      newid.classList.add("invalid");
    } else {
      newid.classList.remove("invalid");
    }
  });
}
