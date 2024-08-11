function oddEven(arr){
    const sum = arr.reduce((a, b) => a + b, 0);
    if(sum >0){
        return "Positive";
    }else if (sum < 0){
        return "negative";
    }else{
        return "zero";
    }
}
console.log(oddEven([0, 1, 4]));
console.log(oddEven([0, -1, -5]));
console.log(oddEven([0]));