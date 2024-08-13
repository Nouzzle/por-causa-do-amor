"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".windut-img");

const MAX_IMAGES = 10;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "HAHAHAHA LUCUUU, click button di bawah ini lagi bub <3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");

  var surpriseButton = document.createElement('button');
  surpriseButton.textContent = 'click!!!';
  surpriseButton.addEventListener('click', function() {
      window.location.href = 'https://app.sane.fyi/s/bf5afaf8-5556-11ef-bcb0-338d27ca3d66?t=NWNemVz18I75YB7CwtiI&utm_source=share-menu&utm_medium=web'; // Replace with the URL of your new page
  });
  titleElement.after(surpriseButton);
}



function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "woi kocak jan lo click lagi bs ga!!!",
    "woi mmekk!!",
    "woi kocak",
    "woi kocak bngat ni org",
    "udah bjir 😾",
    "woi!!!",
    "udh bs g!",
    "masi aj ia km",
    "memek",
    "😿😿😿😿😿",
    "udah ajg klik yg hijau aja  ",
  ];  

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/windut-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
document.getElementById('yes-button').addEventListener('click', handleYesClick);
