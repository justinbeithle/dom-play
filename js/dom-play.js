/*
    Create an app that on click, actors lines are highlighted


    With a single click, highlight (bold or otherwise) all lines for a specific actor in a play
    Un-highlight (normal or otherwise) all lines from all other actors in the play


    The function(s) created to do the work must accommodate any number of actors, and any number of additional lines added to the page


    HTML "hooks" may be added to the page for proper operation
*/ 

/* 
a)  All hamlet and skulls need to be removed (use a snipped of your own play/script) 
b)  Clearly describe what your page does, and how it does it, on the page 
c)  Push your changes to the repo and make sure your GitHub is page is working 
d)  Link the GitHub page to your portal and submit your portal 
*/

//This is our format for the "light switch" we are going to use
function highlight(el){

    if(el.style.backgroundColor == 'pink'){//pink
        el.style.backgroundColor ='black';
    }
    
    else{//white 
        el.style.backgroundColor='white';
    }

}

function myAlert(){
    alert("I'm clicked");
}
// This is our "light switch" that will highlight the actor depedning on the given actor
function highlightActor(actor){
    //alert("Hi, I'm" + " " +  actor);
    for(const mySpan of spans){
    if(actor == mySpan.dataset.actor){//current actor
        mySpan.style.backgroundColor ='	ivory';
    }
    else{//other actor  
        mySpan.style.backgroundColor='papayawhip';
    }
}
}


const spans = document.querySelectorAll("#play span"); //selects all the spans in our div with the id play
console.log(spans); //logs all spans into the console w/ id (#play)

for(const mySpan of spans){
    //mySpan.addEventListener("click",myAlert); 
    mySpan.addEventListener("click",function(ev){ //.addEventListener looks for a click even on eahc mySpan element 
        highlightActor (mySpan.dataset.actor);

    });
    //alert(mySpan.dataset.actor);
}