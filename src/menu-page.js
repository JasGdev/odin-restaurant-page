function loadMenuPage(){
    // append items to div#content
    const display = document.querySelector('#content');

    // main page container

    




    const menuPageContainer = document.createElement('div');
    menuPageContainer.classList.add('pageContainer', 'page');
    display.appendChild(menuPageContainer);

    // name 
    const menuPageName = document.createElement('div');
    menuPageName.classList.add('pageName');
    menuPageName.textContent = 'Menu Page';
    menuPageContainer.appendChild(menuPageName);

    // description
    const menuPageDescription = document.createElement('div');
    menuPageDescription.classList.add('pageDescription', 'menu');


    menuPageDescription.textContent = `Grilled Chicken Bowl — $12
Juicy grilled chicken served over seasoned rice, paired with fresh vegetables and a house-made sauce for a balanced, satisfying meal.


Classic Beef Burger — $11
A freshly grilled beef patty topped with melted cheese, crisp lettuce, tomato, and our signature burger sauce, served on a toasted bun.


Crispy Fries — $5
Golden, perfectly seasoned fries with a crunchy outside and fluffy inside. A must-have side for any meal.


Vegetarian Pasta — $10
Pasta tossed with sautéed seasonal vegetables in a light garlic and olive oil sauce. Simple, fresh, and full of flavor.


House Lemonade — $4
Freshly squeezed lemons, lightly sweetened and served chilled. Refreshing and perfect with any dish.
`
    menuPageContainer.appendChild(menuPageDescription);
}

export { loadMenuPage };