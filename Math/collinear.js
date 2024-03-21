//Checking of whether the points are collinear or not
//  If m1 == m2, then the points are collinear, otherwise the points are non-collinear
// Time Complexity -> O(1), Space Complexity -> O(1)

const collinear = (x1, y1, x2, y2, x3, y3) => {
  if ((y2 - y1) * (x3 - x2) === (x2 - x1) * (y3 - y2)) {
    console.log('Points are collinear');
  } else console.log('Points are non-collinear');
};

let x1 = 1,
  y1 = 1,
  x2 = 1,
  y2 = 6,
  x3 = 0,
  y3 = 9;

collinear(x1, y1, x2, y2, x3, y3);
