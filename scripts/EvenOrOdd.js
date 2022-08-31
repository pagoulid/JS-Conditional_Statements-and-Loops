import {appendResults,switchCase} from 'https://pagoulid.github.io/JS-Conditional_Statements-and-Loops/scripts/modules/modules.js';
document.getElementById('EOButton').addEventListener('click',evenOrOdd);
function evenOrOdd(){
    let NumVal=document.getElementById('Num').value;
    let condition = NumVal%2==0?1:0;
    let result=switchCase(condition,`${NumVal} is odd number.`,`${NumVal} is even number.`);
    appendResults(result,"even_or_odd_number_result");

}

/*function switchCase(num){
    let condition = num%2==0?1:0;
    let result;

    switch(condition){
        case 0:
            result=`${num} is odd number.`;
            break;
        case 1:
            result=`${num} is even number.`;
            break;
    }
    appendResults(result,"even_or_odd_number_result");
    

    
}*/

