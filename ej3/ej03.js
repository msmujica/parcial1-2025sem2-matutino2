/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/
const segA = document.getElementById("seg-a");
const segB = document.getElementById("seg-b");
const segC = document.getElementById("seg-c");
const segD = document.getElementById("seg-d");
const segE = document.getElementById("seg-e");
const segF = document.getElementById("seg-f");
const segG = document.getElementById("seg-g");

function showRandomDigit() {
  let number = Math.floor(Math.random() * (10));
  segA.style.display = "";
  segB.style.display = "";
  segC.style.display = "";
  segD.style.display = "";
  segE.style.display = "";
  segF.style.display = "";
  segG.style.display = "";


  switch (number) {
    case 9:
      segE.style.display = "none";
      segD.style.display = "none";
      break;
    
    case 7:
      segD.style.display = "none";
      segE.style.display = "none";
      segF.style.display = "none";
      segG.style.display = "none";
      break;

    case 6:
      segB.style.display = "none";
      break;

    case 5:
      segB.style.display = "none";
      segE.style.display = "none";
      break;
      
    case 4:
      segA.style.display = "none";
      segE.style.display = "none";
      segD.style.display = "none";
      break;
    
    case 3:
      segE.style.display = "none";
      segF.style.display = "none";
      break;
    
    case 2:
      segF.style.display = "none";
      segC.style.display = "none";
      break;

    case 1:
      segA.style.display = "none";
      segD.style.display = "none";
      segE.style.display = "none";
      segF.style.display = "none";
      segG.style.display = "none";
      break;
      
    case 0:
      segG.style.display = "none";
  }
}
