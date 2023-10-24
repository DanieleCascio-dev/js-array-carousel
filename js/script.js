//Dichiarazioni variabili

const items = document.querySelector(".items");
let imgMess = "";

const arrayImg = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

// console.log(arrayImg);

for (let i = 0; i < arrayImg.length; i++) {
  const curImg = arrayImg[i];
  imgMess += ` <div class="item">
  <img src="${curImg}" alt="" />
</div> `;
  /* console.log(imgMess); */
}
console.log(imgMess);
items.innerHTML += imgMess;

//Array with all item in html
const allImg = document.querySelectorAll(".item");
console.log(allImg);

//Set the first img to display block
allImg[0].classList.add("active");

//set a variable for index
let indexImg = 0;

//Event listener and for iterations to "next" div
document.querySelector(".next").addEventListener("click", function () {
  allImg[indexImg].classList.remove("active");
  console.log(allImg[indexImg]);
  indexImg++;
  allImg[indexImg].classList.add("active");
});
