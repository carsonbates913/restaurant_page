import ('./home.css');
import { createHomePage } from './components/homePage.js';

const content = document.querySelector('#content');

createHomePage(content);