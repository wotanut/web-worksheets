/**
 * The subtract function is complete and ready for use.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * To make the add function available for import to other
 * programs it must be exported, so prepend the word
 * "export" to the function definition (as seen in the
 * subtract example above)
 */
export function add(a, b) {
  return a + b;
}

/**
 * @export
 * @param {[Number]} a
 * @param {[Number]} b
 */
export function compare(a, b) {
  if (a.length != b.length) {
    return false;
  }

  for (let index = 0; index < b.length; index++) {
    const element = b[index];
    const elementA = a[index];
    if (elementA != element) {
      return false;
    }
  }
  return true;
}

export function largest(a) {
  let largest = a[0];
  a.forEach((element) => {
    if (element > largest) {
      largest = element;
    }
  });
  return largest;
}

export function zeroest(a) {
  let closest = Math.abs(a[0]);
  a.forEach((element) => {
    if (Math.abs(element) < closest) {
      closest = Math.abs(element);
    }
  });
  return closest;
}
