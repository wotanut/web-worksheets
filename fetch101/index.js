/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

"use strict";

function filler(list, candidates) {
  candidates.forEach((element) => {
    let newItem = document.createElement("LI");
    newItem.innerText = element;
    list.appendChild(newItem);
  });
}

async function showMessage(elem, url) {
  const response = await fetch(url);
  const content = await response.text();
  elem.textContent = content;
}

async function showList(elem, url) {
  await fetch(url)
    .then((response) => response.json())
    .then((response) => {
      filler(elem, response);
    });
}

async function startShowingMessage(elem, url) {
  await setInterval(() => {
    fetch(url)
      .then((response) => response.text())
      .then((response) => (elem.textContent = response));
  }, 1000);
}

async function handleError(elem, url) {
  await fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        return "OH DEAR";
      }
    })
    .then((response) => {
      elem.textContent = response;
    });
}

/**
 *
 * @param {HTMLCanvasElement} canvas
 * @param {string} url
 */
async function drawBox(canvas, url) {
  await setInterval(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        let x = response["x"];
        let y = response["y"];
        let ctx = canvas.getContext("2d");
        ctx.fillRect(x, y, x + 10, y + 10);
      });
  }, 1000);
}
