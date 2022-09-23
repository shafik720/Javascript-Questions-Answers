
const grading = (names, number) => {
    if(number<50 && number>0){
        console.log(names+' has failed !');
    }else if(number<60 && number>=50){
        console.log(names+' has got D');
    }else if(number>=60 && number<70){
        console.log(names+' has got C');
    }else if(number>=70 && number<80){
        console.log(names+' has got B');
    }else if(number>=80 && number<90){
        console.log(names+' has got A');
    }else if(number>=90 && number<100){
        console.log(names+' has got A+');
    }else{
        console.log('Sorry wrong input');
    }
}
grading('Abir',95);
grading('Shafik',85);
grading('Masud',75);
grading('Sunny',65);
grading('Hasan',90);
grading('Munna',45);