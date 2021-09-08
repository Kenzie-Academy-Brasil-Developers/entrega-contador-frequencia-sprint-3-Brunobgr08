

let letterCounts = {};
let wordsCounts = {};
let typedText;
const msg = document.getElementById('msgToUser');

const button = document.getElementById("countButton");
button.addEventListener("click", mostrarNaTela );

function carregarTexto(){

   typedText = document.getElementById("textInput").value;

   typedText = typedText.toLowerCase();
   typedText = typedText.replace(/[^a-z'\s]+/g, "");
}

function letterCount(){

   letterCounts = {};

   let typedTextNonSpace = typedText.replace(/\s+/g, '');

   if (typedTextNonSpace !== ""){

      for (let i = 0; i < typedTextNonSpace.length; i++) {

         let currentLetter = typedTextNonSpace[i];

         if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
         } else {
            letterCounts[currentLetter]++;
         }
      }
   } else {
      msgToUser();
   }
}

function wordCount(){

   wordsCounts = {};

   let typedWords = typedText.split(" ");

   if (typedWords.length !== 0){

      for (let i = 0; i < typedWords.length; i++){

         let currentWord = typedWords[i];

         if (wordsCounts[currentWord] === undefined){
            wordsCounts[currentWord] = 1;
         } else {
            wordsCounts[currentWord]++;
         }
      }

   } else {
      msgToUser();
   }
}

function limparAll(){

   msg.innerText = '';

   const letras = document.getElementById("lettersDiv");
   while (letras.firstChild){
      letras.removeChild(letras.lastChild);
   }

   const palavras = document.getElementById("wordsDiv");
   while (palavras.firstChild){
      palavras.removeChild(palavras.lastChild);
   }

}

function msgToUser(){
      msg.innerText = "Insira um texto que contenha letras e palavras!";
}



function mostrarNaTela(){

   limparAll();

   carregarTexto();

   letterCount();

   wordCount();

   if (letterCount){
      for (let letter in letterCounts) {
         const span = document.createElement("span");
         span.className = "span__containerContador";
         const textContent = `"${letter}": ${letterCounts[letter]}`;
         span.innerText = textContent;

         const letters = document.getElementById("lettersDiv");
         letters.style.height = ((Object.keys(letterCounts).length * 20) / 2 ) + "px";
         letters.appendChild(span);
      }
   }

   if (Object.keys(wordsCounts).length > 1){
      for ( let word in wordsCounts){
         const spanWord = document.createElement("span");
         spanWord.className = "span__containerContador";
         const textContentWord = `"${word}": ${wordsCounts[word]}`;
         spanWord.innerText = textContentWord;

         const words = document.getElementById("wordsDiv");
         words.style.height = ((Object.keys(wordsCounts).length * 20) / 2 ) + "px";
         words.appendChild(spanWord);
      }
   }
}
