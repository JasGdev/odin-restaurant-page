import foodImg from "./food.jpg";

function loadHomePage(){
    // append items to div#content
    const display = document.querySelector('#content');

    // main page container

    
    const backgroundImg = document.createElement("img");
    backgroundImg.src = foodImg;



    const homePageContainer = document.createElement('div');
    homePageContainer.classList.add('pageContainer', 'homePage');
    display.style.backgroundImage = `url(${foodImg})`;
    display.style.backgroundSize = 'cover';
    display.style.backgroundPosition = 'center';
    display.style.backgroundRepeat = 'no-repeat';
    display.appendChild(homePageContainer);

    // name 
    const homePageName = document.createElement('div');
    homePageName.classList.add('homePageName');
    homePageName.textContent = 'The Food Court';
    homePageContainer.appendChild(homePageName);

    // description
    const homePageDescription = document.createElement('div');
    homePageDescription.classList.add('homePageDescription');


    homePageDescription.textContent = `The Food Court brings together a variety of flavors under one roof. 

    
    From quick bites to full meals, our menu is designed to offer something for everyone. 
    

    Freshly prepared, fast, and satisfying — it’s the perfect place to grab a meal any time of day.`
    homePageContainer.appendChild(homePageDescription);
}

export { loadHomePage };