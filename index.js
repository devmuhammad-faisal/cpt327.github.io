let image = document.getElementById("image");
let welcomeMessage = document.getElementById("welcomeMessage");
let button = document.getElementById("button");


image.addEventListener("click",()=>{
    let src = image.getAttribute("src");
    if(src === "firefox-icon.png"){
        image.setAttribute("src","firefox2.png");
    }
    else{
        image.setAttribute("src","firefox-icon.png");
    }
})
function personalizedWelcomeMessage(){
    let userName = prompt("Please Enter Your name...");
    if(!userName){
        personalizedWelcomeMessage()
    }
    else{
        localStorage.setItem("name", userName);
        welcomeMessage.textContent = `Mozilla is cool, ${userName}`;   
    }
    }
if(!localStorage.getItem('name')){
    personalizedWelcomeMessage();
}
else{
    let storedUserName = localStorage.getItem("name");
    welcomeMessage.textContent = 'Mozilla is cool, '+storedUserName;
}
button.addEventListener("click",()=>{
    personalizedWelcomeMessage()
})