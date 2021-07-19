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
var uniqueCoverInput = null;

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
  uniqueCoverInput = new UniqueCover(userCoverURL.value, userTitle.value, userDescriptor1.value, userDescriptor2.value);
  toggleToHome();
  form.classList.add('hidden');
  document.querySelector('.cover-image').src = uniqueCoverInput.coverURL;
  document.querySelector('.cover-title').innerText = uniqueCoverInput.title;
  document.querySelector('.tagline-1').innerText = uniqueCoverInput.descriptor1;
  document.querySelector('.tagline-2').innerText = uniqueCoverInput.descriptor2;
  event.preventDefault();
});

window.addEventListener('load', generateCover);

makeYourOwnCoverButton.addEventListener('click', toggleToForm);

homeButton.addEventListener('click', toggleToHome);

saveCoverButton.addEventListener('click', function() {
  saveUniqueCover(savedCovers);
});

randomCoverButton.addEventListener('click',function() {
  generateCover(covers, titles, descriptors)
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
    if(savedCoversList.includes(uniqueCoverInput) === false) {
      savedCoversList.push(uniqueCoverInput);
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

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

function generateCover() {
  document.querySelector('.cover-image').src = getRandomIndex(covers);
  document.querySelector('.cover-title').innerText = getRandomIndex(titles);
  document.querySelector('.tagline-1').innerText = getRandomIndex(descriptors);
  document.querySelector('.tagline-2').innerText = getRandomIndex(descriptors);
};
