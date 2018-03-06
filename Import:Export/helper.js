// this is outside of module.exports 

console.log("I will appear only once");



module.exports = function (anyArray) {
    console.log("number of elements is the array = " + anyArray.length);
    let sum = 0;
    for (let i = 0; i < anyArray.length; i++) {
        sum += anyArray[i];
    }
    return sum;
}