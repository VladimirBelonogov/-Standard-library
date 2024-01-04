Array.prototype.push2 = function (...element) {
    let temp = [...element];
    let a = this.length;

    for (let i = 0; i < temp.length; i++){
        this[a + i] = temp[i]
    }

    return this.length
}

// let arr = [1,5,10,15,20];
// let arr2 = [1,5,10,15,20];
// console.log(arr.push('123','345'));
// console.log(arr2.push2('123','345',6,7));
// console.log(arr);
// console.log(arr2);
