const add= function(a,b){
return a+b;
};

const multiplier ={
    numbers: [1,2,3,4,5,6,7,8,9],
    multiplyBy:2,

    multiply(){
        return this.numbers.map((number )=> number *this.multiplyBy);
    }

}
console.log(multiplier.multiply());