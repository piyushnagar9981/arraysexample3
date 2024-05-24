let myArray = [10, 20, 30, 40, 50];

document.getElementById('arrayLengthBtn').addEventListener('click', arrayLength);
document.getElementById('arrayToStringBtn').addEventListener('click', arrayToString);
document.getElementById('arrayAtBtn').addEventListener('click', arrayAt);
document.getElementById('arrayJoinBtn').addEventListener('click', arrayJoin);
document.getElementById('arrayPopBtn').addEventListener('click', arrayPop);
document.getElementById('arrayPushBtn').addEventListener('click', arrayPush);

function arrayLength() {
  document.getElementById('result').innerHTML = `Array Length: ${myArray.length}`;
}

function arrayToString() {
  document.getElementById('result').innerHTML = `Array as String: ${myArray.toString()}`;
}

function arrayAt() {
  document.getElementById('result').innerHTML = `Element at index 2: ${myArray.at(2)}`;
}

function arrayJoin() {
  document.getElementById('result').innerHTML = `Array joined with '-': ${myArray.join('-')}`;
}

function arrayPop() {
  let poppedElement = myArray.pop();
  document.getElementById('result').innerHTML = `Popped Element: ${poppedElement}, New Array: ${myArray.toString()}`;
}

function arrayPush() {
  myArray.push(60);
  document.getElementById('result').innerHTML = `Element 60 pushed, New Array: ${myArray.toString()}`;
}
