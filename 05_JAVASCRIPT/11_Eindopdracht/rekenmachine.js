//when I click on a numerical button, the value has to appear on the screen.
//values should be added as strings 2, 26, 26 when the numerical buttons are clicked
//collect the values from the buttons and store it in a const
//Loop the values to simplified previous step.
//add a behaviour to the buttons
//make a function that evaluates (probably eval()) the operation that is in the string of the eval function.
//make a function so = shows eval()
//make a function to change the sign of the value on the display

//make a function to round the result to a maximum of 2 decimals
//make a function so 5+ is equal to 5+5 and the same for * and /
let input= '';
let display=document.getElementById('result')
let result=document.getElementById('equal')
let allClear = document.getElementById('ac')
let sign = document.getElementById('sign');
function enterInput(e){
  input+=e.target.innerHTML;
  display.innerHTML=input;
  allClear.innerHTML='C';
}






let btnArray= document.querySelectorAll('button')

for (i=0;i<btnArray.length;i++){
  if (btnArray[i].innerHTML!='='&& btnArray[i].innerHTML!='AC' && btnArray[i].innerHTML!='+/-'){
    btnArray[i].addEventListener('click',enterInput);
  }
}





result.addEventListener('click', showResult)
allClear.addEventListener('click',reset)
allClear.addEventListener('click',reset2)
sign.addEventListener('click', signHandler)


function signHandler(){
  let negative='-'
  display.innerHTML='';
  if (input!==''){
    display.innerHTML= eval(input);}
    if(parseFloat(display.innerHTML)<0){
      display.innerHTML=display.innerHTML.substring(1,display.innerHTML.length);
      input=display.innerHTML;
    }else if(parseFloat(display.innerHTML)>0){
      display.innerHTML=negative + display.innerHTML;
      input=display.innerHTML; 
    }
}

//make a function so AC goes back to 0 and turns into C when a value is entered.

function showResult(){
  display.innerHTML='';
  if (input!==''){
    display.innerHTML=eval(input);
  }
  else if(input.charAt(input.length -1)='+'){
    console.log(input.charAt(input.length -1));
    display.innerHTML= eval((input.slice(0,input.length -1))+(input.slice(0,input.length -1)));
  }
}


// function sameNumber(){
//   display.innerHTML=input;
//   if(display.slice(-1)='+'){
//     eval(display-display.length(-1));
//   }

// }


function reset(){
  input=='';
  display.innerHTML='0';
}
function reset2(){
  if (allClear.innerHTML== 'C'){
    allClear.innerHTML='AC';
    display.innerHTML='0'
    input='';
  }
} 


  // (Math.round(num + "e+2")  + "e-2")
