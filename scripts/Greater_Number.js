import {appendResults,switchCase} from 'https://pagoulid.github.io/JS-Conditional_Statements-and-Loops/scripts/modules/modules.js';
document.getElementById('GButton').addEventListener('click',greaterNum);
function greaterNum(){
    let fNumVal=document.getElementById('firstNum').value;
    let sNumVal=document.getElementById('secNum').value;
    let condition = fNumVal>sNumVal?1:0;
    let result=switchCase(condition,`${sNumVal} is greater than ${fNumVal}`,`${fNumVal} is greater than ${sNumVal}`);
    appendResults(result,"greater_number_result");
}



