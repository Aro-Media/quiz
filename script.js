console.log ("is this working?");

let input1 = document.querySelector(".name");
    console.log("input1 works");
let input2 = document.querySelector(".quest");
    console.log("input2 works");
let button = document.querySelector("button");



button.onclick = function () {
    console.log ("button works");
let ans1 = input1.value;
    console.log(ans1);
let ans2 = input2.value;
    console.log(ans2);

if(ans1 === "apple" && ans2 === "orange") {
    console.log("banana");
} else if(ans1 === "milcery" && ans2 === "alcremie") {
    console.log("Decorate");
}
}