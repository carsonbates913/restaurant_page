import ('./home.css');

const content = document.querySelector('#content');

function createWindow () {
  const section = document.createElement('section');
  section.className = 'window';

  const windowImage = document.createElement('div');
  windowImage.className = 'window-image';

  const windowTitle = document.createElement('div');
  windowTitle.className = 'window-title';

  const title = document.createElement('h1');
  title.textContent = "Carson's Pantry";

  windowTitle.appendChild(title);

  section.appendChild(windowImage);
  section.appendChild(windowTitle);

  content.appendChild(section);
}

function createStory () {
  const section = document.createElement('section');
  section.className = 'story';

  const storyContainer = document.createElement('div');
  storyContainer.className = 'story-container';

  const storyTitle = document.createElement('h1');
  storyTitle.className = 'story-title';

  const storyContent = document.createElement('div');
  storyContent.className = 'story-content';

  storyContainer.appendChild(storyContent);
  storyContainer.appendChild(storyTitle);

  section.appendChild(storyContainer);

  content.appendChild(section);
}

function createInfluences() {
  const section = document.createElement('section');
  section.className = 'influences';

  const title = document.createElement('h1');
  title.className = 'influences-title';

  function createCard() {
    const card = document.createElement('div');
    card.className = 'card';
  }
}

createWindow();

createStory();







/*
import icon from './RestaurantFront.jpeg';

const Icon = new Image();
Icon.src = icon;


const windowBackground = document.querySelector('.window-image');

windowBackground.appendChild(Icon);

import image1 from "./Gio's.jpg";

const Image1 = new Image();
Image1.src = image1;

const rest1 = document.querySelector('#rest1');
rest1.appendChild(Image1);

import image3 from './ChopShop.jpg';

const Image3 = new Image();
Image3.src = image3;

const rest3 = document.querySelector('#rest3');
rest3.appendChild(Image3);

import image2 from "./LittleRey.jpg";

const Image2 = new Image();
Image2.src = image2;

const rest2 = document.querySelector('#rest2');
rest2.appendChild(Image2);

import image4 from "./Gio's.jpg";

const Image4 = new Image();
Image4.src = image4;

const rest4 = document.querySelector('#rest4');
rest4.appendChild(Image4);

*/