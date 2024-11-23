function displayContent(content){
    result.value+=content
}
//Clear data
function clearCalcScreen(){
    result.value = ""
}
//backspace
function removeCalc(){
    result.value = result.value.slice(0,-1)
}
//Evaluation
function calcOut(){
    result.value = eval(result.value)
}