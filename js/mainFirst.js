function clickfunction() { 
    var seltheme = document.getElementById('selcolor').value;
         var elem = document.getElementById('test');
         if(seltheme == "Red") {
        elem.style.backgroundColor = 'red'; 
         }
         else  if(seltheme == "Green") {
        elem.style.backgroundColor = 'green'; 
         }
        }