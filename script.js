const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");

function checkInput(){
    const input = inputText.value;
    if(!input){
        alert("Please input a value");
    }
    // alert(input);
    // console.log(input);
}