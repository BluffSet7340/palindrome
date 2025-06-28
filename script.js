const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");


function checkInput(){
    // process the input text, by removing all non alphanumeric characters
    let unprocessed_input = inputText.value;
    
    // use regular expression to remove the un-needed characters
    const input = unprocessed_input.replace(/[^0-9a-zA-Z]/g, "");


    if(!input){
        alert("Please input a value");
    }
    else if(input.length === 1){
        resultText.innerHTML= `${input} is a palindrome.`;
    }
    else if(input.length >= 1){
        let str1 = input.toLowerCase().split("");
        console.log(str1);
        let str2 = [...str1].reverse(); //using the spread operator to make a copy
        console.log(str2)

        for(let i=0; i < input.length; i++){
            if(str1[i]!==str2[i])
            {
                return false;
                // resultText.innerHTML = `${input} is not a palidrome.`;
            }
        };
        return true;
    }
}

function printOutput(){
    const input = inputText.value;
    const flag = checkInput();
    console.log(flag);
    inputText.value ="";

    if(flag === true ){
        resultText.innerHTML = `${input} is a palindrome.`;
    } else if(flag === false){
        resultText.innerHTML = `${input} is not a palindrome.`;
    }
}
