const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved Promise');
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved Promise');
  }, 7000);
});

//Async and Await is used to handle promises
// Always returns a promise
const asyncFunction = async () => {
  return 'Resolved promise here';
};

const promiseData = asyncFunction();
promiseData.then(res => console.log(res));

function getData() {
  p1.then(res => console.log(res));
}
getData();

//Using async await
const handlePromise = async () => {
  const res = await p1;
  console.log('Promise P1 is resolved');
  console.log(res);

  const res2 = await p2;
  console.log('Promise P2 is resolved');
  console.log(res2);
};

handlePromise();
