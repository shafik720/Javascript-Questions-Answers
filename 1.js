
const calculation = (number1, number2, mark) => {
    let result;
    if(mark==='+'){
        result = number1 + number2 ;
        return result;
    }else if(mark==='-'){
        result = number1 - number2 ;
        return result;
    }else if(mark==='*'){
        result = number1 * number2 ;
        return result;
    }else if(mark==='/'){
        result = number1 / number2 ;
        return result.toFixed(2);
    }
}

console.log(calculation(25,30,'+'));
console.log(calculation(25,30,'-'));
console.log(calculation(25,30,'*'));
console.log(calculation(25,30,'/'));