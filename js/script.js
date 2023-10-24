//Dichiarazioni variabili

const items = document.querySelector(".items");
let imgMess = "";
console.log(items);

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
  imgMess += ` <!-- <div class="item">
  <img src="${curImg}" alt="" />
</div> -->`;
  /* console.log(imgMess); */
}
console.log(imgMess);
items.innerHTML += imgMess;
