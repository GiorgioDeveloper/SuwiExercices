let word = "Roma amor";
let newWord = word.replace(/\W+/g, "").toLowerCase();

let emptyString  = [];

for(let j = newWord.length -1; j >= 0; j-- ){
  emptyString.push(newWord[j]);
}

let emptyStringConc = emptyString.join("");


if(emptyStringConc === newWord) {
  console.log(word + " palindrom");
} else { 
  console.log(word + ": " + "NOT palindrom");
}

///////////////////////////////////////////////////////


let word = "suburra";
let newWord = word.replace(/\W+/g, "");

let palindrom = [];

for ( let i =newWord.length-1; i>=0; i--){
  palindrom.push(newWord[i]);
}

let palindromConc = palindrom.join("");

if( palindromConc === newWord){
  console.log("babbo");
}else{
  console.log("fagiano");
}




























