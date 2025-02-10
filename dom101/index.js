/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

"use strict";

// add your functions here
function replaceText(elem, str) {
  elem.textContent = str;
}

function addTextTo(elem, str) {
  elem.textContent = elem.textContent + str;
}

function moreBears() {
  document.getElementById("animals").src = "http://placebear.com/400/200";
  document.getElementById("animals").alt = "A bear.";
  document.getElementById("animals").title = "A BEAR!";
}

function setId(elem, str) {
  elem.id = str;
  return elem;
}

/**
 * @param {HTMLElement} elem
 * @param {string} str
 */
function setClass(elem, str) {
  elem.className = str;
  return elem;
}

/**
 * @param {HTMLElement} elem
 * @param {string} str
 */
function addAClass(elem, str) {
  elem.classList.add(str);
  return elem;
}

/**
 * @param {HTMLElement} elem
 * @param {string} str
 */
function removeAClass(elem, str) {
  elem.classList.remove(str);
  return elem;
}

function newElement(name) {
  return document.createElement(name);
}

function findElementById(id) {
  return document.querySelector(`#${id}`);
}

function findElementsByQuery(query) {
  return document.querySelectorAll(query);
}

function reverseList(query) {
  /** @type {HTMLElement} list */
  let list = document.querySelector(query);

  for (let index = 0; index < list.children.length; index++) {
    const element = list.children[index];
    list.removeChild(element);
    list.prepend(element);
  }

  return list;
}

function mover(moveThis, appendToThis) {
  /** @type {HTMLElement} move */
  let move = document.querySelector(moveThis);
  /** @type {HTMLElement} append */
  let append = document.querySelector(appendToThis);
  append.append(move);
}

/**
 * @param {HTMLElement} list
 * @param {Array} candidates
 */
function filler(list, candidates) {
  candidates.forEach((element) => {
    let newItem = document.createElement("LI");
    newItem.innerText = element;
    list.appendChild(newItem);
  });
  return list;
}

function dupe(selector) {
  /** @type {HTMLElement} thingToBeDuped */
  let thingToBeDuped = document.querySelector(selector);
  thingToBeDuped.parentElement.appendChild(thingToBeDuped.cloneNode(true));
}

function removeAll(selector) {
  let allNodes = document.querySelectorAll(selector);
  allNodes.forEach((element) => {
    element.parentElement.removeChild(element);
  });
}

function getUserData() {
  let name = document.querySelector("#username").value;
  let speed = document.querySelector("#speed").value;
  let student = document.querySelector("#student").checked;
  console.log(name, student, speed);
  return { name: name, speed: Number(speed), student: student };
}
