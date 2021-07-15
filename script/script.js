

let letterCounts = {};
let wordsCounts = {};
let typedText;

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
   
   for (let i = 0; i < typedTextNonSpace.length; i++) {

      let currentLetter = typedTextNonSpace[i];
      
      if (letterCounts[currentLetter] === undefined) {
         letterCounts[currentLetter] = 1; 
      } else { 
         letterCounts[currentLetter]++; 
      }
   }
}

function wordCount(){

   wordsCounts = {};

   let typedWords = typedText.split(" ");

   for (let i = 0; i < typedWords.length; i++){

      let currentWord = typedWords[i];

      if (wordsCounts[currentWord] === undefined){
         wordsCounts[currentWord] = 1;
      } else {
         wordsCounts[currentWord]++;
      }
   }
}

function limparAll(){

   const letras = document.getElementById("lettersDiv");
   while (letras.firstChild){
      letras.removeChild(letras.lastChild);
   }

   const palavras = document.getElementById("wordsDiv");
   while (palavras.firstChild){
      palavras.removeChild(palavras.lastChild);
   }

}



function mostrarNaTela(){

   limparAll();
   
   carregarTexto();

   letterCount();
   wordCount();

   for (let letter in letterCounts) { 
      const span = document.createElement("span");
      span.className = "span__containerContador"; 
      const textContent = `"${letter}": ${letterCounts[letter]}`;
      span.innerText = textContent; 

      const letters = document.getElementById("lettersDiv");
      letters.style.height = ((Object.keys(letterCounts).length * 20) / 2 ) + "px";
      letters.appendChild(span); 
   }

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
