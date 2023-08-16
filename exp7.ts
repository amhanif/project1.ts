const buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++){
const button = buttons[i];
button.addEventListener("click",function (){
    alert("button" + i + "pressed");
})
} 