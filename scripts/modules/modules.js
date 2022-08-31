export function appendResults(result,id){
    let pNode = document.getElementById(id);
    pNode.textContent=result;
}
export function switchCase(condition,case1,case2){
    switch(condition){
        case 0:
            return case1;
        case 1:
            return case2;
    }
}