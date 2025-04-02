console.log ("is this working?");

let input1 = document.querySelector(".mood");
    console.log("input1 works");
let input2 = document.querySelector(".ethic");
    console.log("input2 works");
let button = document.querySelector("button");


let judgement = document.querySelector(".answer");
let questioning = document.querySelector(".question");

let Rika_desc = document.querySelector(".Rika_desc");
Rika_desc.style.display = "none";
let Poppy_desc = document.querySelector(".Poppy_desc");
Poppy_desc.style.display = "none";
let Larry_desc = document.querySelector(".Larry_desc");
Larry_desc.style.display = "none";
let Hassel_desc = document.querySelector(".Hassel_desc");
Hassel_desc.style.display = "none";


button.onclick = function () {
    console.log ("button works");
let ans1 = input1.value;
    console.log(ans1);
let ans2 = input2.value;
    console.log(ans2);


judgement.style.display = "block";

if((ans1 === "happy" || ans1 === "Happy") && (ans2 === "now" || ans2 === "Now")) {
    questioning.style.display = "none";
    judgement.innerHTML = "YOU ARE: Rika";
    Rika_desc.style.display = "block";
} else if((ans1 === "happy" || ans1 === "Happy") && (ans2 === "later" || ans2 === "Later")) {
    questioning.style.display = "none";
    judgement.innerHTML = "YOU ARE: Poppy";
    Poppy_desc.style.display = "block";
} else if((ans1 === "sad" || ans1 === "Sad") && (ans2 === "now" || ans2 === "Now")) {
    questioning.style.display = "none";
    judgement.innerHTML = "YOU ARE: Larry";
    Larry_desc.style.display = "block";
} else if((ans1 === "sad" || ans1 === "Sad") && (ans2 === "later" || ans2 === "Later")) {
    questioning.style.display = "none";
    judgement.innerHTML = "YOU ARE: Hassel";
    Hassel_desc.style.display = "block";
} else {
    judgement.innerHTML = "Please make sure you've spelled everything correctly. Try again.";
}



}