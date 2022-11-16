
window.alert("Welcome to Colorpicker Game")
 let box = document.querySelector(".container2")
 let btn = document.querySelector("button")
 myColor = ["pink", "red", "green", "orange", "blue"]
 let myInput = document.querySelector(".text")
 

 box.style.backgroundColor = "grey";
 function pick(){
    return parseInt(Math.random()*myColor.length)
 }

 btn.addEventListener("click", function picker(){
    if (myInput.value === myColor[pick()]){
        box.style.backgroundColor = myInput.value;
       alert("Yes, you are correct!");
   }
   else{
    box.style.backgroundColor = myColor[pick()];
       alert("Sorry, you are incorrect")
   }

})

 
 


