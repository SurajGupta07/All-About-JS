function logMessage(a) {
  console.log(a);
}

function setupFunction() {
  var functions = [
    { functionName: 'a', message: 'first message' },
    { functionName: 'b', message: 'second message' },
    { functionName: 'c', message: 'third message' },
  ];
  for (var i = 0; i < functions.length; i++) {
    var item = functions[i];

    globalThis[item.functionName] = function () {
      logMessage(item.message);
    };
  }
}

setupFunction();
a();
b();
c();
