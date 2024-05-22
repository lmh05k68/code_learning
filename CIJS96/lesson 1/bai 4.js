let double = (arr) =>{
    let result = [];
    let arr = [1,2,3,4];
    for(let i = 0; i < arr.length; i++){
        let newElement = arr[i]*2;
        result.push(newElement);
    }
    return result;
}
console.log(double([1,2,3,4]))