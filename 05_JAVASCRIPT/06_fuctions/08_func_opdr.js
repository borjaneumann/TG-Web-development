
function gradesColor(element,input) {
    if (input>0 && input < 5.5){
        element.style.backgroundColor='red';
        element.style.color='white';
    }else if (input >= 5.5 && input <7.5){
        element.style.backgroundColor='lightgreen';
        element.style.color='white';
    }else if (input > 7.5 && input<=10){
        element.style.backgroundColor='#808000';
        element.style.color='white';
    }else if (input==""){
        element.style.backgroundColor='white';
    }
}

//Jan grades
gradesColor(document.getElementById("janW"), document.getElementById("janW").value);
gradesColor(document.getElementById("janN"), document.getElementById("janN").value);
gradesColor(document.getElementById("janNe"),document.getElementById("janNe").value);
gradesColor(document.getElementById("janE"), document.getElementById("janE").value);

//Kim grades
gradesColor(document.getElementById("kimW"), document.getElementById("kimW").value)
gradesColor(document.getElementById("kimN"), document.getElementById("kimN").value)
gradesColor(document.getElementById("kimNe"), document.getElementById("kimNe").value)
gradesColor(document.getElementById("kimE"), document.getElementById("kimE").value)

//Samantha grades
gradesColor(document.getElementById("samW"), document.getElementById("samW").value)
gradesColor(document.getElementById("samN"), document.getElementById("samN").value)
gradesColor(document.getElementById("samNe"), document.getElementById("samNe").value)
gradesColor(document.getElementById("samE"), document.getElementById("samE").value)

//Joyce grades
gradesColor(document.getElementById("joyW"), document.getElementById("joyW").value)
gradesColor(document.getElementById("joyN"), document.getElementById("joyN").value)
gradesColor(document.getElementById("joyNe"), document.getElementById("joyNe").value)
gradesColor(document.getElementById("joyE"), document.getElementById("joyE").value)

//Gareth grades
gradesColor(document.getElementById("GarW"), document.getElementById("GarW").value);
gradesColor(document.getElementById("GarN"), document.getElementById("GarN").value);
gradesColor(document.getElementById("GarNe"), document.getElementById("GarNe").value);
gradesColor(document.getElementById("GarE"), document.getElementById("GarE").value);


//Jan average wiskunde en Talen
function gemiddeldWJan(){
    let num1 = Number(document.getElementById('janW').value);
    let num2 = Number(document.getElementById('janN').value);
    const averageTa = ((num1)+(num2))/2;    
    document.getElementById('janWisAve').innerHTML=averageTa;
    return averageTa;
}
function gemiddeldVakJan(){
    let num1 = Number(document.getElementById('janNe').value);
    let num2 = Number(document.getElementById('janE').value);
    const averageTa = ((num1)+(num2))/2;    
    document.getElementById('janTaalAve').innerHTML=averageTa;
    return averageTa;
}
//Kim average wiskunde en Talen
function gemiddeldWKim(){
    let num1 = Number(document.getElementById('kimW').value);
    let num2 = Number(document.getElementById('kimN').value);
    const averageTa = ((num1)+(num2))/2;    
    document.getElementById('kimWisAve').innerHTML=averageTa;
    return averageTa;
}
function gemiddeldVakKim(){
    let num1 = Number(document.getElementById('kimNe').value);
    let num2 = Number(document.getElementById('kimE').value);
    const averageTa = ((num1)+(num2))/2;    
    document.getElementById('kimTaalAve').innerHTML=averageTa;
    return averageTa;
}
//Samantha average wiskunde en Talen
function gemiddeldWSam(){
    let num1 = Number(document.getElementById('samW').value);
    let num2 = Number(document.getElementById('samN').value);
    const averageTa = ((num1)+(num2))/2;    
    document.getElementById('SamWisAve').innerHTML=averageTa;
    return averageTa;
}
function gemiddeldVakSam(){
    let num1 = Number(document.getElementById('samNe').value);
    let num2 = Number(document.getElementById('samE').value);
    const averageTa = ((num1)+(num2))/2;    
    document.getElementById('SamTaalAve').innerHTML=averageTa;
    return averageTa;
}
//Joyce average wiskunde en Talen
function gemiddeldWJoy(){
    let num1 = Number(document.getElementById('joyW').value);
    let num2 = Number(document.getElementById('joyN').value);
    const averageTa = ((num1)+(num2))/2;    
    document.getElementById('joyWisAve').innerHTML=averageTa;
    return averageTa;
}
function gemiddeldVakJoy(){
    let num1 = Number(document.getElementById('joyNe').value);
    let num2 = Number(document.getElementById('joyE').value);
    const averageTa = ((num1)+(num2))/2;    
    document.getElementById('joyTaalAve').innerHTML=averageTa;
    return averageTa;
}
//Gareth average wiskunde en Talen
function gemiddeldWGar(){
    let num1 = Number(document.getElementById('GarW').value);
    let num2 = Number(document.getElementById('GarN').value);
    const averageTa = ((num1)+(num2))/2;    
    document.getElementById('garethWisAve').innerHTML=averageTa;
    return averageTa;
}
function gemiddeldVakGar(){
    let num1 = Number(document.getElementById('GarNe').value);
    let num2 = Number(document.getElementById('GarE').value);
    const averageTa = ((num1)+(num2))/2;    
    document.getElementById('garethTaalAve').innerHTML=averageTa;
    return averageTa;
}

