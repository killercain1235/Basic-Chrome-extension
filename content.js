console.log ("greetings user");

let paragraphs = document.getElementsByTagName("p");
let divs = document.getElementsByTagName("div");
let spans = document.getElementsByTagName("span");
let buttons = document.getElementsByTagName("button");

for (i=0;i<=paragraphs.length;i++) {
    paragraphs[i].style.backgroundColor = "#cc99ff";
    buttons[i].style.backgroundColor = "blue";
}