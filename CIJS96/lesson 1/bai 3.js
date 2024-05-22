let addPrefix = (arr,prefix) =>{
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let word = prefix + " : " + arr[i];
        result.push(word);
    }
    return result;
}
console.log(addPrefix(["one", "two", "three"], "number"))