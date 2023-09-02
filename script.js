const header = document.createElement("header");
header.classList.add("header");

const headerLogo = document.createElement("div");
headerLogo.classList.add("header__logo");
header.appendChild(headerLogo);

document.body.appendChild(header);

const contemplateSection = document.querySelector(".contemplate");

const intro = document.createElement("section");
intro.classList.add("intro");

const introPara = document.createElement("p");
introPara.classList.add("intro__para");
introPara.innerText = "journey with \n friendship + ease";
intro.appendChild(introPara);
contemplateSection.appendChild(intro);

const grass = document.createElement("div");
grass.classList.add("grass");

const grassVideo = document.createElement("video");
grassVideo.classList.add("grass__video");
grassVideo.autoplay = true;
grassVideo.loop = true;
grassVideo.muted = true;
grassVideo.width = "100%";

const grassVideoSource = document.createElement("source");
grassVideoSource.src = "./assets/videos/Land.mp4";
grassVideoSource.type = "video/mp4";
grassVideo.appendChild(grassVideoSource);
grass.appendChild(grassVideo);
contemplateSection.appendChild(grass);

const middle = document.createElement("section");
middle.classList.add("middle");

const middleTitle = document.createElement("h2");
middleTitle.classList.add("middle__title");
middleTitle.innerText = "Surah";
middle.appendChild(middleTitle);

const middlePara = document.createElement("p");
middlePara.classList.add("middle__para");
middlePara.innerText = "";
middle.appendChild(middlePara);

contemplateSection.appendChild(middle);

const sea = document.createElement("div");
sea.classList.add("sea");

const seaVideo = document.createElement("video");
seaVideo.classList.add("sea__video");
seaVideo.autoplay = true;
seaVideo.loop = true;
seaVideo.muted = true;
seaVideo.width = "100%";

const seaVideoSource = document.createElement("source");
seaVideoSource.src = "./assets/videos/Sea.mp4";
seaVideoSource.type = "video/mp4";
seaVideo.appendChild(seaVideoSource);
sea.appendChild(seaVideo);
contemplateSection.appendChild(sea);

const bottom = document.createElement("section");
bottom.classList.add("thoughts");

const thoughtsDisplay = document.createElement("div");
thoughtsDisplay.classList.add("thoughts__journal");
bottom.appendChild(thoughtsDisplay);

contemplateSection.appendChild(bottom);

const thoughtJournal = document.createElement("input");
thoughtJournal.classList.add("thoughts__journal-input");
thoughtJournal.type = "text";
thoughtJournal.id = "thought-journal";
thoughtJournal.placeholder = "Enter your thoughts, feelings, emotions here...";
bottom.appendChild(thoughtJournal);

const submitThought = document.createElement("button");
thoughtJournal.classList.add("thoughts__journal-button");
submitThought.id = "submit-thought";
submitThought.innerText = "Memorialize";
bottom.appendChild(submitThought);

const sky = document.createElement("div");
sky.classList.add("sky");

const skyVideo = document.createElement("video");
skyVideo.classList.add("sky__video");
skyVideo.autoplay = true;
skyVideo.loop = true;
skyVideo.muted = true;
skyVideo.width = "100%";

const skyVideoSource = document.createElement("source");
skyVideoSource.src = "./assets/videos/Sky.mp4";
skyVideoSource.type = "video/mp4";
skyVideo.appendChild(skyVideoSource);
sky.appendChild(skyVideo);
contemplateSection.appendChild(sky);

const body = document.querySelector(".contemplate");
const footer = document.createElement("footer");
const footerText = document.createElement("p");
footerText.classList.add("footer__text");
footerText.innerText = "Rafik ♡ Arwah \n © 2023 All rights reserved.";
footer.appendChild(footerText);
contemplateSection.appendChild(footer);

// window.addEventListener('scroll', function () {
// 	let scrollPosition = window.pageYOffset;

// 	let grassVideo = document.querySelector('.grass__video');
// 	grassVideo.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';

// 	let seaVideo = document.querySelector('.sea__video');
// 	seaVideo.style.transform = 'translateY(' + scrollPosition * 0.2 + 'px)';

// 	let skyVideo = document.querySelector('.sky__video');
// 	skyVideo.style.transform = 'translateY(' + scrollPosition * 0.1 + 'px)';
// });

window.addEventListener("DOMContentLoaded", (event) => {
  const storedThoughts = JSON.parse(localStorage.getItem("thoughts"));

  if (storedThoughts) {
    storedThoughts.forEach((thought) => {
      const thoughtPara = document.createElement("p");
      thoughtPara.innerText = thought;
      thoughtsDisplay.appendChild(thoughtPara);
    });
  }
});

function deleteThought(event) {
  const thoughtElement = event.target.closest(".thought");
  if (thoughtElement) {
    thoughtElement.remove();
  }
}

submitThought.addEventListener("click", () => {
  const thought = thoughtJournal.value;
  if (thought) {
    const thoughtPara = document.createElement("p");
    thoughtPara.classList.add("thoughts");
    thoughtPara.innerText = thought;
    thoughtsDisplay.appendChild(thoughtPara);

    let thoughts = JSON.parse(localStorage.getItem("thoughts")) || [];
    thoughts.push(thought);
    localStorage.setItem("thoughts", JSON.stringify(thoughts));

    thoughtsDisplay.appendChild(thoughtContainer);
    thoughtJournal.value = "";
  }
});

//API code
axios
  .get(
    "https://api.quran.com/api/v4/verses/by_chapter/94?language=en&words=true&page=1&per_page=10"
  )
  .then((response) => {
    const verses = response.data.verses;
    console.log(response);

    verses.forEach((verse) => {
      const versePara = document.createElement("p");
      const words = verse.words.map((word) => word.translation.text);
      const verseText = words.join(" ");
      versePara.innerText = verseText;
      middlePara.appendChild(versePara);
    });
  })
  .catch((error) => {
    console.log(error);
  });
