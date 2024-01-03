const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P1 rejected"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 Success"), 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => console.log("Promise.all =>", res))
  .catch((err) => console.error(err));

Promise.allSettled([p1, p2, p3])
  .then((res) => console.log("Promise.allSettled =>", res))
  .catch((err) => console.error(err));

Promise.race([p1, p2, p3])
  .then((res) => console.log("Promise.race =>", res))
  .catch((err) => console.error(err));
