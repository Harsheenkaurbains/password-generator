// const inputslider=document.querySelector("[data-lengthSlider]");
// const lengthdisplay=document.querySelector("[data-lengthNumber]");
// const passwordisplay=document.querySelector("[data-passwordDisplay]");
// const copybtn=document.querySelector("[data-copy]");
// const copymsg=document.querySelector("[data-copyMsg]");
// const uppercasecheck=document.querySelector("#data-uppercase");
// const lowercasecheck=document.querySelector("#lowercase");
// const numberscheck=document.querySelector("#numbers");
// const symbolscheck=document.querySelector("#symbols");
// const indicator=document.querySelector("[data-indicator]"); 
// const generatebtn=document.querySelector(".generatebutton");
// const allcheckbox=document.querySelectorAll("input[type=checkbox]");
// const symbol="!@#$%^&*()_-+{}|:<\>?,.[]";

// let password= "";
// let passwordlength=15;
// let checkcnt=0;
// handleslider();
// // sset strength color of the circle as grey

// // set password length acc to the slider as it moves
// function handleslider(){
// inputslider.value=passwordlength;
// lengthdisplay.innerText=passwordlength;

// }


// function setindicator(color){
// indicator.style.backgroundColor=color;

// }


// function getrndinteger(min,max){

// return Math.floor(Math.random() * (max-min)) + min;

// }
// function getrandomnumber(){
// return     getrndinteger(0,9);
// }
// function generatelowercase(){
//     return String.fromCharCode(getrndinteger(97,123));
// }
// function generateuppercase(){
//     return String.fromCharCode(getrndinteger(65,91));
// }

// function generatesymbol(){
//     const randsymb=getrndinteger(0,symbol.length);
// return symbol.charAt(randsymb);
// }

// function calstrength(){
// const hasupper=false;
// const haslower=false;
// const hasnum=false;
// const hassymbol=false;
// if(uppercasecheck.checked) hasupper=true;
// if(lowercasecheck.checked) hasupper=true;
// if(numberscheck.checked) hasnum=true;
// if(symbolscheck.checked) hassymbol=true;

// if((hasupper && haslower) && ( hasnum && hassymbol) && passwordlength>=8){
// setindicator("#0f0");
// }
// else if((haslower ||  hasupper) && (hasnum || hassymbol) && ( passwordlength>=6)){
//     setindicator("#ff0");
// }
// else{
// setindicator("#f00");
// }
// }


// async function copycontent(){
//     try{
// await navigator.clipboard.writeText(passwordisplay.value);


//     }
//     catch(e){
//         copymsg.innerText="failed";
//     }
//     copymsg.innerText="copied";
// // to make copy span visible 
// copymsg.classList.add("active");

// // then to remve the text after some time 
// setTimeout(() => {
//     copymsg.classList.remove("active");
// }, 2000);
// }


// // adding event listener to the slider 
// inputslider.addEventListener(('input'),(e) =>{
// passwordlength=e.target.value;
// handleslider();
// })

// // if there is .no  password written on the column then it cant copy anything 
// copybtn.addEventListener(('click'),() => {
//     if(passwordisplay.value){
//         copycontent();
//     }
// })




// function handlecheckboxchange(){
// checkcnt=0;
// allcheckbox.forEach((checkbox) => {
//     if(checkbox.checked){
//         checkcnt++;
//     }
// })

// // special case 
// // if the length of the password is less than the no of checkbox checked then inc the password length equal to the checkbox checked 

// if(passwordlength<=checkcnt){
//     passwordlength=checkcnt;
//     handleslider();
// }
// }
// allcheckbox.forEach((checkbox) => {
//     (('change'),handlecheckboxchange());
// })




// // craeting the generate passowrd button 
// generatebtn.addEventListener('click',() =>{

//     // if none of the checkbo are selected
//     if(checkcnt==0){
//         return;
//     }

//     if(passwordlength< checkcnt){
//         passwordlength=checkcnt;
//         handleslider();
//     }

//     // lets start finding the new password 
// console.log("start");
//     // remove old password
//     password="";

//     // lets put the stuff mentioned by checckboxes

//     // if(uppercasecheck.checked){
//     //     password+=generateuppercase();
//     // }
//     // if(lowercasecheck.checked){
//     //     password+=generatelowercase();
//     // }
//     // if(numberscheck.checked){
//     //     password+=getrndinteger();
//     // }
//     // if(symbolscheck.checked){
//     //     password+=generatesymbol();
//     // }


//     let functionarray={};
// if(uppercasecheck.checked){
//     functionarray.push(generateuppercase());
// }
// if(lowercasecheck.checked){
//     functionarray.push(generatelowercase());
// }
// if(numberscheck.checked){
//     functionarray.push(getrndinteger());
// }
// if(symbolscheck.checked){
//     functionarray.push(generatesymbol());
// }

// // compalsoryaddition

// for(let i=0;i<functionarray.length;i++){
// password+=functionarray[i]();
// }

// console.log("compolsary addition done ");
// // remaining additon 

// for(let i=0;i<passwordlength-functionarray.length;i++){
//     let randomindex=getrndinteger(0, functionarray.length);
//     password+= functionarray[randomindex]();
// }


// // shuffle the password
// password= shufflepassword(Array.from(password));

// // show in UI
// passwordisplay.value=password;

// // calculate the strength  of the passworfd
// password.calstrength();

// })

// function shufflepassword(array){
//     // Fisher Yates Method 
//     for(let i=array.length-1;i>0;i--){
//         const j=Math.floor(Math.random()*(i+1));
//         const temp=array[i];
//         array[i]=array[j];
//         array[j]=temp;
//     }
//     let str="";
//     array.forEach((ele) => (str += ele));
// return str;

// }


const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


//initially
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
//ste strength circle color to grey
setIndicator("#ccc");

//set passwordLength
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    // or kuch bhi karna chahiye ? - HW
    const min= inputSlider.min;
    const max=inputSlider.max;
    inputSlider.style.backgroundSize=((passwordLength-min)*100/(max-min)+"% 100%")
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    //shadow - HW
    indicator.style.boxShadow=`0px 0px 12px 1px ${color}`; 
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0,9);
}

function generateLowerCase() {  
       return String.fromCharCode(getRndInteger(97,123))
}

function generateUpperCase() {  
    return String.fromCharCode(getRndInteger(65,91))
}

function generateSymbol() {
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e) {
        copyMsg.innerText = "Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);

}

function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });

    //special condition
    if(passwordLength < checkCount ) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})


inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})


copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value)
        copyContent();
})

generateBtn.addEventListener('click', () => {
    //none of the checkbox are selected

    if(checkCount == 0) 
        return;

    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the jouney to find new password
    console.log("Starting the Journey");
    //remove old password
    password = "";

    //let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked) {
    //     password += generateUpperCase();
    // }

    // if(lowercaseCheck.checked) {
    //     password += generateLowerCase();
    // }

    // if(numbersCheck.checked) {
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);

    //compulsory addition
    for(let i=0; i<funcArr.length; i++) {
        password += funcArr[i]();
    }
    console.log("COmpulsory adddition done");

    //remaining adddition
    for(let i=0; i<passwordLength-funcArr.length; i++) {
        let randIndex = getRndInteger(0 , funcArr.length);
        console.log("randIndex" + randIndex);
        password += funcArr[randIndex]();
    }
    console.log("Remaining adddition done");
    //shuffle the password
    password = shufflePassword(Array.from(password));
    console.log("Shuffling done");
    //show in UI
    passwordDisplay.value = password;
    console.log("UI adddition done");
    //calculate strength
    calcStrength();
});