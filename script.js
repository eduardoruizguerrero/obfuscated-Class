//  Random length of the word
function MinAndMax (min, max){
    const NMin = Math.ceil(min);
    const NMax = Math.floor(max)
    return Math.floor(Math.random() * (NMax - NMin + 1) + NMin);
}


//  Random letter of the dictionary
function GetRandomChar(){
    const abc = "bdgjlnprtwyaiueocfhkmñqsvxz";
    return abc.charAt(Math.floor(Math.random() * abc.length));
}


//  Random number
function GetRandomNumber(){
    return Math.floor(Math.random () * 9) + 1;
}

let p = document.getElementById("idp");


/*
*
*   Generate the obfuscated class.
*       Algoritm.
*
*/
function GenerateWord(){
    let word = "";
    const NLimit = MinAndMax(4, 6);
    for (let i = 0; i < NLimit; i++){
        if (i < NLimit - 1){
            word += GetRandomChar();
        } else {
            word += Math.random() > 0.7 ? GetRandomChar() : GetRandomNumber();
        }
    }

    return word; 
}

//  The code don't use '\n', only spaces
function PrintWords(amount){
    let result = "";

    for (let i = 0; i < amount; i++){
        result += GenerateWord() + " ";
    }

    return result.trim();
}


const numberinput = document.getElementById("numberinput");
//  Blacklist of the chars
const InvalidInput = [",", ".", "-", "+", "e"];
numberinput.addEventListener("keydown", function(e){
    if (InvalidInput.includes(e.key)){
        e.preventDefault();
    }
});
numberinput.addEventListener("input", () => {
    send.removeAttribute("disabled");
});


//  Buttons and states
const send = document.getElementById("send");
send.addEventListener("click", () => {
    p.textContent = PrintWords(parseInt(numberinput.value));
    copy.removeAttribute("disabled");
    reset.removeAttribute("disabled");
});

const copy = document.getElementById("copy");
copy.addEventListener("click", () => {
    let p = document.getElementById("idp").innerHTML;
    navigator.clipboard.writeText(p);
})

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    p.textContent = "";
    numberinput.value = "";
    send.setAttribute("disabled", "true");
    copy.setAttribute("disabled", "true");
    reset.setAttribute("disabled", "true");
});

send.setAttribute("disabled", "true");
copy.setAttribute("disabled", "true");
reset.setAttribute("disabled", "true");