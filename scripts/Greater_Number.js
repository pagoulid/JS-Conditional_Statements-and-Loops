import {appendResults} from 'https://pagoulid.github.io/JS-Conditional_Statements-and-Loops/scripts/modules/modules.js';
document.getElementById('GButton').addEventListener('click',greaterNum);
function greaterNum(){
    let fNumVal=document.getElementById('firstNum').value;
    let sNumVal=document.getElementById('secNum').value;

    compare(fNumVal,sNumVal);
    


}

function compare(num1,num2){
    let condition =num1>num2?1:0;
    let compareResult;

    switch(condition){
        case 0:
            compareResult=`${num2} is greater than ${num1}`;
            break;
        case 1:
            compareResult=`${num1} is greater than ${num2}`;
            break;

        
    }
    appendResults(result,"greater_number_result");
    /*appendResults1(compareResult);*/
}

function appendResults1(result){
    let pNode = document.getElementById("greater_number_result");
    pNode.textContent=result;

}
