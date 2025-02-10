/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

"use strict";

function id() {
  return "UP2198694";
}

function fn() {
  return "Sam";
}

function sn() {
  return "Blewitt";
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function checkObject(obj) {
  obj.checked = true;
  return obj;
}

function checkObjectInside(obj) {
  if (obj.data) {
    obj.data.checked = true;
  }
  return obj;
}

/**
 * @param {Array} arr
 * @param {int} i
 * @param {int} n
 */
function arraySet(arr, i, n) {
  if (arr.length > i && i % 1 === 0) {
    arr[i] = n;
  }
}

function addAll(arr) {
  let total = 0;
  arr.forEach((element) => {
    total = total + element;
  });
  return total;
}

function larger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function largest(arr) {
  let largest = arr[0];
  arr.forEach((element) => {
    if (largest < element) {
      largest = element;
    }
  });
  if (largest == undefined) {
    largest = null;
  }
  return largest;
}

function compare(a, b) {
  let index = 0;
  let Notfailed = true;
  if (a.length != b.length) {
    return false;
  }
  a.forEach((element) => {
    if (element != b[index]) {
      Notfailed = false;
    }
    index += 1;
  });
  return Notfailed;
}

function addToAll(arr, n) {
  let index = 0;
  arr.forEach((element) => {
    element = element + n;
    arr[index] = element;
    index += 1;
  });
  return arr;
}

let remembered;
function rememberThis(keepsake) {
  remembered = keepsake;
}

function nArray(n) {
  let arr = [];
  for (let index = 0; index < n; index++) {
    arr.push(index + 1);
  }
  return arr;
}

function addAllOpt(arr) {
  let sum = 0;
  if (arr == undefined) {
    return 0;
  }
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}

function divisors(arr, div) {
  let newArr = [];
  arr.forEach((element) => {
    if (element % div == 0) {
      newArr.push(element);
    }
  });
  return newArr;
}

function multiples(n, m) {
  let newArr = [];
  for (let index = 0; index < n; index++) {
    newArr.push((index + 1) * m);
  }
  return newArr;
}
