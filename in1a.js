var person="";
// Uppgift 1a1:
function buttonAction1() {
alert("välkomna \n\n" +  (new Date));
} // Slut!

// Uppgift 1a2 här:
function buttonAction2(){
  person = prompt("Name please", "");
  var upper = person.toUpperCase();
  alert (upper);
  }// Slut!

// Uppgift 1a3 här:
function buttonAction3() {
  document.getElementById("result3").innerHTML=person; 
  //Kode här!
} // Slut!

// Uppgift 1a4 här:
function buttonAction4()
{
  let start = new Date();
   let time = function () {
    let end = new Date;
    let result = end - start;
    alert("Det tog dig " +  result /1000  + " sekunder!");
    document.getElementsByName("button4")[0].onclick = buttonAction4;
  } 
  document.getElementsByName("button4")[0].onclick = time;
  }// Slut!

// Uppgift 1a5 här:
function buttonAction5() {
  let input1 = document.getElementById('number1').value;
  let input2 = document.getElementById('number2').value;
  let displayOutput = document.getElementById('result5');

  if ( input1 >= 0  && input1 <=1000 && input2 >= 0  && input2 <= 1000 ){
    const product = input1 * input2;
    displayOutput.innerHTML = product;
  } else {
    alert ("endast siffror tack!!")
  };
}// Slut!

// Uppgift 1a6 här:
function buttonAction6()
 {
 
  var text = document.getElementById("textInput").value;
  var numWords = 0;

  for (var i = 0; i < text.length; i++) {
      var currentCharacter = text[i];

      if (currentCharacter == " ") {
          numWords += 1;
      }
  }

  numWords += 1;

 document.getElementById("wordCount").innerHTML = numWords;
}

/// Uppgift 1a7 här:
function buttonAction7(){
  var hej=prompt();
  var hej1="";
  for (i=0;i<10;i++){
    hej1+=hej+ "\n";
    }
    alert(hej1);
  }
  // Slut! :)

// Uppgift 1a8 här:
function buttonAction8() {


  var x = document.getElementById("hiddenButton");
  if (x.style.visibility === 'visible') {
    x.style.visibility = 'hidden';
  } else {
    x.style.visibility = 'visible';
  }

  
    document.getElementById("hiddenButton").onclick = function() {

      alert("Neeeej!, \n du startade precis...\nKaffekokaren!");
    }
  

   
}

// Sista proceduren: Placera data i en tabell som byggs upp
function buttonAction9()

 
  {
    var ord = document.getElementById("arrayInput").value;
    var ordArray = ord.split(",");
  
  
    var rad = 7,
      table = document.createElement("table"),
      row = table.insertRow();
  
      for (var i = 0; i < ordArray.length; i++) {
        var cell = row.insertCell();
        cell.innerHTML = ordArray[i];
        cell.style.border = "solid 1px #f8a300"; // Överkurs (border style i cellen)
        cell.style.textAlign = "center"; // Överkurs (text centrerad i cellen)
  
        var next = i + 1;
        if (next%rad==0 && next!=ordArray.length) {
        row = table.insertRow();
      }
    }
    document.getElementById("tableContainer").style.tableLayout = "fixed"; // Överkurs
    table.style.border = "solid 3px black"; // Överkurs (border style i table)
    table.style.width = "100%"; // Överkurs (table bredd)
    table.style.backgroundColor = "#569376"; // Överkurs (table bakgrundsfärg)
  
    document.getElementById("tableContainer").append(table);
    document.getElementById("arrayInput").value = "";
  
  
  }
 
/*
 * Detta är en färdig procedur (funktion) som kopplar ihop händelsehanteraren
 * för alla knappar med de funktioner som ni har till uppgift att göra
 * NI SKALL INTE RÖRA NÅGOT HÄR:
 */

function onDoneLoadingHtml() {
  document.getElementsByName("button1")[0].onclick = buttonAction1;
  document.getElementsByName("button2")[0].onclick = buttonAction2;
  document.getElementsByName("button3")[0].onclick = buttonAction3;
  document.getElementsByName("button4")[0].onclick = buttonAction4;
  document.getElementsByName("button5")[0].onclick = buttonAction5;
  document.getElementsByName("button6")[0].onclick = buttonAction6;
  document.getElementsByName("button7")[0].onclick = buttonAction7;
  document.getElementsByName("button8")[0].onclick = buttonAction8;
  document.getElementsByName("button9")[0].onclick = buttonAction9;
  document.getElementById("hiddenButton").onclick = function () {
    alert("Neeeej!, \n du startade precis...\nKaffekokaren!");
  };
}

/*
 * Anger att när webläsaren är klar med att läsa in html, css ska den
 * köra funktionen onDoneLoadingHtml
 */
window.onload = onDoneLoadingHtml;
