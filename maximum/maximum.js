const inputArray = [15,10,654,100,150,2,-567,-987,0,-600];
let maxElement = inputArray[0];
let minElement = inputArray[0];
for (let i = 0; i <= inputArray.length; i = i + 1) {
    if (inputArray[i] > maxElement){
        maxElement=inputArray[i];
    }
    if (inputArray[i] < minElement){
        minElement=inputArray[i];
    }
}

console.log("Input array",inputArray);
console.log("maximum element",maxElement);
console.log("minimum element",minElement);