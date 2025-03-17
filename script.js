console.log ("is this working?");

let input1 = document.querySelector(".mood");
    console.log("input1 works");
let input2 = document.querySelector(".ethic");
    console.log("input2 works");
let button = document.querySelector("button");


let judgement = document.querySelector(".answer");
let questioning = document.querySelector(".question")

button.onclick = function () {
    console.log ("button works");
let ans1 = input1.value;
    console.log(ans1);
let ans2 = input2.value;
    console.log(ans2);

questioning.style.display = "none";
judgement.style.display = "block";

if(ans1 === "happy" && ans2 === "now") {
    judgement.innerHTML = "rika";
} else if(ans1 === "happy" && ans2 === "later") {
    judgement.innerHTML = "poppy";
} else if(ans1 === "sad" && ans2 === "now") {
    judgement.innerHTML = "larry";
} else if (ans1 === "sad" && ans2 === "later") {
    judgement.innerHTML = "hassel";
} else {
    judgement.innerHTML = "what."
}



}