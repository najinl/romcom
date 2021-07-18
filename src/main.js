var coverImages = [
  "./assets/bluebrocade.jpg",
  "./assets/dance.jpg",
  "./assets/embrace.png",
  "./assets/fire.png",
  "./assets/frock.png",
  "./assets/glorious.jpg",
  "./assets/golden.jpg",
  "./assets/maskedmeeting.jpg",
  "./assets/masquerade.jpg",
  "./assets/moonlitmeadow.jpg",
  "./assets/office.png",
  "./assets/picnic.jpg",
  "./assets/pirate.jpg",
  "./assets/prairie.jpg",
  "./assets/redrenaissance.jpg",
  "./assets/regency.jpg",
  "./assets/ribbons.jpg",
  "./assets/roses.jpg",
  "./assets/ruffles.jpg",
  "./assets/scroll.jpg",
  "./assets/shine.png",
  "./assets/smolder.png",
  "./assets/snow.jpg",
  "./assets/sparkles.jpg",
  "./assets/stripes.png",
  "./assets/wildwest.jpg",
  "./assets/windswept.jpg"
];

var coverTitles = [
  "Passionate Moonlight",
  "Love's Misery",
  "Roses and Flame",
  "Innocent Roses",
  "Silk and Sense",
  "Hearts Aflame",
  "Fiery Passion",
  "Stolen Hearts",
  "Secrets and Silk",
  "Dreams of Fire",
  "Lovers and Enemies",
  "Passion's Embrace",
  "Harbinger by Moonlight",
  "Rouge Red",
  "Moonlit Mysteries",
  "Crimson Roses",
  "Destiny's Fires",
  "Proposals and Passion",
  "Silk Wedding",
  "Masked Seduction",
  "Crimson Masquerade",
  "Stolen Rubies",
  "Emerald Eyes",
  "Sapphire Skies",
  "Opal Passions"
];

var descriptors = [
  "passion",
  "glory",
  "romance",
  "woe",
  "sorrow",
  "pain",
  "ardor",
  "devotion",
  "excitement",
  "fervor",
  "rage",
  "spirit",
  "zeal",
  "ecstasy",
  "fire",
  "storms",
  "tempests",
  "rapture",
  "ire",
  "jealousy",
  "exhilaration",
  "bliss",
  "enchantment",
  "paradise",
  "calamity",
  "disaster",
  "heartache",
  "misfortune",
  "agony",
  "curses",
  "blessings",
  "melancholy"
];

var randomCoverButton = document.querySelector('.random-cover-button');
var makeYourOwnCoverButton = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var form = document.querySelector('.form-view');
var savedCoversView = document.querySelector('.saved-view')
var showNewRandomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var savedCoversSection = document.querySelector('.saved-covers-section')
var makeMyBookButton = document.querySelector('.create-new-book-button');
var savedCovers = [];
var uniqueCoverInputs = null;

class UniqueCover {
  constructor(userInputURL, userInputTitle, userDescriptor1, userDescriptor2){
    this.coverURL = userInputURL;
    this.title = userInputTitle;
    this.descriptor1 = userDescriptor1;
    this.descriptor2 = userDescriptor2;
  }
};

makeMyBookButton.addEventListener('click', function(event){
  var userCoverURL = document.querySelector('#cover');
  var userTitle = document.querySelector('#title');
  var userDescriptor1 = document.querySelector('#descriptor1');
  var userDescriptor2 = document.querySelector('#descriptor2');
  uniqueCoverInputs = new UniqueCover(userCoverURL.value, userTitle.value, userDescriptor1.value, userDescriptor2.value);
  toggleToHome();
  form.classList.add('hidden');
  document.querySelector('.cover-image').src = uniqueCoverInputs.coverURL;
  document.querySelector('.cover-title').innerText = uniqueCoverInputs.title;
  document.querySelector('.tagline-1').innerText = uniqueCoverInputs.descriptor1;
  document.querySelector('.tagline-2').innerText = uniqueCoverInputs.descriptor2;
  event.preventDefault();
});

makeYourOwnCoverButton.addEventListener('click', toggleToForm);

homeButton.addEventListener('click', toggleToHome);

saveCoverButton.addEventListener('click', function() {
  saveUniqueCover(savedCovers);
});

randomCoverButton.addEventListener('click',function() {
  generateCover(coverImages, coverTitles, descriptors)
});

viewSavedCoversButton.addEventListener('click', function(event) {
  viewSavedCovers();
  event.preventDefault();
});

function viewSavedCovers() {
  savedCoversView.classList.remove('hidden');
  homeView.classList.add('hidden');
  form.classList.add('hidden');
  viewMiniCovers();
};

function viewMiniCovers() {
  savedCoversSection.innerHTML = '';
  for(var i =0; i < savedCovers.length; i++) {
    var coverContainer = document.createElement('div');
    var coverElements = `<img class="cover-title" src=${savedCovers[i].coverURL}>
                         <h2 class="cover-title">${savedCovers[i].title}</h2>
                         <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].descriptor1}</span> and <span class="tagline-2">${savedCovers[i].descriptor2}</span></h3>
                         <img class="overlay" src="./assets/overlay.png">`;
    coverContainer.setAttribute('class', 'mini-cover');
    coverContainer.innerHTML = coverElements;
    savedCoversSection.appendChild(coverContainer);
    };
};

function saveUniqueCover(savedCoversList) {
  for(var i = 0; i <= savedCoversList.length; i++) {
    if(savedCoversList.includes(uniqueCoverInputs) === false) {
      savedCoversList.push(uniqueCoverInputs);
    };
  }
};

function toggleToForm(){
  homeView.classList.add('hidden');
  form.classList.remove('hidden');
  showNewRandomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedCoversView.classList.add('hidden');
};

function displaySavedCovers() {
  savedCoversView.classList.remove('hidden');
  form.classList.add('hidden');
};

function toggleToHome() {
  homeView.classList.remove('hidden');
  savedCoversView.classList.add('hidden');
  showNewRandomCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  saveCoverButton.classList.remove('hidden');
};

function generateCover(listOfImages, listOfTitles, listOfDescriptors) {
  var randomImage = listOfImages[Math.floor(Math.random() * listOfImages.length)];
  var randomTitle = listOfTitles[Math.floor(Math.random() * listOfTitles.length)];
  var randomDescriptor1 = listOfDescriptors[Math.floor(Math.random() * listOfDescriptors.length)];
  var randomDescriptor2 = listOfDescriptors[Math.floor(Math.random() * listOfDescriptors.length)];

    document.querySelector('.cover-image').src = randomImage;
    document.querySelector('.cover-title').innerText = randomTitle;
    document.querySelector('.tagline-1').innerText = randomDescriptor1;
    document.querySelector('.tagline-2').innerText = randomDescriptor2;
};

generateCover(coverImages, coverTitles, descriptors);
