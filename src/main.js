// Create variables targetting the relevant DOM elements here 👇


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


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

var randomCoverButton = document.querySelector('.random-cover-button');

var makeYourOwnCoverButton = document.querySelector('.make-new-button');
var showRandomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var homeView = document.querySelector('.home-view');
var form = document.querySelector('.form-view');

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', function(){
  generateCover(coverImages, coverTitles, descriptors)
});

makeYourOwnCoverButton.addEventListener('click', toggleToForm);


// Create your event handlers and other functions here 👇

function toggleToForm() {
  homeView.classList.add('hidden');
  form.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  showRandomCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}


function generateCover(listOfImages, listOfTitles, listOfDescriptors) {
  console.log(listOfImages, listOfTitles, listOfDescriptors);
  var randomImage = listOfImages[Math.floor(Math.random() * listOfImages.length)];
  var randomTitle = listOfTitles[Math.floor(Math.random() * listOfTitles.length)];
  var randomDescriptor1 = listOfDescriptors[Math.floor(Math.random() * listOfDescriptors.length)];
  var randomDescriptor2 = listOfDescriptors[Math.floor(Math.random() * listOfDescriptors.length)];


    document.querySelector('.cover-image').src = randomImage;
    document.querySelector('.cover-title').innerText = randomTitle;
    document.querySelector('.tagline-1').innerText = randomDescriptor1;
    document.querySelector('.tagline-2').innerText = randomDescriptor2;
}


generateCover(coverImages, coverTitles, descriptors);

// ..........................................................................
