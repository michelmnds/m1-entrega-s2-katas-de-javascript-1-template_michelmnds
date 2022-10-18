//EX 1
function cubicSquare(){
    let retorno = "";

    for (let i = 1; i <= 10; i++){
        retorno += i*i*i + " ";
    }
    console.log(retorno);
}
cubicSquare();



//EX 2
function divisibleFor(limitador, divisor){
    let divisores = "";
    
    for (i = divisor; i <= limitador; i += divisor){
        if (limitador%divisor == 0){
            divisores += i + ' ';
        }
        else{
            console.log("A divisão tem que ser inteira!");
        }
    }
    return divisores
}
let retorno = divisibleFor(100, 10);
console.log(retorno);


// //EX 3
function stringElement(string, number){
    for (let i = 0; i < string.length; i++){
        return string[number].toUpperCase();
    }
}
let retorno1 = stringElement("Michel", 2);
console.log(retorno1);


//EX 4
function stringSlicer(string, number){
    for (let i = 0; i < string.length; i++){
        return string.slice(0, number);
    }
}
let retorno2 = stringSlicer("ALGORITIMO", 4);
console.log(retorno2);



//EX 5
function stringRest(string, number){
    for (let i = 0; i < string.length; i++){
        return string.slice(number);
    }
}
let retorno3 = stringRest("ALGORITMOS", 2);
console.log(retorno3);


//EX 6
function countVowels(string){
    for (let i = 0; i < string.length; i++){
        return string.match(/[aeiou]/gi).length;
    }
}
let retorno4 = countVowels("abacaxi");
console.log(retorno4);


//EX 7
function countTextOccurrences(stringTexto, stringLetra){
    let contador = 0;
    
    for (let i = 0; i < stringTexto.length; i++){
        if (stringTexto[i] === stringLetra.toUpperCase() || stringTexto[i] === stringLetra.toLowerCase()){
            contador += 1;
        }
    }
    return contador;
}
let retorno5 = countTextOccurrences("Abacaxi", "a");
console.log(retorno5);


//EX 8
function textBackwards(string){
    let novaString = "";
    
    for (let i = string.length - 1; i > -1; i--){
        novaString += string[i];
    }
    return novaString;
}
let retorno6 = textBackwards("abacaxi");
console.log(retorno6);


//EX 9
function removeBlank(string){
    for (let i = 0; i < string.length; i++){
        return string.replace(/ /gi, '');
    }
}
let retorno7 = removeBlank("Não ficará   espaços em branco");
console.log(retorno7);


//EX 10
function encryptText(string){
    let fraseCriptografada = "";
    
    for (let i = 0; i < string.length; i++){
        if (string[i] === 'a' || string[i] === 'A'){
            fraseCriptografada += 'x'
        }
        else if (string[i] === 'e'){
            fraseCriptografada += 'y'
        }
        else if (string[i] === 'i'){
            fraseCriptografada += 'w'
        }
        else if (string[i] === 'o'){
            fraseCriptografada += 'k'
        }
        else if (string[i] === 'u'){
            fraseCriptografada += 'z'
        }
        else if (string[i] === 'U'){
            fraseCriptografada += 'Z'
        }
        else{
            fraseCriptografada += string[i];
        }
    }   
    return fraseCriptografada;
}
let retorno8 = encryptText("Uma frase ultra secreta que precisa ser criptografada");
console.log(retorno8);