//Final grades
function passJan(){
    let num1 = Number(document.getElementById('janWisAve').innerHTML);
    let num2 = Number(document.getElementById('janTaalAve').innerHTML);
    const average = ((num1)+(num2))/2;
    if (average>5.5){
        document.getElementById("janfinal").innerHTML='yes';
        document.getElementById("janfinal").style.backgroundColor='lightgreen';
    }
    else if (average<=5.5){
        document.getElementById("janfinal").innerHTML='no';
        document.getElementById("janfinal").style.backgroundColor='red';
    }
}
function passKim(){
    let num1 = Number(document.getElementById('kimWisAve').innerHTML);
    let num2 = Number(document.getElementById('kimTaalAve').innerHTML);
    const average = ((num1)+(num2))/2;
    if (average>5.5){
        document.getElementById("kimfinal").innerHTML='yes';
        document.getElementById("kimfinal").style.backgroundColor='lightgreen';
    }
    else if (average<=5.5){
        document.getElementById("kimfinal").innerHTML='no';
        document.getElementById("kimfinal").style.backgroundColor='red';
    }
}
function passSam(){
    let num1 = Number(document.getElementById('SamWisAve').innerHTML);
    let num2 = Number(document.getElementById('SamTaalAve').innerHTML);
    const average = ((num1)+(num2))/2;
    if (average>5.5){
        document.getElementById("Samfinal").innerHTML='yes';
        document.getElementById("Samfinal").style.backgroundColor='lightgreen';
    }
    else if (average<=5.5){
        document.getElementById("Samfinal").innerHTML='no';
        document.getElementById("Samfinal").style.backgroundColor='red';
    }
}
function passJoy(){
    let num1 = Number(document.getElementById('joyWisAve').innerHTML);
    let num2 = Number(document.getElementById('joyTaalAve').innerHTML);
    const average = ((num1)+(num2))/2;
    if (average>5.5){
        document.getElementById("joyfinal").innerHTML='yes';
        document.getElementById("joyfinal").style.backgroundColor='lightgreen';
    }
    else if (average<=5.5){
        document.getElementById("joyfinal").innerHTML='no';
        document.getElementById("joyfinal").style.backgroundColor='red';
    }
}
// function gradesColor2() {
//     let input= Number(document.getElementById('janWisAve').value)
//     let element= document.getElementById('janWisAve');
//     if (input>0 && input < 5.5){
//         element.style.backgroundColor='red';
//         element.style.color='white';
//     }else if (input >= 5.5 && input <7.5){
//         element.style.backgroundColor='lightgreen';
//         element.style.color='white';
//     }else if (input > 7.5 && input<=10){
//         element.style.backgroundColor='#808000';
//         element.style.color='white';
//     }else if (input==""){
//         element.style.backgroundColor='white';
//     }
// }

function passGar(){
    let num1 = Number(document.getElementById('garethWisAve').innerHTML);
    let num2 = Number(document.getElementById('garethTaalAve').innerHTML);
    const average = ((num1)+(num2))/2;
    if (average>5.5){
        document.getElementById("garethfinal").innerHTML='yes';
        document.getElementById("garethfinal").style.backgroundColor='lightgreen';
    }
    else if (average<=5.5){
        document.getElementById("garethfinal").innerHTML='no';
        document.getElementById("garethfinal").style.backgroundColor='red';
    }
}
 



























