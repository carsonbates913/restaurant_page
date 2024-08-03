export function createMenu (content) {

  const menu = createElementWithClass('section', 'menu');
  const menuContainer = createElementWithClass('div', 'menu-container');
  const menuTitle = document.createElement('h1');
  menuTitle.innerText = 'Menu';

  const appetizerTitle = document.createElement('h2');
  appetizerTitle.innerText = 'Appetizers';
  const appetizerGrid = createElementWithClass('div', 'menu-grid');

  const entreeTitle = document.createElement('h2');
  entreeTitle.innerText = 'Entrees';
  const entreeGrid = createElementWithClass('div', 'menu-grid');

  const dessertTitle = document.createElement('h2');
  dessertTitle.innerText = 'Desserts';
  const dessertGrid = createElementWithClass('div', 'menu-grid');

  const menuItemsEntrees = [
    {
      title: 'Oysters on the Half Shell',
      description: 'chef’s daily selection, hk mignonette, cocktail sauce',
      price: '$28.00',
    },
    {
      title: 'Steak Tartare',
      description: 'sauce gribiche, crispy capers, cured egg yolk, brioche toast points',
      price: '$34.00',
    },
    {
      title: 'Shrimp Cocktail',
      description: 'salsa coctel, avocado, plantain chips',
      price: '$26.00',
    },
    {
      title: 'Snapper Crudo',
      description: 'pickled mango purèe, fresno chile, tiger’s milk, jalapeño oil, cilantro',
      price: '$26.00',
    },
    {
      title: 'Tuna Carpaccio',
      description: 'ahi tuna, grain mustard vinaigrette, gooseberries, horseradish, pine nuts',
      price: '$28,00',
    },
    {
      title: 'Beef Wellington',
      description: 'potato purée, glazed root vegetables, red wine demi-glace ',
      price: '$74.00',
    },
    {
      title: 'Chicken Scallopini',
      description: 'chicken breast, roasted pee wee potatoes, artichokes, kale, truffle chicken',
      price: '$36.00'
    },
    {
      title: 'Crispy Skin Salmon',
      description: 'coconut green curry, sticky rice, thai apple slaw',
      price: '$44.00'
    },
    {
      title: 'Grilled Branzino',
      description: 'sauce vierge, swiss chard, almond gremolata, roasted cherry tomatoes',
      price: '$60.00'
    },
    {
      title: 'Braised Short Rib',
      description: 'yukon potato cake, spinach, crispy onions, red wine demi-glace',
      price: '$48.00'
    },
  ]
  
  const menuItemsAppetizers = [
    {
      title: 'Grilled Octopus',
      description: 'white bean purée, pee wee potatoes, roasted tomatoes, chili oil, chimichurri',
      price: '$32.00',
    },
    {
      title: 'Wagyu Meatballs',
      description: 'american wagyu, pork, slow-roasted tomato sauce, polenta croutons, parmesan, basil',
      price: '$24.00',
    },
    {
      title: 'Pan-Seared Scallops',
      description: 'corn purée, braised bacon lardons, pickled shallots, chives',
      price: '$32.00',
    },
    {
      title: 'Lobster Risotto',
      description: 'butter-poached lobster tail, braised fennel, confit lemon zest, parmesan',
      price: '$38.00',
    },
    {
      title: 'Sweet Corn Soup',
      description: 'charred corn, jalapeño cornbread croutons, lime crema, chili oil',
      price: '$16.00'
    },
    {
      title: 'Tomato Burrata Salad',
      description: 'heirloom tomatoes, white balsamic vinaigrette, basil crystals',
      price: '$19.00'
    },
    {
      title: 'Market Salad',
      description: 'butter lettuce, avocado, radish, spiced cashews, pickled pineapple, green goddess',
      price: '$ 15.00'
    },
    {
      title: 'Caesar Salad',
      description: 'parmesan frico, garlic croutons, lemon zest',
      price: '$18.00'
    },
  ]
  
  const menuItemsDesserts = [
    {
      title: 'Vanilla Cheesecake',
      description: 'graham cracker crust, lemon curd, blueberry compote',
      price: '$15.00'
    },
    {
      title: 'Coconut Three Ways',
      description: 'mango passion fruit gelée, coconut sorbet, coconut cake croutons',
      price: '$15.00'
    },
    {
      title: 'Stawberry Shortcake Trifle',
      description: 'sponge cake, pastry cream, hibiscus, macerated strawberries, toasted meringue, marcona almond crunch',
      price: '$16.00'
    },
    {
      title: 'Sticky Toffee Pudding',
      description: 'english toffee sauce, dulce de leche ice cream',
      price: '$17.00'
    },
  ]

  menuItemsAppetizers.forEach(item => createMenuItem(item.title, item.description, item.price, appetizerGrid));
  menuItemsEntrees.forEach(item => createMenuItem(item.title, item.description, item.price, entreeGrid));
  menuItemsDesserts.forEach(item => createMenuItem(item.title, item.description, item.price, dessertGrid));


  menuContainer.append(menuTitle, appetizerTitle, appetizerGrid, entreeTitle, entreeGrid, dessertTitle, dessertGrid);
  menu.appendChild(menuContainer);
  content.appendChild(menu);
  
}

function createMenuItem(title, description, price, container) {
  const item = createElementWithClass('div', 'item');

  const dishTitle = document.createElement('h3');
  dishTitle.innerText = title;

  const dishDescription = document.createElement('p');
  dishDescription.innerText = description;

  const dishPrice = createElementWithClass('div', 'price');
  dishPrice.innerText = price;

  item.append(dishTitle, dishDescription, dishPrice);

  container.appendChild(item);
}

function createElementWithClass(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}