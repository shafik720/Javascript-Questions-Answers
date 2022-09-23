
const fact =(number) => {
    let result = 1 ;
    // let finalResult = 1;
    for(let i=number;i>=1; i--){
        result = result * i;
        // finalResult = finalResult * result;
        // console.log(result);
        if(i==1){
            console.log(result);
        }
        
    }
}
// console.log(fact(10));
// fact(7);

const fact2 = (number) => {
    let result = 1;
    for(let i=1; i<=number;i++){
        result = result * i;
        if(i===number){
            return result;
        }
    }
}
console.log(fact2(5));