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

// //DOM Manupulation
// title.style.color = "red";
// title.style.backgroundColor = "black";

//ON click
// let btn = document.getElementById("btn");
// let result = document.getElementById("heading2");
// btn.onclick = function(){
//     result.innerText = "Button Clicked!"
// }
// //addEventListerner
// let btn = document.getElementById("btn");
// let heading = document.getElementById("heading2");
// btn.addEventListener("click", function() {
//     heading.innerText = "Button Clicked!";
// });



// // event types
// btn.addEventListener("click", function(event){
//     console.log(event.type);
// });
// btn.addEventListener("click", function(events) {
//     console.log(events.target);
// });
// btn.addEventListener("mouseover", function(event) {
//     console.log("Mouse is on button");
// });
// let input = document.getElementById("name");
// //key down
// input.addEventListener("keydown", function(event) {
//     console.log(event.key);
// });
// //key up
// input.addEventListener("keyup", function(event) {
//     console.log(event.key);
// });
// //input
// input.addEventListener("input", function(event) {
//     console.log(input.value);
// });
// //charector counting
// input.addEventListener("input", function(event) {
//     console.log(input.value.length);
// });
// //change event
// input.addEventListener("change", function() {
//     console.log(input.value);
// });

// //Theme changer
// const button = document.getElementById("themebtn");
// button.addEventListener("click", () =>{
//     document.body.classList.toggle("dark")
// });

// //counter app
// let count = 0;
// const display = document.getElementById("count");
// document.getElementById("add").addEventListener("click", () => {
//     count++;
//     display.textContent=count;
// });


console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 2000);

console.log("End");
