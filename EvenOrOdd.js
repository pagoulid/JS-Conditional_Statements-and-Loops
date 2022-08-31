function evenOrOdd(){
    let NumVal=document.getElementById('Num').value;
    switchCase(NumVal);
}

function switchCase(num){
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

    appendResults2(result)

    
}

function appendResults2(result){
    let pNode1 = document.getElementById("even_or_odd_number_result");
    pNode1.textContent=result;

}