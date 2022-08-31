import {appendResults,switchCase} from 'https://pagoulid.github.io/JS-Conditional_Statements-and-Loops/scripts/modules/modules.js';
document.getElementById('EOButton').addEventListener('click',evenOrOdd);
function evenOrOdd(){
    let NumVal=document.getElementById('Num').value;
    let condition = NumVal%2==0?1:0;
    let result=switchCase(condition,`${NumVal} is odd number.`,`${NumVal} is even number.`);
    appendResults(result,"even_or_odd_number_result");
}



