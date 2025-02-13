import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.getElementById("generateCard").addEventListener("click", function() {
  generateCard(); // Call the function to generate a new card
});

  function generateCard (){
  let pickNumber = Math.floor(Math.random()* 4);
  let pickSymbols = Math.floor(Math.random()* 13);
  let suitsNumber = ["spade", "club", "heart", "diamond"];
  let cardSymbols = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  
  let suit = suitsNumber[pickNumber];
  let symbol =cardSymbols[pickSymbols];
  
  let suitsSymbols = {spade:"♠", club:"♣", heart:"♥", diamond:"♦"};

  let takeSuits = document.querySelector(".icon");
  let takeSymbols = document.querySelector(".number");
  let takeSuits2 = document.querySelector(".icon2");

  if (suit === "heart" || suit === "diamond") {
    takeSuits.style.color = "red";
    takeSymbols.style.color = "red";
    takeSuits2.style.color = "red";
} 
else {
    takeSuits.style.color = "black";
    takeSymbols.style.color = "black";
    takeSuits2.style.color = "black";
}

  takeSuits.innerText = suitsSymbols[suit];
  takeSymbols.innerText = symbol;
  takeSuits2.innerText =suitsSymbols[suit];

  }

  window.onload = generateCard();
