function click(val) 
         { 
             document.getElementById("result").value+=val
         } 
           
         //function that evaluates the digit and return result 
         setTimeout(function solve() 
         { 
             let x = document.getElementById("result").value 
             let y = eval(x) 
             document.getElementById("result").value = y 
         } , 10000);
           
         //function that clear the display 
         function clr() 
         { 
             document.getElementById("result").value = "" 
         } 
