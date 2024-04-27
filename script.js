let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
console.log(arr);

let value = arr.forEach((buttons) =>{
    buttons.addEventListener("click", (element) =>{
        if(element.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
       }
       else if(element.target.innerHTML == 'Ac'){
        string = "";
        input.value = string;
       }
       else if(element.target.innerHTML == "del"){
        string = string.substring(0,string.length-1);
        input.value = string;
       }
       else{
        string += element.target.innerHTML;
        input.value = string;
       }
    })
})

