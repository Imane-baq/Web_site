// we need to start by creating an event listner on or button 
// all this function does is tel us that the button was clicked 
counter = 0;
function buttonClicked(){
    counter += 1;
    document.getElementById("Counter").innerHTML = "ta click ce bouton" +" " +counter +" "+"fois !";
}

const element = document.getElementById("MyBtn");
element.addEventListener("click", buttonClicked);
