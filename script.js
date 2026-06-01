const roles = [

  "Web Developer",
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Web Designer",
  "UI/UX Designer",
  "3D Animator"

];

let roleIndex = 0;
let charIndex = 0;

const changingText = document.getElementById("changing-text");

function typeEffect(){

  if(charIndex < roles[roleIndex].length){

    changingText.textContent += roles[roleIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect,100);

  }

  else{

    setTimeout(eraseEffect,1500);

  }

}

function eraseEffect(){

  if(changingText.textContent.length > 0){

    changingText.textContent =
    changingText.textContent.slice(0,-1);

    setTimeout(eraseEffect,50);

  }

  else{

    roleIndex++;

    if(roleIndex >= roles.length){

      roleIndex = 0;

    }

    charIndex = 0;

    setTimeout(typeEffect,300);

  }

}

typeEffect();
/* FAQ TOGGLE */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    item.classList.toggle("active");

    const answer = item.querySelector(".faq-answer");

    if(item.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
    else{
      answer.style.maxHeight = 0;
    }

  });

});
/* ================= SCROLL TO TOP ================= */

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});
function toggleMenu(){
  document.querySelector("nav ul").classList.toggle("active");
}