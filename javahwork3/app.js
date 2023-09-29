let arrNumber = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50];
let newArray = [];
for (let num of arrNumber) {
    let strNum = num.toString();
    if (strNum.startsWith('2') || strNum.startsWith('5')) {
        newArray.push(num);
    }
}
console.log(newArray);
