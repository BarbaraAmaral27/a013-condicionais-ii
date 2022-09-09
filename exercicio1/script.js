//if aninhado

const num = Number(prompt("Digite um número:"));

if (num % 2 === 0){
    if (num % 3 === 0){
        console.log(`O numero é divisivel por 2 e por 3`);}
    else{
         console.log(`O número é divisivel por 2`);
    }
}

else{
    if(num % 3 === 0){
        console.log("o número é divisivel por 3")
    } 
    else{
        console.log("O número não é divisivel por nenhum dos dois")
    }
}

//operador lógico

if (num % 2 === 0 || num % 3 === 0) {
    console.log(`O número digitado é divisivel por 2 ou por 3`);
}else{
    console.log(`O número digitado não é divisilvel por nenhum dos dois`);
}

   

