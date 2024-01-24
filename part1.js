// Reverse a string
function Revstr(str) {
  let bag = "";
  for (let i = str.length - 1; i >= 0; i--) {
    bag = bag + str[i];
  }

  console.log(bag);
}

Revstr("masai");

// Find max and min

let diff = (arr) => {
  let mx = -Infinity;
  let mn = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mx) {
      mx = arr[i];
    }

    if (arr[i] < mn) {
      mn = arr[i];
    }
  }
  console.log("Max" + ":" + mx, "Min" + ":" + mn);
  console.log("Diff" + ":" + Math.abs(mx - mn));
};

diff([2, 2, 3, 4, 6]);
