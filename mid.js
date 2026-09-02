// // JS_DOM
// let heading = document.getElementById("title");
// console.log(heading.innerText = "javascript DOM");

// // js_querySelector
// let para = document.querySelector(".message");
// console.log(para.innerText = "devika");

// // js_querySelectorAll
// let paragraph = document.querySelectorAll(".message");
// console.log(paragraph.innerText = "hello");

// //querySelector with loops
// let messages = document.querySelectorAll(".message");
// for(let i = 0; i < messages.length; i++) {
//     messages[i].innerText = "Hello";
// }
title.style.color = "red";
title.style.backgroundColor = "black";

let btn = document.getElementById("btn");
let result = document.getElementById("heading2");
btn.onclick = function(){
    result.innerText = "Button Clicked!"
}