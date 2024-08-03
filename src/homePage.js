import CARSON_PANTRY_PATH from './RestaurantFront.jpeg';
import GIO_CHICKEN_PATH from "./Gio's.jpg";
import LITTLE_REY_PATH from "./LittleRey.jpg";
import CHOP_SHOP_PATH from './ChopShop.jpg';
import CRUMBL_PATH from "./Crumbl.jpeg";

const content = document.querySelector('#content');

export function createHomePage(content){
  createWindow(content);
  createStory(content);
  createInfluences(content);
}

function createWindow (content) {
  const section = createElementWithClass('section', 'window');
  const windowImage = createElementWithClass('div','window-image');

  const carsonPantry = new Image();
  carsonPantry.src = CARSON_PANTRY_PATH;

  const windowTitle = createElementWithClass('div', 'window-title');

  const title = document.createElement('h1');
  title.textContent = "Carson's Pantry";

  windowImage.appendChild(carsonPantry);
  windowTitle.appendChild(title);
  section.append(windowImage, windowTitle);
  content.appendChild(section);
}

function createStory (content) {
  const section = createElementWithClass('section', 'story');

  const storyContainer = createElementWithClass('div', 'story-container');

  const storyTitle = createElementWithClass('h1', 'story-title');
  storyTitle.textContent = "Our Story"

  const storyContent = createElementWithClass('div', 'story-content');
  storyContent.textContent = "Carson's culinary journey began in Atlanta, where the city's vibrant food scene ignited his passion for exploration. Inspired by the eclectic mix of restaurants, diners, and pop-ups, Carson set forth on a quest to uncover new flavors and sensations. This adventureous spirit propelled him to the forefront of global culinary innovation. Despite his international reach, many of Carson's dishes are rooted in the memories of family meals at beloved eateries in his hometown."

  storyContainer.appendChild(storyTitle);
  storyContainer.appendChild(storyContent);

  section.appendChild(storyContainer);

  content.appendChild(section);
}

function createInfluences(content) {
  const section = createElementWithClass('section', 'influences');

  const title = createElementWithClass('h1', 'influences-title');
  title.textContent = 'Culinary Influences';

  content.appendChild(section);
  section.appendChild(title);


  const cardsData = [
    {
      leftSide: false,
      title: "Gios Chicken Amalfitano",
      dish: "Chicken Parm",
      description: "From the moment Carson first savored Gio's Chicken Parm, he has been a devoted patron, returning to the restaurant more times than he can count. The golden, crispy chicken, paired with the creamy, buttery pasta, creates a sublime dining experience that keeps him coming back for more.",
      imagePath: GIO_CHICKEN_PATH,
    },
    {
      leftSide: true,
      title: "Little Rey",
      dish: "Carnitas Tacos",
      description: "Carson's preference for milder flavors has influenced many of his dishes, as he never developed a taste for spiciness. Nonetheless, his passion for Mexican cuisine remains strong, inspired by his favorite taco spot back home.",
      imagePath: LITTLE_REY_PATH,
    },
    {
      leftSide: false,
      title: "Original ChopShop",
      dish: "Acai Bowl",
      description: "During his early years, Carson's dedication to fitness led him to prioritize nutrient-rich, high-protein foods. ChopShop's acai bowl became a staple in his diet, perfectly aligning with his fitness goals. The restaurant’s ability to combine nutrition with delicious flavors inspired Carson to explore creating similarly balanced dishes in his own culinary ventures.",
      imagePath: CHOP_SHOP_PATH,
    },
    {
      leftSide: true,
      title: "Crumbl Cookies",
      dish: "Chocolate Chip Cookie",
      description: "During his early years, Carson's dedication to fitness led him to prioritize nutrient-rich, high-protein foods. ChopShop's acai bowl became a staple in his diet, perfectly aligning with his fitness goals. The restaurant’s ability to combine nutrition with delicious flavors inspired Carson to explore creating similarly balanced dishes in his own culinary ventures.",
      imagePath: CRUMBL_PATH,
    }
  ]

  cardsData.forEach(card => createCard(card.leftSide, card.title, card.dish, card.description, card.imagePath));

  function createCard(leftSide, title, dish, description, image) {
    const card = createElementWithClass('div', 'card');
    const contentContainer = createElementWithClass('div', 'content-container');
    const influenceContent = createElementWithClass('div', 'influence-content');
    const influenceTitle = createElementWithClass('h1', 'influence-title');
    influenceTitle.textContent = title;
    const influenceDish = createElementWithClass('h2', 'influence-dish');
    influenceDish.textContent = dish;
    const influenceDescription = createElementWithClass('p', 'influence-description');
    influenceDescription.textContent = description;
    const influenceButton = createElementWithClass('button', 'influence-version');
    influenceButton.textContent = "Carson's Version";

    influenceContent.appendChild(influenceTitle);
    influenceContent.appendChild(influenceDish);
    influenceContent.appendChild(influenceDescription);
    influenceContent.appendChild(influenceButton);

    contentContainer.appendChild(influenceContent);

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    const restaurantImage = new Image();
    restaurantImage.src = image;
    imageContainer.appendChild(restaurantImage);

    leftSide ? card.append(contentContainer, imageContainer) : card.append(imageContainer, contentContainer);

    section.appendChild(card);

  }
}

createWindow();

createStory();

createInfluences();


function createElementWithClass(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}