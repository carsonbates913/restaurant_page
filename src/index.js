import ('./home.css');
import icon from './RestaurantFront.jpeg';

const Icon = new Image();
Icon.src = icon;


const windowBackground = document.querySelector('.window-image');

windowBackground.appendChild(Icon);