// Fahrenheit to Celsius Converter
  function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = (celsius*9/5)+32;
    return fahrenheit;
  }

  convertToF(30);

// String reverse
  function reverseString(str) {
    // Zerlegt string in array
    str = str.split("");
    // Reverse
    str = str.reverse("");
    // Aus Array String
    str = str.join("");
    return str;
  }

  reverseString("hello");

// Factorialize
  function factorialize(num) {
    // i wird auf 1 gesetzt, damit bei Argument 0, i(1) returned wird
    for (var i=1; num>0; num--) {
      i=i*num;
    }
    return i;
  }

  factorialize(5);

// Find the longest word in a sentence

function findLongestWordLength(str) {
  // Trenne den String an den Leerzeichen und packe in Array
  worte = str.split(" ");
  maxLength=0;
  // Methode um durch die Wörter zu loopen. Für jedes Wort wird die Länge ausgegeben und in die Variable maxLength gepackt. 
  for (i=0; i<worte.length; i++) {
    // Wenn die Länge eines einzelnen Wortes größer als die bisherige maxLength ist, überschreibe Variable maxLength mit aktueller Länge
    if (worte[i].length > maxLength) {
      maxLength = worte[i].length;
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown foxdsdss jumped over the lazy dog");


// Return Largest Numbers in Arrays
function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


function largestOfFour(arr) {
  let results = [];
  // nested for loop with if statement.
  // Solange gilt, dass i kleiner als die Anzahl der Subarrays ist,
  for (let i = 0; i < arr.length; i++) {
    // cycle durch die subarrays und setze die erste zahl? auf maxNum
    let largestNumber = arr[i][0];
    // Solange gilt, dass die zweite Zahl im Subarray kleiner als die Arraylänge
    for (let j = 1; j < arr[i].length; j++) {
      // Wählt die größte Zahl im Subarray aus: Wenn arr[i][j], also die j-te Zahl im i-ten Subarray größer als die eben gesetzte largestNumber ist, überschreibe sie
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}