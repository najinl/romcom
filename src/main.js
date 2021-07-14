// Create variables targetting the relevant DOM elements here 👇
//var coverTitle the h2 tag for Cover-Title
//`A tale of ${tagline1} and ${tagline2}`
//newPageTitle = 'The title has changed!';

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

/*
document.querySelector('h2').textContent = "Nadia's Tale";
document.querySelector('.cover-title').textContent = "Nalle's Tale";
*/




// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇



// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateCover(listOfImages, listOfTitles, listOfDescriptors) {
  var randomImage = listOfImages[Math.floor(Math.random() * listOfImages.length)];
  var randomTitle = listOfTitles[Math.floor(Math.random() * listOfTitles.length)];
  var randomDescriptor1 = listOfDescriptors[Math.floor(Math.random() * listOfDescriptors.length)];
  var randomDescriptor2 = listOfDescriptors[Math.floor(Math.random() * listOfDescriptors.length)];

    document.querySelector('.cover-image').src = randomImage;
    document.querySelector('.cover-title').textContent = randomTitle;
    document.querySelector('.tagline-1').textContent = randomDescriptor1;
    document.querySelector('.tagline-2').textContent = randomDescriptor2;
}


generateCover(coverImages, coverTitles, descriptors);
