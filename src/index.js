import ('./home.css');
import { createHomePage } from './components/homePage.js';
import { createMenu } from './components/menu.js';

const content = document.querySelector('#content');

createHomePage(content);

function clearPage() {
  content.innerHTML = '';
}

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');

home.addEventListener("click", () => {
  clearPage();
  createHomePage(content);
})

menu.addEventListener("click", () => {
  clearPage();
  createMenu(content);
})