const texts = ["Web Developer", "Graphic Designer", "Mahasiswa Informatika"];
let i = 0;
let j = 0;
let isDeleting = false;

function typingEffect() {
  const typingElement = document.getElementById("typing");
  const currentText = texts[j];

  if (!isDeleting && i < currentText.length) {
    typingElement.innerHTML = currentText.substring(0, i + 1);
    i++;
    setTimeout(typingEffect, 150);
  } else if (isDeleting && i > 0) {
    typingElement.innerHTML = currentText.substring(0, i - 1);
    i--;
    setTimeout(typingEffect, 100);
  } else {
    if (!isDeleting && i === currentText.length) {
      isDeleting = true;
      setTimeout(typingEffect, 1000);
    } else if (isDeleting && i === 0) {
      isDeleting = false;
      j = (j + 1) % texts.length;
      setTimeout(typingEffect, 500);
    }
  }
}

typingEffect();

const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        sec.classList.add("show");
      }
    });
  });
